## Overview[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#overview "Direct link to Overview")

The **Pages resource** allows developers to manage custom pages within the store. The resource also handles stores with multiple languages. Currently, a Page is always in a published state, meaning that it will always be visible on the store.

Since: `2025-03`

### Page Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#page-properties "Direct link to Page Properties")

| Field | Type | Description |
| --- | --- | --- |
| `id` | Integer | Unique identifier of the page. |
| `store_id` | Integer | ID of the store this page belongs to. |
| `published` | Boolean | Whether the page is currently published. |
| `created_at` | String | Timestamp when the page was created (ISO 8601 format). |
| `updated_at` | String | Timestamp when the page was last updated (ISO 8601 format). |
| `name` | Object | Localized name of the page. Keys are language codes (e.g., "es"). |
| `handle` | Object | Localized URL-friendly handle/slug for the page. Keys are language codes (e.g., "es"). |
| `content` | Object | Localized HTML content of the page. Keys are language codes (e.g., "es"). |
| `seo_title` | Object | Localized SEO title for the page. Keys are language codes (e.g., "es"). |
| `seo_description` | Object | Localized SEO description for the page. Keys are language codes (e.g., "es"). |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### Retrieve All Pages[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#retrieve-all-pages "Direct link to Retrieve All Pages")

#### GET `/pages`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-pages "Direct link to get-pages")

Retrieves all custom pages from the store.

**Permissions Required:** `read_content`

**Response:**

```
{  "pages": {    "results": [      {        "id": 105034,        "store_id": 97906,        "published": true,        "created_at": "2025-02-25T19:19:06+0000",        "updated_at": "2025-02-25T19:44:06+0000",        "name": {          "es": "About Us"        },        "handle": {          "es": "about-us"        },        "content": {          "es": "<p>Our company was founded in 2020...</p>"        },        "seo_title": {          "es": "About Our Company"        },        "seo_description": {          "es": "Learn more about our company's history and mission"        }      }    ],    "total": 17,    "page": 1,    "perPage": 5,    "lastPage": 4  }}
```

**Response Fields:**

-   `pages.results`: Array of page objects
-   `pages.total`: Total number of pages available
-   `pages.page`: Current page number
-   `pages.perPage`: Number of pages per page
-   `pages.lastPage`: Total number of pages

### Retrieve a Specific Page[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#retrieve-a-specific-page "Direct link to Retrieve a Specific Page")

#### GET `/pages/:pageID`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-pagespageid "Direct link to get-pagespageid")

Retrieves a specific custom page by its ID.

**Permissions Required:** `read_content`

**Path Parameters:**

-   `pageID` (integer) - The unique identifier of the page.

**Response:**

```
{    "id": 1658539,    "store_id": 1898952,    "published": true,    "created_at": "2023-10-10T18:29:09+0000",    "updated_at": "2024-07-19T20:13:48+0000",    "name": {        "es": "A Phishing Page",        "en": "A Phishing Page"    },    "handle": {        "es": "a-phishing-page",        "en": "a-phishing-page"    },    "content": {        "es": "<div class=\"custom-text\" style=\"margin:0.5rem auto;padding:0px;border:0px;font-size:20px;line-height:inherit;font-family:Times;vertical-align:baseline;color:#242f37;\">\r\n<p style=\"margin-bottom:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-size:inherit;line-height:34px;font-family:'NotoSansDisplay-Regular', Arial, sans-serif;vertical-align:baseline;letter-spacing:0px;\">En la misma semana en la que el Gobierno Nacional, a través de la<span style=\"margin:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-weight:inherit;font-size:inherit;line-height:inherit;font-family:'NotoSansDisplay-Bold', 'Arial Black', sans-serif;vertical-align:baseline;\"> Inspección General de Justicia</span>,<a style=\"margin:0px;padding:0px;border:0px;font:inherit;vertical-align:baseline;color:#242f37;\" href=\"https://www.ole.com.ar/informacion-general/sociedades-anonimas-deportivas-javier-milei-argentina-resolucion_0_wCWCYwHyr7.html\" target=\"_self\" rel=\"noreferrer noopener\"> habilitó las Sociedades Anónimas Deportivas en el fútbol</a>, la <a class=\"slug\" style=\"margin:0px;padding:0px;border:0px;font:inherit;vertical-align:baseline;color:#242f37;\" href=\"https://www.ole.com.ar/tema/afa.html\">AFA</a>, luego de una reunión de Comité Ejecutivo junto al de la Liga Profesional en el predio de Ezeiza, tuvo una fuerte respuesta.</p>\r\n</div>\r\n<div class=\"sc-74206701-5 fihEmM\" style=\"margin:15px 0px;padding:0px;border:0px;font-size:20px;line-height:inherit;font-family:Times;vertical-align:baseline;background:#f9f9f9;min-height:90px;color:#242f37;\">\r\n<div class=\"SRA\" style=\"margin:0px;padding:0px;border:0px;font:inherit;vertical-align:baseline;\">\r\n<div id=\"div-gpt-ad-inread\" style=\"margin:0px;padding:0px;border:0px;font:inherit;vertical-align:baseline;\"></div>\r\n</div>\r\n</div>\r\n<div class=\"custom-text\" style=\"margin:0.5rem auto;padding:0px;border:0px;font-size:20px;line-height:inherit;font-family:Times;vertical-align:baseline;color:#242f37;\">\r\n<p style=\"margin-bottom:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-size:inherit;line-height:34px;font-family:'NotoSansDisplay-Regular', Arial, sans-serif;vertical-align:baseline;letter-spacing:0px;\">El comunicado fue titulado así: \"Aclaración sobre la inalterabilidad del Estatuto de AFA frente a los supuestos cambios introducidos por cierta normativa en materia de Sociedades Anónimas Deportivas\". En un extenso texto, aclara lo que considera \"la tergiversada interpretación realizada por ciertos medios de comunicación masivos\".</p>\r\n</div>\r\n<div class=\"custom-text\" style=\"margin:0.5rem auto;padding:0px;border:0px;font-size:20px;line-height:inherit;font-family:Times;vertical-align:baseline;color:#242f37;\">\r\n<p style=\"margin-bottom:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-size:inherit;line-height:34px;font-family:'NotoSansDisplay-Regular', Arial, sans-serif;vertical-align:baseline;letter-spacing:0px;\">Y se explica: \"En efecto, destacamos que dichas modificaciones dictadas por el organismo local de la Ciudad de Buenos Aires no obligan ni inciden en forma alguna en el estatuto social de la AFA, continuando, <span style=\"margin:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-weight:inherit;font-size:inherit;line-height:inherit;font-family:'NotoSansDisplay-Bold', 'Arial Black', sans-serif;vertical-align:baseline;\">siendo un requisito indispensable para ser miembro de AFA el ser una 'Asociación Civil sin fines de lucro',</span> tal como lo decidieron libremente las entidades miembros de AFA. En este punto, resulta una buena ocasión para aclarar que, AFA ni sus entidades miembros se encuentran en oposición a las llamadas SAD (Sociedades Anónimas Deportivas) y/o a que cada asociación civil (club, sea cual fuere su actividad) pueda decidir libremente la estructura jurídica a adoptar; ahora bien, a lo que sí se opone AFA y sus entidades miembros, puesto que es palmariamente inconstitucional, <span style=\"margin:0px;padding:0px;border:0px;font-style:inherit;font-variant:inherit;font-weight:inherit;font-size:inherit;line-height:inherit;font-family:'NotoSansDisplay-Bold', 'Arial Black', sans-serif;vertical-align:baseline;\">es que se quiera obligar a cualquier ente privado (la AFA y cualquier asociación civil, lo es) a asociar a entidades con diferente estructura jurídica a la de sus actuales </span>miembros en clara oposición a sus estatutos conforme así lo establecieron sus socios.</p>\r\n</div>",        "en": "<p>dadasd</p>\r\n"    },    "seo_title": {        "es": "A Phishing Page",        "en": "A Phishing Page"    },    "seo_description": {        "es": "",        "en": ""    }}
```

### Create a New Page[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#create-a-new-page "Direct link to Create a New Page")

#### POST `/pages`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-pages "Direct link to post-pages")

Creates a new custom page in the store.

**Permissions Required:** `write_content`

**Request Body:**

```
{  "page": {    "publish": true,    "i18n": {      "es_AR": {        "title": "About Us",        "content": "<p>Our company was founded in 2020...</p>",        "seo_handle": "about-us",        "seo_title": "About Our Company",        "seo_description": "Learn more about our company"      },      "en_US": {        "title": "About Us",        "content": "<p>Our company was founded in 2020...</p>",        "seo_handle": "about-us",        "seo_title": "About Our Company",        "seo_description": "Learn more about our company"      }    }  }}
```

**Request Body Fields:**

-   `page.publish` (boolean): Whether the page should be published immediately
-   `page.i18n` (object): Localized content for each language
    -   Each language key (e.g., "es\_AR", "en\_US") contains:
        -   `title`: The page title
        -   `content`: HTML content of the page
        -   `seo_handle`: URL-friendly handle for the page
        -   `seo_title`: SEO title for the page
        -   `seo_description`: SEO description for the page

**Response:**

```
{  "id": 105051,  "store_id": 97906,  "published": true,  "created_at": "2025-03-20T15:29:56+0000",  "updated_at": "2025-03-20T15:29:56+0000",  "name": {    "en_US": "About Us",    "es_AR": "About Us"  },  "handle": {    "en_US": "about-us",    "es_AR": "about-us"  },  "content": {    "en_US": "<p>Our company was founded in 2020...</p>",    "es_AR": "<p>Our company was founded in 2020...</p>"  },  "seo_title": {    "en_US": "About Our Company",    "es_AR": "About Our Company"  },  "seo_description": {    "en_US": "Learn more about our company",    "es_AR": "Learn more about our company"  }}
```

### Update an Existing Page[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#update-an-existing-page "Direct link to Update an Existing Page")

#### PUT `/pages/:pageID`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-pagespageid "Direct link to put-pagespageid")

Updates an existing custom page by its ID.

**Permissions Required:** `write_content`

**Path Parameters:**

-   `pageID` (integer) - The unique identifier of the page.

**Request Body:**

```
{  "title": "About Us (Updated)",  "content": "Updated content for About Us page."}
```

**Response:**

```
{    "id": 1541092,    "store_id": 2101462,    "published": true,    "created_at": "2025-03-20T18:56:58+0000",    "updated_at": "2025-03-20T18:57:12+0000",    "name": {        "es": "We are The testers"    },    "handle": {        "es": "test"    },    "content": {        "es": "<p>Testxcvssszxcxzcsssssss</p>"    },    "seo_title": {        "es": "asd"    },    "seo_description": {        "es": "asd"    }}
```

### Delete a Page[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-a-page "Direct link to Delete a Page")

#### DELETE `/pages/:pageID`[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-pagespageid "Direct link to delete-pagespageid")

Deletes a specific custom page from the store.

**Permissions Required:** `write_content`

**Path Parameters:**

-   `pageID` (integer) - The unique identifier of the page.

**Response:**

```
{  "message": "Page deleted successfully."}
```

**Error Response (If Page ID Does Not Exist):**

```
{    "code": 404,    "message": "Not Found",    "description": "Page not found"}
```