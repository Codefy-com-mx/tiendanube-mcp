"""Servidor MCP para administrar una tienda de Tiendanube (Nuvemshop).

Credenciales por env vars: TN_USER_ID, TN_ACCESS_TOKEN, TN_API_VERSION (opcional).
"""

from mcp.server import MCPServer

from tiendanube_mcp import tn_client

mcp = MCPServer("tiendanube")


def _nombre(producto):
    nombre = producto.get("name") or {}
    if isinstance(nombre, dict):
        return nombre.get("es") or next(iter(nombre.values()), "")
    return nombre or ""


def _resumen(producto):
    return {
        "id": producto.get("id"),
        "nombre": _nombre(producto),
        "handle": (producto.get("handle") or {}).get("es"),
        "variantes": len(producto.get("variants", [])),
        "imagenes": len(producto.get("images", [])),
    }


@mcp.tool()
def listar_productos(page: int = 1, per_page: int = 20, q: str = "") -> list[dict]:
    """Lista productos de Tiendanube, opcionalmente filtrados por texto (q busca en el nombre)."""
    path = f"products?page={page}&per_page={per_page}"
    if q:
        path += f"&q={q}"
    productos = tn_client.get(path)
    return [_resumen(p) for p in productos]


@mcp.tool()
def obtener_producto(product_id: int) -> dict:
    """Devuelve el producto completo de Tiendanube (atributos, variantes, imágenes)."""
    return tn_client.get(f"products/{product_id}")


@mcp.tool()
def actualizar_atributos(product_id: int, atributos: list[str]) -> dict:
    """Reemplaza los nombres de atributo de variante de un producto (ej. ["Color", "Talla"])."""
    body = {"attributes": [{"es": a} for a in atributos]}
    return tn_client.put(f"products/{product_id}", body)


@mcp.tool()
def subir_imagen(product_id: int, src: str) -> dict:
    """Sube una imagen a un producto por URL. Si es .heic/.heif la descarga, convierte a PNG y sube."""
    if tn_client.es_heic(src):
        payload = {
            "attachment": tn_client.descargar_y_convertir_a_png_base64(src),
            "filename": "imagen.png",
        }
    else:
        payload = {"src": src}
    return tn_client.post(f"products/{product_id}/images", payload)


def main():
    mcp.run()


if __name__ == "__main__":
    main()
