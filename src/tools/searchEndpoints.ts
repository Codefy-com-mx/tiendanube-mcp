import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { resources } from "../data/resources.js";

export function registerSearchEndpoints(server: McpServer) {
  server.registerTool(
    "search_endpoints",
    {
      title: "Buscar endpoints",
      description:
        "Busca endpoints de la API de Tiendanube por método HTTP (GET, POST, PUT, DELETE) " +
        "o por texto en el path o descripción.",
      inputSchema: {
        method: z
          .enum(["GET", "POST", "PUT", "DELETE", "PATCH"])
          .optional()
          .describe("Filtrar por método HTTP"),
        query: z
          .string()
          .optional()
          .describe(
            "Texto de búsqueda en el path o descripción del endpoint. Ej: 'variants', 'paid'"
          ),
      },
    },
    async ({ method, query }) => {
      type EndpointMatch = {
        resource: string;
        method: string;
        path: string;
        description: string;
      };

      const matches: EndpointMatch[] = [];

      for (const resource of resources) {
        for (const ep of resource.endpoints) {
          const methodMatch = !method || ep.method === method;
          const queryMatch =
            !query ||
            ep.path.toLowerCase().includes(query.toLowerCase()) ||
            ep.description.toLowerCase().includes(query.toLowerCase());

          if (methodMatch && queryMatch) {
            matches.push({
              resource: resource.name,
              method: ep.method,
              path: ep.path,
              description: ep.description,
            });
          }
        }
      }

      if (matches.length === 0) {
        const filters = [
          method && `método: ${method}`,
          query && `texto: "${query}"`,
        ]
          .filter(Boolean)
          .join(", ");
        return {
          content: [
            {
              type: "text",
              text: `No se encontraron endpoints con los filtros: ${filters}.`,
            },
          ],
        };
      }

      const filterDesc = [
        method && `método: **${method}**`,
        query && `búsqueda: **"${query}"**`,
      ]
        .filter(Boolean)
        .join(", ");

      const lines = [
        `# Endpoints de Tiendanube${filterDesc ? ` — ${filterDesc}` : ""}`,
        `Se encontraron **${matches.length}** endpoint(s).`,
        "",
        ...matches.map(
          (m) =>
            `- \`${m.method} ${m.path}\`\n  **${m.resource}** — ${m.description}`
        ),
      ];

      return { content: [{ type: "text", text: lines.join("\n") }] };
    }
  );
}
