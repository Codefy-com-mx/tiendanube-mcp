import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readdir, readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, "..", "docs");

interface DocEntry {
  slug: string;
  title: string;
}

interface SearchResult {
  title: string;
  uri: string;
  excerpts: string[];
}

async function loadDocCache(): Promise<Map<string, { title: string; content: string }>> {
  let files: string[];
  try {
    files = (await readdir(DOCS_DIR)).filter((f) => f.endsWith(".md"));
  } catch (err) {
    throw new Error(
      `No se pudo leer el directorio de documentación "${DOCS_DIR}": ${String(err)}`
    );
  }

  const cache = new Map<string, { title: string; content: string }>();
  const slugsSeen = new Map<string, string>();

  for (const fileName of files) {
    const title = fileName
      .replace(/\s*Nuvemshop API\.md$/i, "")
      .replace(/\.md$/i, "")
      .trim();
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    if (slugsSeen.has(slug)) {
      throw new Error(
        `Colisión de slug detectada: "${slug}" generado tanto por "${slugsSeen.get(slug)}" como por "${fileName}". Renombra uno de los archivos.`
      );
    }
    slugsSeen.set(slug, fileName);

    try {
      const content = await readFile(join(DOCS_DIR, fileName), "utf-8");
      cache.set(slug, { title, content });
    } catch (err) {
      process.stderr.write(
        `[tiendanube-mcp] WARN: No se pudo leer "${fileName}", se omite. ${String(err)}\n`
      );
    }
  }

  return cache;
}

export async function registerDocResources(server: McpServer): Promise<{ docCount: number }> {
  const cache = await loadDocCache();

  const docList: DocEntry[] = Array.from(cache.entries()).map(([slug]) => ({
    slug,
    title: cache.get(slug)!.title,
  }));

  // Pre-serialise list_docs payload once at startup (issue #6)
  const listPayload = JSON.stringify(
    docList.map((d) => ({
      uri: `tiendanube://docs/${d.slug}`,
      name: d.title,
      description: `Documentación del recurso: ${d.title}`,
    })),
    null,
    2
  );

  server.registerResource(
    "list_docs",
    "tiendanube://docs/list",
    {
      description:
        "Lista todos los archivos de documentación disponibles en el servidor MCP con su URI para lectura individual.",
      mimeType: "application/json",
    },
    async () => ({
      contents: [
        {
          uri: "tiendanube://docs/list",
          mimeType: "application/json",
          text: listPayload,
        },
      ],
    })
  );

  for (const { slug, title } of docList) {
    const entry = cache.get(slug)!;
    server.registerResource(
      `doc_${slug}`,
      `tiendanube://docs/${slug}`,
      {
        description: `Documentación completa de la API para ${title}: propiedades, endpoints, parámetros, ejemplos de request/response, rate limiting y errores.`,
        mimeType: "text/markdown",
      },
      async () => ({
        contents: [
          {
            uri: `tiendanube://docs/${slug}`,
            mimeType: "text/markdown",
            text: entry.content,
          },
        ],
      })
    );
  }

  server.registerTool(
    "search_docs",
    {
      title: "Buscar en documentación",
      description:
        "Busca un término en todos los archivos de documentación de la API de Tiendanube/Nuvemshop. " +
        "Devuelve los recursos que contienen el término con fragmentos relevantes y su URI para leerlos completos.",
      inputSchema: {
        query: z
          .string()
          .min(2)
          .max(200)
          .describe(
            "Término a buscar. Ej: 'webhook', 'payment_status', 'Authorization', 'stock'"
          ),
      },
    },
    async ({ query }) => {
      const lower = query.toLowerCase();
      const results: SearchResult[] = [];

      for (const { slug, title } of docList) {
        const content = cache.get(slug)!.content;
        if (!content.toLowerCase().includes(lower)) continue;

        const lines = content.split("\n");
        const excerpts: string[] = [];

        for (let i = 0; i < lines.length; i++) {
          if (excerpts.length >= 3) break;
          const line = lines[i] ?? "";
          if (!line.toLowerCase().includes(lower)) continue;
          const start = Math.max(0, i - 1);
          const end = Math.min(lines.length, i + 3);
          const snippet = lines
            .slice(start, end)
            .join("\n")
            .trim()
            .slice(0, 300);
          if (snippet && !excerpts.includes(snippet)) {
            excerpts.push(snippet);
          }
          // Skip to end of captured window to avoid overlapping excerpts (issue #5)
          i = end - 1;
        }

        results.push({ title, uri: `tiendanube://docs/${slug}`, excerpts });
      }

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No se encontraron resultados para "${query}".` }],
        };
      }

      const output = [
        `# Resultados para "${query}" — ${results.length} recurso(s)`,
        "",
        ...results.map((r) =>
          [
            `## ${r.title}`,
            `URI: \`${r.uri}\``,
            "",
            ...r.excerpts.map((e) => "```\n" + e + "\n```"),
          ].join("\n")
        ),
        "",
        "Usa la URI con la herramienta de lectura de recursos para ver la documentación completa.",
      ];

      return { content: [{ type: "text", text: output.join("\n") }] };
    }
  );

  return { docCount: cache.size };
}
