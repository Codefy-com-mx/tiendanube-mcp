import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { resources } from "../data/resources.js";

export function registerSearchResources(server: McpServer) {
  server.registerTool(
    "search_resources",
    {
      title: "Buscar recursos de la API",
      description:
        "Lista y busca los recursos disponibles en la API REST de Tiendanube. " +
        "Sin argumentos devuelve todos los recursos. Con 'query' filtra por nombre o descripción.",
      inputSchema: {
        query: z
          .string()
          .optional()
          .describe(
            "Texto de búsqueda para filtrar recursos (nombre o descripción). Ej: 'productos', 'órdenes'"
          ),
      },
    },
    async ({ query }) => {
      const filtered = query
        ? resources.filter(
            (r) =>
              r.name.toLowerCase().includes(query.toLowerCase()) ||
              r.slug.toLowerCase().includes(query.toLowerCase()) ||
              r.description.toLowerCase().includes(query.toLowerCase())
          )
        : resources;

      if (filtered.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No se encontraron recursos que coincidan con "${query}".`,
            },
          ],
        };
      }

      const lines = [
        `# Recursos de la API de Tiendanube${query ? ` — búsqueda: "${query}"` : ""}`,
        `Base URL: https://api.tiendanube.com/v1/{store_id}`,
        "",
        ...filtered.map((r) => {
          const methodCounts = r.endpoints.reduce<Record<string, number>>(
            (acc, e) => {
              acc[e.method] = (acc[e.method] ?? 0) + 1;
              return acc;
            },
            {}
          );
          const methods = Object.entries(methodCounts)
            .map(([m, c]) => `${m}×${c}`)
            .join(", ");
          return (
            `## ${r.name} (\`${r.slug}\`)\n` +
            `${r.description}\n` +
            `Endpoints: ${r.endpoints.length} (${methods})\n` +
            `URL base: \`${r.baseUrl}\``
          );
        }),
        "",
        `Usa **get_resource_detail** con el slug para ver campos, endpoints y ejemplos completos.`,
        `Slugs disponibles: ${filtered.map((r) => r.slug).join(", ")}`,
      ];

      return { content: [{ type: "text", text: lines.join("\n\n") }] };
    }
  );
}
