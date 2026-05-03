# tiendanube-mcp

Servidor MCP de documentación para la API REST de [Tiendanube](https://www.tiendanube.com) / [Nuvemshop](https://www.nuvemshop.com.br).

Permite a tu agente de IA consultar la documentación de la API sin salir del contexto: recursos disponibles, endpoints, campos de objetos, autenticación OAuth, webhooks y más.

## Recursos y tools disponibles

### Tool

| Tool          | Descripción                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `search_docs` | Busca un término en todos los archivos de documentación y devuelve fragmentos relevantes con la URI para leer el doc completo |

### MCP Resources

Cada recurso de la API tiene su propio archivo de documentación accesible como MCP Resource:

| URI                                 | Contenido                                                  |
| ----------------------------------- | ---------------------------------------------------------- |
| `tiendanube://docs/list`            | Índice JSON de todos los recursos disponibles con sus URIs |
| `tiendanube://docs/product`         | Productos: propiedades, endpoints, filtros, ejemplos       |
| `tiendanube://docs/order`           | Órdenes: estados, filtros, fulfillments                    |
| `tiendanube://docs/customer`        | Clientes: propiedades, direcciones                         |
| `tiendanube://docs/webhook`         | Webhooks: eventos disponibles, payload, verificación       |
| `tiendanube://docs/category`        | Categorías y subcategorías                                 |
| `tiendanube://docs/product-variant` | Variantes de productos                                     |
| `tiendanube://docs/checkout`        | Checkout: flujo y campos                                   |
| `tiendanube://docs/coupons`         | Cupones de descuento                                       |
| `tiendanube://docs/metafields`      | Metafields para extender recursos                          |
| `tiendanube://docs/...`             | 30+ recursos en total                                      |

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

## Configuración por cliente

Reemplazar `/ruta/absoluta/a/tiendanube-mcp` con la ruta real del repositorio clonado.

### OpenCode / Claude Code / Otros agentes

```bash
# Claude Code
claude mcp add tiendanube node /ruta/absoluta/a/tiendanube-mcp/dist/index.js

# OpenCode
opencode mcp add tiendanube node /ruta/absoluta/a/tiendanube-mcp/dist/index.js
```

O en el archivo de configuración MCP de tu agente (por ejemplo `~/.claude/mcp.json`, `~/.config/opencode/config.json`, etc.):

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

### Gemini CLI

Editar `~/.gemini/settings.json`:

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

### OpenCode

Editar `~/.config/opencode/config.json` o crear `opencode.json` en la raíz del proyecto:

```json
{
  "mcp": {
    "servers": {
      "tiendanube": {
        "command": "node",
        "args": ["/ruta/absoluta/a/tiendanube-mcp/dist/index.js"]
      }
    }
  }
}
```

### Antigravity

Editar `~/.antigravity/config.json`:

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

Una vez configurado, en tu agente de IA puedes preguntar:

- _"¿Cómo autentico mi app con la API de Tiendanube?"_
- _"¿Qué campos tiene el objeto Product?"_
- _"¿Cómo filtro órdenes por estado de pago?"_
- _"Muéstrame los webhooks disponibles de Tiendanube"_
- _"¿Cómo creo un cupón de descuento por porcentaje?"_

## Recursos cubiertos (documentación oficial Nuvemshop)

Abandoned Checkout · Billing · Blog · Business Rules · Cart · Category · Category Custom Fields · Checkout · Checkout SDK · Coupons · Customer · Customer Custom Fields · Discount · Draft Order · Email Templates · Fulfillment Order · Location · Metafields · Order · Order Custom Fields · Pages · Payment Option · Payment Provider · Product · Product Custom Fields · Product Image · Product Variant · Product Variant Custom Fields · Scripts · Shipping Carrier · Store · Transaction · Webhook

## Desarrollo

```bash
npm run dev    # TypeScript en modo watch
npm run build  # Compilar una vez
npm start      # Ejecutar el servidor compilado
```

## Licencia

MIT
