import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WEBHOOK_EVENTS, resources } from "../data/resources.js";

export function registerListWebhooks(server: McpServer) {
  server.registerTool(
    "list_webhooks",
    {
      title: "Listar webhooks disponibles",
      description:
        "Lista todos los eventos de webhook disponibles en Tiendanube con su descripción, " +
        "y la documentación de los endpoints para gestionar webhooks (crear, listar, eliminar).",
      inputSchema: {},
    },
    async () => {
      const webhookResource = resources.find((r) => r.slug === "webhooks");

      const eventLines = Object.entries(WEBHOOK_EVENTS).map(
        ([event, desc]) => `- \`${event}\`: ${desc}`
      );

      const sections: string[] = [
        "# Webhooks de Tiendanube",
        "",
        "## Eventos disponibles",
        "Tiendanube envía un HTTP POST a tu URL cuando ocurre cada evento.",
        "",
        ...eventLines,
        "",
        "## Payload de un webhook",
        "Todos los webhooks envían un payload JSON con la siguiente estructura:",
        "```json",
        JSON.stringify(
          {
            store_id: 123456,
            event: "order/paid",
            id: 9876,
          },
          null,
          2
        ),
        "```",
        "El campo `id` es el ID del recurso afectado. Para obtener los detalles completos,",
        "hacer un GET al endpoint correspondiente con ese ID.",
        "",
        "## Verificación de autenticidad",
        "Cada request de webhook incluye el header `X-Linkedstore-Token`.",
        "Este valor debe coincidir con el `client_secret` de tu app para validar la solicitud.",
      ];

      if (webhookResource) {
        sections.push("", "## Gestión de webhooks via API");
        for (const ep of webhookResource.endpoints) {
          sections.push(`### \`${ep.method} ${ep.path}\``);
          sections.push(ep.description);
          if (ep.bodyFields) {
            sections.push("\n**Body:**");
            for (const [k, v] of Object.entries(ep.bodyFields)) {
              sections.push(`- \`${k}\`: ${v}`);
            }
          }
          if (ep.example?.request) {
            sections.push(
              "\n**Ejemplo:**\n```json\n" +
                JSON.stringify(ep.example.request, null, 2) +
                "\n```"
            );
          }
          sections.push("");
        }
      }

      return { content: [{ type: "text", text: sections.join("\n") }] };
    }
  );
}
