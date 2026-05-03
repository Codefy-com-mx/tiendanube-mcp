import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, "..", "docs");

interface DocFile {
  fileName: string;
  slug: string;
  title: string;
  filePath: string;
}

function getDocFiles(): DocFile[] {
  const files = readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md"));
  return files.map((fileName) => {
    const title = fileName.replace("  Nuvemshop API.md", "");
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    return {
      fileName,
      slug,
      title,
      filePath: join(DOCS_DIR, fileName),
    };
  });
}

export function registerDocResources(server: McpServer) {
  const docs = getDocFiles();

  server.registerResource(
    "list_docs",
    "tiendanube://docs/list",
    {
      description:
        "Lista todos los archivos de documentación disponibles en el servidor MCP con su URI para lectura individual.",
      mimeType: "application/json",
    },
    async () => {
      const list = docs.map((d) => ({
        uri: `tiendanube://docs/${d.slug}`,
        name: d.title,
        description: `Documentación del recurso: ${d.title}`,
      }));
      return {
        contents: [
          {
            uri: "tiendanube://docs/list",
            mimeType: "application/json",
            text: JSON.stringify(list, null, 2),
          },
        ],
      };
    }
  );

  for (const doc of docs) {
    server.registerResource(
      `doc_${doc.slug}`,
      `tiendanube://docs/${doc.slug}`,
      {
        description: `Documentación completa de la API para ${doc.title}: propiedades, endpoints, parámetros, ejemplos de request/response, rate limiting y errores.`,
        mimeType: "text/markdown",
      },
      async () => {
        const content = readFileSync(doc.filePath, "utf-8");
        return {
          contents: [
            {
              uri: `tiendanube://docs/${doc.slug}`,
              mimeType: "text/markdown",
              text: content,
            },
          ],
        };
      }
    );
  }
}
