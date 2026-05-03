export const AUTH_DOCS = {
  overview: `
# Autenticación en la API de Tiendanube

La API de Tiendanube usa **OAuth 2.0** para autenticación. Las aplicaciones obtienen un
access_token por tienda y lo envían en cada request.

## Tipos de aplicaciones

- **Aplicaciones de la App Store**: pasan por el flujo OAuth completo con código de autorización.
- **Aplicaciones privadas**: el access_token se obtiene directamente desde el panel de la tienda.
`,

  oauthFlow: `
## Flujo OAuth 2.0 (Authorization Code)

### Paso 1 — Redirigir al usuario para autorización

Redirigir al usuario a:
  https://www.tiendanube.com/apps/{app_id}/authorize

Parámetros query opcionales:
  - state: string aleatorio para proteger contra CSRF

### Paso 2 — Recibir el código de autorización

Tiendanube redirige al redirect_uri de tu app con:
  ?code=AUTHORIZATION_CODE&store_id=STORE_ID

### Paso 3 — Intercambiar el código por un access_token

POST https://www.tiendanube.com/apps/authorize/token

Body (application/json o form-urlencoded):
  {
    "client_id": "TU_APP_ID",
    "client_secret": "TU_APP_SECRET",
    "grant_type": "authorization_code",
    "code": "AUTHORIZATION_CODE"
  }

Respuesta:
  {
    "access_token": "TOKEN_DE_ACCESO",
    "token_type": "bearer",
    "scope": "read_products write_products read_orders ...",
    "user_id": 123456
  }

Donde user_id es el store_id que se usará en las URLs de la API.
`,

  requestFormat: `
## Formato de los requests

Todas las llamadas a la API deben incluir:

### Headers obligatorios
  Authorization: bearer {access_token}
  User-Agent: MiApp/1.0 (contacto@miapp.com)
  Content-Type: application/json   (en POST/PUT)

### URL base
  https://api.tiendanube.com/v1/{store_id}/

Ejemplo completo:
  GET https://api.tiendanube.com/v1/123456/products
  Authorization: bearer abc123def456
  User-Agent: MiApp/1.0 (dev@miapp.com)
`,

  scopes: `
## Scopes de permisos

Los scopes se solicitan al registrar la app y el usuario los aprueba durante OAuth.

| Scope               | Descripción                              |
|---------------------|------------------------------------------|
| read_content        | Leer páginas y blogs                     |
| write_content       | Escribir páginas y blogs                 |
| read_products       | Leer productos, variantes, categorías    |
| write_products      | Crear/editar/eliminar productos          |
| read_customers      | Leer clientes                            |
| write_customers     | Crear/editar/eliminar clientes           |
| read_orders         | Leer órdenes                             |
| write_orders        | Crear/editar órdenes                     |
| read_coupons        | Leer cupones                             |
| write_coupons       | Crear/editar/eliminar cupones            |
| write_scripts       | Registrar/eliminar script tags           |
| write_webhooks      | Registrar/eliminar webhooks              |
`,

  rateLimiting: `
## Rate Limiting

La API aplica límites de velocidad por store_id y access_token.

- Los headers de respuesta incluyen información del límite:
    X-Rate-Limit-Limit: 1000       (requests por ventana)
    X-Rate-Limit-Remaining: 999    (requests restantes)
    X-Rate-Limit-Reset: 1234567890 (timestamp Unix del reset)

- Al superar el límite, la API responde con HTTP 429 Too Many Requests.
- Implementar backoff exponencial al recibir errores 429.
`,

  errors: `
## Códigos de error comunes

| Código | Significado                                      |
|--------|--------------------------------------------------|
| 401    | Token inválido, expirado o sin permisos          |
| 402    | Plan de la tienda no permite esta funcionalidad  |
| 403    | Scope insuficiente para esta operación           |
| 404    | Recurso no encontrado                            |
| 422    | Error de validación (ver campo "description")    |
| 429    | Rate limit superado                              |
| 500    | Error interno del servidor de Tiendanube         |

Formato de error:
  {
    "code": 422,
    "description": "name: can't be blank"
  }
`,

  privateApps: `
## Aplicaciones privadas (sin OAuth)

Para uso personal o interno, se puede obtener el access_token desde el panel:

1. Ir al panel de administración de la tienda
2. Mis aplicaciones > Crear aplicación
3. Copiar el access_token generado

Este token tiene los mismos scopes que se configuren en la aplicación.
No expira automáticamente pero puede ser revocado manualmente.
`,
};
