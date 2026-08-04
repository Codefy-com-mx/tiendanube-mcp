# tiendanube-mcp

Servidor MCP para administrar una tienda de Tiendanube (Nuvemshop) desde Claude
u otro cliente MCP. Nació de una colección de scripts Python sueltos para
migrar/mantener el catálogo de una tienda migrada desde Shopify.

## Tools disponibles

- `listar_productos(page, per_page, q)` — lista productos, opcionalmente filtrados por texto.
- `obtener_producto(product_id)` — producto completo (atributos, variantes, imágenes).
- `actualizar_atributos(product_id, atributos)` — reemplaza los nombres de atributo de variante (ej. `["Color", "Talla"]`).
- `subir_imagen(product_id, src)` — sube una imagen por URL; si es `.heic`/`.heif` la descarga, convierte a PNG y sube como attachment.

## Instalación

```bash
python3 -m venv .venv
.venv/bin/pip install -e .
```

## Configuración

Credenciales por variables de entorno (nunca hardcodeadas):

- `TN_USER_ID`
- `TN_ACCESS_TOKEN`
- `TN_API_VERSION` (opcional, default `2025-03`)

### Claude Code / Claude Desktop

Agregar en la config del cliente MCP (`~/.claude.json` o equivalente):

```json
{
  "mcpServers": {
    "tiendanube": {
      "command": "/ruta/a/tiendanube-mcp/.venv/bin/python3",
      "args": ["-m", "tiendanube_mcp.server"],
      "env": {
        "TN_USER_ID": "tu_user_id",
        "TN_ACCESS_TOKEN": "tu_access_token"
      }
    }
  }
}
```

## Hosting remoto (futuro)

Hoy corre por stdio (proceso local, un solo usuario/token vía env var). Para
alojarlo:

- **Uso propio/equipo**: exponer `mcp.run(transport="streamable-http")` detrás
  de un token propio del server (no el de Tiendanube), que internamente
  mapea a un secret manager con el token real.
- **Multi-tienda**: usar el flujo OAuth de Tiendanube (igual al que ya usa el
  proyecto principal en `tiendanube-auth.client.ts`) para que cada usuario
  autorice su propia tienda en vez de un token fijo.
