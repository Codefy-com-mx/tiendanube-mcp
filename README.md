# tiendanube-mcp

Servidor MCP de documentación para la API REST de [Tiendanube](https://www.tiendanube.com) / [Nuvemshop](https://www.nuvemshop.com.br).

Permite a Claude y otros LLMs consultar la documentación de la API sin salir del contexto: recursos disponibles, endpoints, campos de objetos, autenticación OAuth, webhooks y más.

## Tools disponibles

| Tool | Descripción |
|------|-------------|
| `search_resources` | Lista y filtra los recursos de la API (Products, Orders, Customers, etc.) |
| `get_resource_detail` | Documentación completa de un recurso: endpoints, parámetros, campos y ejemplos |
| `search_endpoints` | Busca endpoints por método HTTP (GET/POST/PUT/DELETE) o texto |
| `get_authentication_info` | Flujo OAuth 2.0, headers requeridos, scopes y rate limiting |
| `list_webhooks` | Eventos disponibles, formato del payload y gestión de webhooks |

## Instalación

### Requisitos

- Node.js 18 o superior

### Desde el repositorio

```bash
git clone https://github.com/tu-usuario/tiendanube-mcp
cd tiendanube-mcp
npm install
npm run build
```

## Configuración en Claude Desktop

Editar `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) o `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "tiendanube": {
      "command": "node",
      "args": ["/ruta/absoluta/a/tiendanube-mcp/dist/index.js"]
    }
  }
}
```

## Configuración en Claude Code

```bash
claude mcp add tiendanube node /ruta/absoluta/a/tiendanube-mcp/dist/index.js
```

O agregando a `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "tiendanube": {
      "command": "node",
      "args": ["/ruta/absoluta/a/tiendanube-mcp/dist/index.js"]
    }
  }
}
```

## Ejemplos de uso

Una vez configurado, en Claude puedes preguntar:

- *"¿Cómo autentico mi app con la API de Tiendanube?"*
- *"¿Qué campos tiene el objeto Product?"*
- *"¿Cómo filtro órdenes por estado de pago?"*
- *"Muéstrame los webhooks disponibles de Tiendanube"*
- *"¿Cómo creo un cupón de descuento por porcentaje?"*

## Recursos cubiertos

- Store (tienda)
- Products / Product Variants
- Categories
- Orders
- Customers
- Webhooks
- Metafields
- Script Tags
- Abandoned Checkouts
- Coupons

## Desarrollo

```bash
npm run dev    # TypeScript en modo watch
npm run build  # Compilar una vez
npm start      # Ejecutar el servidor compilado
```

## Licencia

MIT
