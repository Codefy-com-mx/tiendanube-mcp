export interface Endpoint {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  queryParams?: Record<string, string>;
  bodyFields?: Record<string, string>;
  example?: {
    request?: object;
    response?: object;
  };
}

export interface ApiResource {
  name: string;
  slug: string;
  description: string;
  baseUrl: string;
  endpoints: Endpoint[];
  objectFields: Record<string, string>;
}

export const API_BASE = "https://api.tiendanube.com/v1/{store_id}";

export const resources: ApiResource[] = [
  {
    name: "Store",
    slug: "store",
    description:
      "Representa la tienda. Contiene información general como nombre, email, moneda, idioma y configuración.",
    baseUrl: `${API_BASE}/store`,
    endpoints: [
      {
        method: "GET",
        path: "/store",
        description: "Obtiene la información de la tienda.",
        example: {
          response: {
            id: 123456,
            name: "Mi Tienda",
            description: "Tienda de ropa",
            email: "contacto@mitienda.com",
            contact_email: "contacto@mitienda.com",
            url: "https://mitienda.com",
            country: "AR",
            languages: { es: "Español" },
            currency: "ARS",
            main_language: "es",
            main_currency: "ARS",
            google_tracking_id: null,
            plan_name: "Evolución",
            business_name: "Mi Empresa S.A.",
            business_address: "Av. Corrientes 123",
            business_id: "30-12345678-9",
          },
        },
      },
      {
        method: "PUT",
        path: "/store",
        description: "Actualiza la información de la tienda.",
        bodyFields: {
          name: "string — Nombre de la tienda",
          description: "string — Descripción de la tienda",
          email: "string — Email de contacto",
          google_tracking_id: "string — ID de Google Analytics",
          business_name: "string — Razón social",
          business_address: "string — Dirección fiscal",
          business_id: "string — CUIT/RUT/NIF",
        },
      },
    ],
    objectFields: {
      id: "integer — ID único de la tienda",
      name: "string — Nombre de la tienda",
      description: "string — Descripción",
      email: "string — Email del dueño",
      contact_email: "string — Email de contacto público",
      url: "string — URL de la tienda",
      country: "string — Código ISO de país (AR, BR, MX, CO, CL, PE, UY)",
      languages: "object — Idiomas habilitados",
      currency: "string — Moneda principal (ARS, BRL, MXN, etc.)",
      main_language: "string — Idioma principal",
      main_currency: "string — Moneda principal",
      plan_name: "string — Nombre del plan contratado",
      business_name: "string — Razón social",
      business_address: "string — Dirección fiscal",
      business_id: "string — Número de identificación fiscal",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de última actualización",
    },
  },
  {
    name: "Products",
    slug: "products",
    description:
      "Gestiona los productos de la tienda. Cada producto puede tener variantes, imágenes y categorías asociadas.",
    baseUrl: `${API_BASE}/products`,
    endpoints: [
      {
        method: "GET",
        path: "/products",
        description: "Lista todos los productos de la tienda.",
        queryParams: {
          since_id:
            "integer — Devuelve solo productos con ID mayor al indicado",
          language:
            "string — Idioma de los campos traducibles (es, pt, en, etc.)",
          q: "string — Texto de búsqueda",
          handle: "string — Filtra por handle (slug) del producto",
          category_id: "integer — Filtra por categoría",
          published: "boolean — Filtra por estado de publicación",
          free_shipping: "boolean — Filtra por envío gratuito",
          min_price: "number — Precio mínimo",
          max_price: "number — Precio máximo",
          sort_by:
            "string — Orden: created-at-ascending, created-at-descending, alpha-ascending, alpha-descending, price-ascending, price-descending, best-selling",
          page: "integer — Número de página (default: 1)",
          per_page: "integer — Productos por página (max: 200, default: 15)",
        },
        example: {
          response: [
            {
              id: 1234,
              name: { es: "Remera Básica" },
              description: { es: "<p>Remera de algodón 100%</p>" },
              handle: { es: "remera-basica" },
              published: true,
              free_shipping: false,
              price: "1500.00",
              promotional_price: null,
              stock_management: true,
              stock: 50,
              categories: [{ id: 5, name: { es: "Ropa" } }],
            },
          ],
        },
      },
      {
        method: "GET",
        path: "/products/{product_id}",
        description: "Obtiene un producto específico por su ID.",
      },
      {
        method: "POST",
        path: "/products",
        description: "Crea un nuevo producto.",
        bodyFields: {
          name: "object — Nombre por idioma: { es: 'Nombre', pt: 'Nome' }",
          description:
            "object — Descripción HTML por idioma: { es: '<p>...</p>' }",
          handle:
            "object — Slug URL por idioma (opcional, se genera automáticamente)",
          published: "boolean — Si está publicado (default: true)",
          free_shipping: "boolean — Si tiene envío gratis",
          price: "string — Precio base",
          promotional_price: "string | null — Precio promocional",
          stock_management: "boolean — Si gestiona stock",
          stock: "integer — Stock disponible (si stock_management=true)",
          weight: "string — Peso en kg",
          width: "string — Ancho en cm",
          height: "string — Alto en cm",
          depth: "string — Profundidad en cm",
          categories: "array — IDs de categorías: [{ id: 5 }]",
          tags: "string — Tags separados por coma",
        },
        example: {
          request: {
            name: { es: "Remera Básica" },
            description: { es: "<p>Remera de algodón</p>" },
            price: "1500.00",
            stock_management: true,
            stock: 100,
          },
        },
      },
      {
        method: "PUT",
        path: "/products/{product_id}",
        description:
          "Actualiza un producto existente. Solo enviar los campos a modificar.",
      },
      {
        method: "DELETE",
        path: "/products/{product_id}",
        description: "Elimina un producto y todas sus variantes.",
      },
    ],
    objectFields: {
      id: "integer — ID único del producto",
      name: "object — Nombre por idioma: { es: string, pt: string }",
      description: "object — Descripción HTML por idioma",
      handle: "object — Slug URL por idioma",
      published: "boolean — Si está publicado y visible",
      free_shipping: "boolean — Si tiene envío gratuito",
      requires_shipping: "boolean — Si requiere envío físico",
      canonical_url: "string — URL canónica del producto",
      video_url: "string | null — URL de video",
      seo_title: "object — Título SEO por idioma",
      seo_description: "object — Meta descripción SEO por idioma",
      brand: "string | null — Marca del producto",
      price: "string — Precio base en moneda de la tienda",
      promotional_price: "string | null — Precio con descuento",
      stock_management: "boolean — Si gestiona stock individualmente",
      stock: "integer | null — Stock total (suma de variantes)",
      weight: "string — Peso en kg",
      width: "string — Ancho en cm",
      height: "string — Alto en cm",
      depth: "string — Profundidad en cm",
      variants: "array — Lista de variantes del producto",
      images: "array — Lista de imágenes",
      categories: "array — Categorías asociadas",
      tags: "string — Tags separados por coma",
      created_at: "datetime — Fecha de creación (ISO 8601)",
      updated_at: "datetime — Fecha de última actualización (ISO 8601)",
    },
  },
  {
    name: "Product Variants",
    slug: "variants",
    description:
      "Variantes de un producto. Permiten combinaciones de atributos (color, talle, etc.) con precio y stock propios.",
    baseUrl: `${API_BASE}/products/{product_id}/variants`,
    endpoints: [
      {
        method: "GET",
        path: "/products/{product_id}/variants",
        description: "Lista todas las variantes de un producto.",
      },
      {
        method: "GET",
        path: "/products/{product_id}/variants/{variant_id}",
        description: "Obtiene una variante específica.",
      },
      {
        method: "POST",
        path: "/products/{product_id}/variants",
        description: "Crea una nueva variante para el producto.",
        bodyFields: {
          price: "string — Precio de la variante",
          promotional_price: "string | null — Precio promocional",
          stock_management: "boolean — Si gestiona stock",
          stock: "integer — Stock disponible",
          weight: "string — Peso específico de la variante en kg",
          width: "string — Ancho en cm",
          height: "string — Alto en cm",
          depth: "string — Profundidad en cm",
          sku: "string — Código SKU",
          barcode: "string — Código de barras EAN/UPC",
          "values[0]": "object — Primer atributo: { es: 'Rojo' }",
          "values[1]": "object — Segundo atributo: { es: 'XL' }",
          image_id: "integer | null — ID de imagen asociada",
        },
      },
      {
        method: "PUT",
        path: "/products/{product_id}/variants/{variant_id}",
        description: "Actualiza una variante existente.",
      },
      {
        method: "DELETE",
        path: "/products/{product_id}/variants/{variant_id}",
        description: "Elimina una variante del producto.",
      },
    ],
    objectFields: {
      id: "integer — ID de la variante",
      product_id: "integer — ID del producto padre",
      price: "string — Precio de la variante",
      promotional_price: "string | null — Precio promocional",
      stock_management: "boolean — Gestiona stock propio",
      stock: "integer | null — Stock disponible",
      weight: "string — Peso en kg",
      width: "string — Ancho en cm",
      height: "string — Alto en cm",
      depth: "string — Profundidad en cm",
      sku: "string — Código de identificación interno",
      barcode: "string — Código EAN/UPC",
      image_id: "integer | null — ID de imagen",
      values: "array — Valores de atributos: [{ es: 'Rojo' }, { es: 'M' }]",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Categories",
    slug: "categories",
    description:
      "Categorías de productos. Pueden anidarse en subcategorías y se usan para organizar y filtrar el catálogo.",
    baseUrl: `${API_BASE}/categories`,
    endpoints: [
      {
        method: "GET",
        path: "/categories",
        description: "Lista todas las categorías.",
        queryParams: {
          language: "string — Idioma de los campos traducibles",
          since_id: "integer — Devuelve categorías con ID mayor al indicado",
          page: "integer — Página",
          per_page: "integer — Resultados por página (max: 200)",
        },
      },
      {
        method: "GET",
        path: "/categories/{category_id}",
        description: "Obtiene una categoría específica.",
      },
      {
        method: "POST",
        path: "/categories",
        description: "Crea una nueva categoría.",
        bodyFields: {
          name: "object — Nombre por idioma: { es: 'Remeras' }",
          description: "object — Descripción HTML por idioma",
          handle: "object — Slug URL por idioma",
          parent: "object | null — Categoría padre: { id: 10 }",
          seo_title: "object — Título SEO por idioma",
          seo_description: "object — Meta descripción por idioma",
          google_shopping_category: "string — Categoría de Google Shopping",
        },
      },
      {
        method: "PUT",
        path: "/categories/{category_id}",
        description: "Actualiza una categoría existente.",
      },
      {
        method: "DELETE",
        path: "/categories/{category_id}",
        description: "Elimina una categoría (los productos no se eliminan).",
      },
    ],
    objectFields: {
      id: "integer — ID de la categoría",
      name: "object — Nombre por idioma",
      description: "object — Descripción HTML por idioma",
      handle: "object — Slug URL por idioma",
      parent: "object | null — Categoría padre con id y name",
      subcategories: "array — Subcategorías hijas",
      seo_title: "object — Título SEO",
      seo_description: "object — Meta descripción",
      google_shopping_category: "string — Categoría de Google Shopping",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Orders",
    slug: "orders",
    description:
      "Órdenes de compra realizadas en la tienda. Incluye datos del cliente, productos, envío y pago.",
    baseUrl: `${API_BASE}/orders`,
    endpoints: [
      {
        method: "GET",
        path: "/orders",
        description: "Lista todas las órdenes.",
        queryParams: {
          since_id: "integer — Órdenes con ID mayor al indicado",
          status:
            "string — Estado: open, closed, cancelled, any (default: any)",
          payment_status:
            "string — Estado de pago: pending, authorized, paid, voided, refunded, abandoned",
          shipping_status:
            "string — Estado de envío: unshipped, shipped, delivered, abandoned",
          created_at_min: "datetime — Creadas desde (ISO 8601)",
          created_at_max: "datetime — Creadas hasta (ISO 8601)",
          updated_at_min: "datetime — Actualizadas desde",
          updated_at_max: "datetime — Actualizadas hasta",
          customer_ids: "string — IDs de clientes separados por coma",
          page: "integer — Página",
          per_page: "integer — Resultados por página (max: 200)",
          sort_by:
            "string — Orden: created-at-ascending, created-at-descending",
        },
        example: {
          response: [
            {
              id: 9876,
              number: 1001,
              status: "open",
              payment_status: "paid",
              shipping_status: "unshipped",
              total: "3000.00",
              currency: "ARS",
              customer: {
                id: 111,
                name: "Juan Pérez",
                email: "juan@email.com",
              },
              created_at: "2024-01-15T10:30:00-03:00",
            },
          ],
        },
      },
      {
        method: "GET",
        path: "/orders/{order_id}",
        description: "Obtiene una orden específica con todos sus detalles.",
      },
      {
        method: "POST",
        path: "/orders",
        description:
          "Crea una orden manualmente (útil para importar órdenes externas).",
        bodyFields: {
          customer: "object — Datos del cliente: { email, name, phone }",
          products: "array — Productos: [{ variant_id, quantity, price }]",
          payment_status: "string — Estado de pago inicial",
          shipping_status: "string — Estado de envío inicial",
          note: "string — Nota interna de la orden",
          billing_address: "object — Dirección de facturación",
          shipping_address: "object — Dirección de envío",
        },
      },
      {
        method: "PUT",
        path: "/orders/{order_id}",
        description: "Actualiza el estado u otros campos de la orden.",
        bodyFields: {
          status: "string — Estado: open, closed, cancelled",
          payment_status: "string — Estado de pago",
          shipping_status: "string — Estado de envío",
          note: "string — Nota interna",
        },
      },
    ],
    objectFields: {
      id: "integer — ID de la orden",
      number: "integer — Número de orden visible para el cliente",
      status: "string — Estado: open, closed, cancelled",
      payment_status:
        "string — Estado de pago: pending, authorized, paid, voided, refunded, abandoned",
      shipping_status:
        "string — Estado de envío: unshipped, shipped, delivered",
      gateway: "string — Pasarela de pago usada",
      shipping_carrier_name: "string — Nombre del transportista",
      subtotal: "string — Subtotal sin descuentos ni envío",
      discount: "string — Monto de descuentos",
      shipping: "string — Costo de envío",
      total: "string — Total de la orden",
      total_usd: "string — Total en USD",
      currency: "string — Moneda de la orden",
      language: "string — Idioma de la orden",
      note: "string — Nota interna",
      coupon: "array — Cupones aplicados",
      products: "array — Productos de la orden (order items)",
      customer: "object — Datos del cliente",
      billing_address: "object — Dirección de facturación",
      shipping_address: "object — Dirección de envío",
      fulfillments: "array — Envíos/fulfillments de la orden",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Customers",
    slug: "customers",
    description:
      "Clientes registrados en la tienda. Incluye información de contacto, direcciones y estadísticas de compra.",
    baseUrl: `${API_BASE}/customers`,
    endpoints: [
      {
        method: "GET",
        path: "/customers",
        description: "Lista todos los clientes.",
        queryParams: {
          since_id: "integer — Clientes con ID mayor al indicado",
          q: "string — Búsqueda por nombre o email",
          created_at_min: "datetime — Creados desde",
          created_at_max: "datetime — Creados hasta",
          page: "integer — Página",
          per_page: "integer — Resultados por página (max: 200)",
        },
      },
      {
        method: "GET",
        path: "/customers/{customer_id}",
        description: "Obtiene un cliente específico.",
      },
      {
        method: "POST",
        path: "/customers",
        description: "Crea un nuevo cliente.",
        bodyFields: {
          name: "string — Nombre completo",
          email: "string — Email (único)",
          phone: "string — Teléfono",
          identification: "string — DNI/CPF/RUT u otro documento",
          note: "string — Nota interna",
          accepts_marketing: "boolean — Si acepta emails de marketing",
          billing_address: "object — Dirección de facturación",
          shipping_address: "object — Dirección de envío",
        },
      },
      {
        method: "PUT",
        path: "/customers/{customer_id}",
        description: "Actualiza datos de un cliente existente.",
      },
      {
        method: "DELETE",
        path: "/customers/{customer_id}",
        description: "Elimina un cliente de la tienda.",
      },
    ],
    objectFields: {
      id: "integer — ID del cliente",
      name: "string — Nombre completo",
      email: "string — Email",
      phone: "string — Teléfono",
      identification: "string — Número de documento",
      note: "string — Nota interna",
      active: "boolean — Si la cuenta está activa",
      accepts_marketing: "boolean — Si acepta marketing por email",
      total_spent: "string — Total gastado en la tienda",
      total_spent_currency: "string — Moneda del total gastado",
      last_order_id: "integer | null — ID de la última orden",
      orders_count: "integer — Cantidad de órdenes realizadas",
      addresses: "array — Direcciones del cliente",
      billing_address: "object — Dirección de facturación",
      default_address: "object — Dirección predeterminada",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Webhooks",
    slug: "webhooks",
    description:
      "Suscripciones a eventos de la tienda. Cuando ocurre un evento, Tiendanube envía un POST al URL configurado.",
    baseUrl: `${API_BASE}/webhooks`,
    endpoints: [
      {
        method: "GET",
        path: "/webhooks",
        description: "Lista todos los webhooks registrados.",
      },
      {
        method: "GET",
        path: "/webhooks/{webhook_id}",
        description: "Obtiene un webhook específico.",
      },
      {
        method: "POST",
        path: "/webhooks",
        description: "Registra un nuevo webhook.",
        bodyFields: {
          url: "string — URL donde se enviarán los eventos (HTTPS recomendado)",
          event:
            "string — Evento a suscribir (ver lista de eventos disponibles)",
        },
        example: {
          request: {
            url: "https://miapp.com/webhooks/tiendanube",
            event: "order/paid",
          },
        },
      },
      {
        method: "PUT",
        path: "/webhooks/{webhook_id}",
        description: "Actualiza la URL o evento de un webhook.",
      },
      {
        method: "DELETE",
        path: "/webhooks/{webhook_id}",
        description: "Elimina un webhook.",
      },
    ],
    objectFields: {
      id: "integer — ID del webhook",
      url: "string — URL de destino",
      event: "string — Evento suscrito",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Metafields",
    slug: "metafields",
    description:
      "Campos personalizados para extender objetos de la API (productos, variantes, categorías, clientes, órdenes).",
    baseUrl: `${API_BASE}/metafields`,
    endpoints: [
      {
        method: "GET",
        path: "/{resource}/{resource_id}/metafields",
        description:
          "Lista los metafields de un recurso. Resource puede ser: products, variants, categories, customers, orders.",
        queryParams: {
          namespace: "string — Filtra por namespace",
          key: "string — Filtra por clave",
        },
      },
      {
        method: "POST",
        path: "/{resource}/{resource_id}/metafields",
        description: "Crea un metafield para un recurso.",
        bodyFields: {
          namespace: "string — Agrupador: 'app_nombre' o 'custom'",
          key: "string — Nombre del campo",
          value: "string — Valor del campo",
          description: "string — Descripción del metafield",
        },
      },
      {
        method: "PUT",
        path: "/{resource}/{resource_id}/metafields/{metafield_id}",
        description: "Actualiza el valor de un metafield.",
      },
      {
        method: "DELETE",
        path: "/{resource}/{resource_id}/metafields/{metafield_id}",
        description: "Elimina un metafield.",
      },
    ],
    objectFields: {
      id: "integer — ID del metafield",
      namespace: "string — Agrupador del metafield",
      key: "string — Clave del metafield",
      value: "string — Valor",
      description: "string — Descripción",
      owner_resource: "string — Recurso al que pertenece",
      owner_id: "integer — ID del recurso padre",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Script Tags",
    slug: "script_tags",
    description:
      "Scripts JavaScript externos que se inyectan en el storefront de la tienda.",
    baseUrl: `${API_BASE}/script_tags`,
    endpoints: [
      {
        method: "GET",
        path: "/script_tags",
        description: "Lista todos los scripts registrados.",
      },
      {
        method: "POST",
        path: "/script_tags",
        description: "Registra un nuevo script externo.",
        bodyFields: {
          src: "string — URL del script JS (HTTPS)",
          event: "string — Cuándo se carga: onload (default)",
          where_to_load: "string — Dónde cargarlo: store (storefront, default)",
        },
      },
      {
        method: "DELETE",
        path: "/script_tags/{script_tag_id}",
        description: "Elimina un script registrado.",
      },
    ],
    objectFields: {
      id: "integer — ID del script",
      src: "string — URL del script",
      event: "string — Evento de carga",
      where_to_load: "string — Dónde se carga",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Abandoned Checkouts",
    slug: "abandoned_checkouts",
    description:
      "Checkouts que no se completaron. Permite recuperar carritos abandonados.",
    baseUrl: `${API_BASE}/checkouts`,
    endpoints: [
      {
        method: "GET",
        path: "/checkouts",
        description: "Lista checkouts abandonados.",
        queryParams: {
          since_id: "integer — Checkouts con ID mayor al indicado",
          created_at_min: "datetime — Creados desde",
          created_at_max: "datetime — Creados hasta",
          page: "integer — Página",
          per_page: "integer — Resultados por página (max: 200)",
        },
      },
    ],
    objectFields: {
      id: "integer — ID del checkout",
      token: "string — Token único del checkout",
      email: "string — Email del visitante (si lo dejó)",
      total: "string — Total del carrito",
      products: "array — Productos en el carrito",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
  {
    name: "Coupons",
    slug: "coupons",
    description:
      "Cupones de descuento que los clientes pueden aplicar al realizar una compra.",
    baseUrl: `${API_BASE}/coupons`,
    endpoints: [
      {
        method: "GET",
        path: "/coupons",
        description: "Lista todos los cupones.",
        queryParams: {
          since_id: "integer — Cupones con ID mayor al indicado",
          code: "string — Filtra por código exacto",
          page: "integer — Página",
          per_page: "integer — Por página (max: 200)",
        },
      },
      {
        method: "GET",
        path: "/coupons/{coupon_id}",
        description: "Obtiene un cupón específico.",
      },
      {
        method: "POST",
        path: "/coupons",
        description: "Crea un cupón de descuento.",
        bodyFields: {
          code: "string — Código del cupón (único, sin espacios)",
          type: "string — Tipo: percentage | absolute | shipping",
          value: "string — Valor del descuento (porcentaje o monto)",
          valid: "boolean — Si el cupón está activo",
          max_uses: "integer | null — Máximo de usos (null = ilimitado)",
          min_price: "string | null — Precio mínimo de la orden para aplicar",
          start_date: "datetime | null — Fecha de inicio de validez",
          end_date: "datetime | null — Fecha de expiración",
          categories:
            "array — Categorías a las que aplica: [{ id: 5 }] (vacío = todas)",
          products:
            "array — Productos a los que aplica: [{ id: 123 }] (vacío = todos)",
        },
      },
      {
        method: "PUT",
        path: "/coupons/{coupon_id}",
        description: "Actualiza un cupón existente.",
      },
      {
        method: "DELETE",
        path: "/coupons/{coupon_id}",
        description: "Elimina un cupón.",
      },
    ],
    objectFields: {
      id: "integer — ID del cupón",
      code: "string — Código del cupón",
      type: "string — Tipo de descuento: percentage, absolute, shipping",
      value: "string — Valor del descuento",
      valid: "boolean — Si está activo",
      used_times: "integer — Veces utilizado",
      max_uses: "integer | null — Límite de usos",
      min_price: "string | null — Precio mínimo de la orden",
      start_date: "datetime | null — Inicio de validez",
      end_date: "datetime | null — Fin de validez",
      categories: "array — Categorías aplicables",
      products: "array — Productos aplicables",
      created_at: "datetime — Fecha de creación",
      updated_at: "datetime — Fecha de actualización",
    },
  },
];

export const WEBHOOK_EVENTS: Record<string, string> = {
  "store/redact": "Se solicita eliminar datos del dueño de la tienda (GDPR)",
  "customers/redact": "Se solicita eliminar datos de un cliente (GDPR)",
  "customers/data_request": "Se solicita datos de un cliente (GDPR)",
  "app/uninstalled": "La aplicación fue desinstalada de la tienda",
  "category/created": "Se creó una categoría",
  "category/updated": "Se actualizó una categoría",
  "category/deleted": "Se eliminó una categoría",
  "product/created": "Se creó un producto",
  "product/updated": "Se actualizó un producto",
  "product/deleted": "Se eliminó un producto",
  "order/created": "Se creó una orden",
  "order/updated": "Se actualizó una orden",
  "order/paid": "Una orden fue pagada",
  "order/fulfilled": "Una orden fue enviada/completada",
  "order/cancelled": "Una orden fue cancelada",
  "domain/updated": "Se actualizó el dominio de la tienda",
};
