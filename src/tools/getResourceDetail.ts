import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { resources } from "../data/resources.js";

export function registerGetResourceDetail(server: McpServer) {
  server.registerTool(
    "get_resource_detail",
    {
      title: "Detalle de un recurso",
      description:
        "Obtiene documentación completa de un recurso de la API de Tiendanube: " +
        "descripción, todos los endpoints con parámetros y body, campos del objeto y ejemplos JSON. " +
        "Usa search_resources para descubrir los slugs disponibles.",
      inputSchema: {
        slug: z
          .string()
          .describe(
            "Slug del recurso. Ej: 'products', 'orders', 'customers', 'variants', " +
              "'categories', 'webhooks', 'metafields', 'coupons', 'script_tags', 'abandoned_checkouts', 'store'"
          ),
      },
    },
    async ({ slug }) => {
      const resource = resources.find(
        (r) => r.slug === slug || r.slug === slug.toLowerCase()
      );

      if (!resource) {
        const available = resources.map((r) => r.slug).join(", ");
        return {
          content: [
            {
              type: "text",
              text:
                `Recurso "${slug}" no encontrado.\n\n` +
                `Slugs disponibles: ${available}`,
            },
          ],
          isError: true,
        };
      }

      const sections: string[] = [
        `# ${resource.name}`,
        resource.description,
        `**URL base:** \`${resource.baseUrl}\``,
        "",
        "## Endpoints",
      ];

      for (const ep of resource.endpoints) {
        sections.push(`### \`${ep.method} ${ep.path}\``);
        sections.push(ep.description);

        if (ep.queryParams && Object.keys(ep.queryParams).length > 0) {
          sections.push("\n**Query params:**");
          for (const [k, v] of Object.entries(ep.queryParams)) {
            sections.push(`- \`${k}\`: ${v}`);
          }
        }

        if (ep.bodyFields && Object.keys(ep.bodyFields).length > 0) {
          sections.push("\n**Body fields:**");
          for (const [k, v] of Object.entries(ep.bodyFields)) {
            sections.push(`- \`${k}\`: ${v}`);
          }
        }

        if (ep.example) {
          if (ep.example.request) {
            sections.push(
              "\n**Ejemplo de request:**\n```json\n" +
                JSON.stringify(ep.example.request, null, 2) +
                "\n```"
            );
          }
          if (ep.example.response) {
            sections.push(
              "\n**Ejemplo de respuesta:**\n```json\n" +
                JSON.stringify(ep.example.response, null, 2) +
                "\n```"
            );
          }
        }

        sections.push("");
      }

      sections.push("## Campos del objeto");
      for (const [field, desc] of Object.entries(resource.objectFields)) {
        sections.push(`- \`${field}\`: ${desc}`);
      }

      return { content: [{ type: "text", text: sections.join("\n") }] };
    }
  );
}
