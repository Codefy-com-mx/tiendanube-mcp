import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { AUTH_DOCS } from "../data/auth.js";

const SECTIONS = {
  overview: "Resumen general de autenticación OAuth 2.0",
  oauth: "Flujo OAuth 2.0 paso a paso (Authorization Code)",
  request: "Formato de requests: headers obligatorios y URL base",
  scopes: "Tabla de scopes/permisos disponibles",
  rate_limiting: "Rate limiting: límites, headers y manejo de 429",
  errors: "Códigos de error HTTP y formato de respuesta de error",
  private_apps: "Aplicaciones privadas: obtener token sin OAuth",
} as const;

type SectionKey = keyof typeof SECTIONS;

export function registerGetAuthInfo(server: McpServer) {
  server.registerTool(
    "get_authentication_info",
    {
      title: "Información de autenticación",
      description:
        "Obtiene documentación sobre autenticación en la API de Tiendanube: " +
        "flujo OAuth 2.0, headers requeridos, scopes, rate limiting y manejo de errores.",
      inputSchema: {
        section: z
          .enum([
            "overview",
            "oauth",
            "request",
            "scopes",
            "rate_limiting",
            "errors",
            "private_apps",
            "all",
          ])
          .optional()
          .default("all")
          .describe(
            "Sección específica a consultar. 'all' devuelve toda la documentación. " +
              "Opciones: " +
              Object.entries(SECTIONS)
                .map(([k, v]) => `${k} (${v})`)
                .join(", ")
          ),
      },
    },
    async ({ section = "all" }) => {
      if (section === "all") {
        const content = Object.values(AUTH_DOCS).join("\n\n---\n");
        return { content: [{ type: "text", text: content }] };
      }

      const sectionMap: Record<SectionKey, string> = {
        overview: AUTH_DOCS.overview,
        oauth: AUTH_DOCS.oauthFlow,
        request: AUTH_DOCS.requestFormat,
        scopes: AUTH_DOCS.scopes,
        rate_limiting: AUTH_DOCS.rateLimiting,
        errors: AUTH_DOCS.errors,
        private_apps: AUTH_DOCS.privateApps,
      };

      const key = section as SectionKey;
      const text = sectionMap[key];

      if (!text) {
        return {
          content: [{ type: "text", text: `Sección "${section}" no encontrada.` }],
          isError: true,
        };
      }

      return { content: [{ type: "text", text }] };
    }
  );
}
