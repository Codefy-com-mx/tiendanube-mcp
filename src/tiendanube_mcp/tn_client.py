"""Cliente HTTP mínimo para la API de Tiendanube, leyendo credenciales de env vars."""

import base64
import io
import json
import os
import urllib.error
import urllib.request

import pillow_heif
from PIL import Image

pillow_heif.register_heif_opener()

USER_AGENT = "tiendanube-mcp (hello@codefy.com.mx)"


class TiendanubeError(RuntimeError):
    pass


def _config():
    user_id = os.environ.get("TN_USER_ID")
    token = os.environ.get("TN_ACCESS_TOKEN")
    api_version = os.environ.get("TN_API_VERSION", "2025-03")
    if not user_id or not token:
        raise TiendanubeError(
            "Faltan TN_USER_ID / TN_ACCESS_TOKEN en el entorno del servidor MCP."
        )
    return user_id, token, api_version


def _request(method, path, body=None):
    user_id, token, api_version = _config()
    url = f"https://api.tiendanube.com/{api_version}/{user_id}/{path}"
    headers = {
        "Authentication": f"bearer {token}",
        "User-Agent": USER_AGENT,
        "Content-Type": "application/json",
    }
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=30) as res:
            raw = res.read()
            return json.loads(raw.decode()) if raw else None
    except urllib.error.HTTPError as e:
        raise TiendanubeError(f"{e.code} {e.read().decode(errors='replace')}") from e
    except urllib.error.URLError as e:
        raise TiendanubeError(str(e)) from e


def get(path):
    return _request("GET", path)


def post(path, body):
    return _request("POST", path, body)


def put(path, body):
    return _request("PUT", path, body)


def delete(path):
    return _request("DELETE", path)


def es_heic(url):
    # Tiendanube devuelve 502 al procesar por "src" imágenes .heic/.heif;
    # hay que descargarlas, convertirlas a PNG y subirlas como attachment.
    return (url or "").split("?")[0].lower().endswith((".heic", ".heif"))


def descargar_y_convertir_a_png_base64(src):
    # El formato real se detecta por los bytes (Image.open), no por la extensión:
    # algunas URLs .heic de Shopify en realidad ya sirven jpeg transcodificado.
    req = urllib.request.Request(src, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as res:
        raw_bytes = res.read()
    img = Image.open(io.BytesIO(raw_bytes))
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return base64.b64encode(buf.getvalue()).decode()
