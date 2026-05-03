Version: 2025-03

A Product is an item for sale in a Tiendanube/Nuvemshop's store. It can be either a good or a service.

> 📢 **Important** 📢
> 
> A new [Product API](https://tiendanube.github.io/api-documentation/guides/multi-inventory/products) with support for multi inventory is currently being rolled out to every merchant.
> 
> For any new development, we strongly recommend you to use the new version. Please contact us to activate this new version in your stores if needed.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation |
| --- | --- |
| id | The unique numeric identifier for the Product |
| name | List of the names of the Product, in every language supported by the store |
| description | List of the descriptions of the Product, as HTML, in every language supported by the store |
| handle | List of the url-friendly strings generated from the Product's names, in every language supported by the store |
| variants | List of [Product Variant](https://tiendanube.github.io/api-documentation/resources/product-variant) objects representing the different version of the Product |
| images | List of [Product Image](https://tiendanube.github.io/api-documentation/resources/product-image) objects representing the Product's images |
| categories | List of [Category](https://tiendanube.github.io/api-documentation/resources/category) Ids representing the Product's categories |
| brand | The Product's brand |
| published | _true_ if the Product is published in the store. _false_ otherwise |
| free\_shipping | _true_ if the Product is elegible for free shipping. _false_ otherwise |
| video\_url | String with a valid URL format. Only admits https links |
| seo\_title | The SEO friendly title for the Product. Up to 70 characters |
| seo\_description | The SEO friendly description for the Product. Up to 320 characters |
| attributes | List of the names of the attributes whose values define the variants. E.g.: Color, Size, etc. It is important that the number of `attributes` is equal to the number of `values` within the variants. Each product can have a maximum of 3 attributes |
| tags | String with all the Product's tags, separated by commas |
| created\_at | Date when the Product was created in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |
| updated\_at | Date when the Product was last updated in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |
| requires\_shipping | _true_ if the Product is physical. _false_ if it is digital |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-products "Direct link to GET /products")

Receive a list of all Products.

> Important: Our API returns up to 30 results by default. To retrieve a larger number of results, you must use the [pagination parameters](https://tiendanube.github.io/api-documentation/intro#pagination) (`page` and `per_page`).

| Parameter | Explanation |
| --- | --- |
| ids | Restrict results to the specified IDs. Up to 30 IDs can be included, separated by commas. |
| since\_id | Restrict results to after the specified ID |
| language | Specify search language |
| q | Search Products containing the given text in their names, tags or SKU |
| handle | Show Products with a given URL |
| category\_id | Show Products with a given category |
| published | Show Products by published status. Valid values are "true" or "false" |
| free\_shipping | Show Products by free\_shipping status. Valid values are "true" or "false" |
| max\_stock | Show Products with less or equal stock than the specified value |
| min\_stock | Show Products with more or equal stock than the specified value |
| has\_promotional\_price | Show Products that have a defined promotional price. Valid values are _true_ or _false_ |
| has\_weight | Show Products that have a defined weight. Valid values are _true_ or _false_ |
| has\_all\_dimensions | Show Products that have a defined depth, width and height. Valid values are _true_ or _false_ |
| has\_weight\_and\_all\_dimensions | Show Products that have a defined weight, depth, width and height. Valid values are _true_ or _false_ |
| created\_at\_min | Show Products created after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| created\_at\_max | Show Products created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_min | Show Products last updated after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_max | Show Products last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| sort\_by | Sort Products by a particular criteria (I.E.: sort\_by=created-at-ascending) |
| page | Page to show |
| per\_page | Amount of results |
| fields | Comma-separated list of fields to include in the response |

| Sort Criteria | Explanation |
| --- | --- |
| user | User manually defined sort |
| price-ascending, cost-ascending | Sort by price ascending |
| price-descending, cost-descending | Sort by price descending |
| alpha-ascending, name-ascending | Sort by Product name ascending |
| alpha-descending, name-descending | Sort by Product name descending |
| created-at-ascending | Sort by created date ascending |
| created-at-descending | Sort by created date descending |
| best-selling | Sort by number of sold products descending |

#### GET /products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-products-1 "Direct link to GET /products")

`HTTP/1.1 200 OK`

```
[  {    "attributes": [      {        "en": "Size"      }    ],    "categories": [      {        "created_at": "2013-01-03T09:11:51-03:00",        "description": {          "en": "",          "es": "",          "pt": ""        },        "handle": {          "en": "poke-balls",          "es": "poke-balls",          "pt": "poke-balls"        },        "id": 4567,        "name": {          "en": "Poké Balls",          "es": "Poké Balls",          "pt": "Poké Balls"        },        "parent": null,        "subcategories": [],        "google_shopping_category": null,        "updated_at": "2013-03-11T09:14:11-03:00"      }    ],    "created_at": "2013-01-03T09:11:51-03:00",    "description": {      "en": "<p>The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.</p>",      "es": "<p>La mejor Bola con el nivel máximo de desempeño. Atrapará cualquier Pokémon sin fallar.</p>",      "pt": "<p>A melhor Bola com o nível máximo de desempenho. Ele vai pegar qualquer Pokémon selvagem sem falhar.</p>"    },    "handle": {      "en": "master-ball",      "es": "master-ball",      "pt": "master-ball"    },    "id": 1234,    "images": [      {        "id": 101,        "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/servine-640-0.jpg",        "position": 1,        "product_id": 1234      },      {        "id": 112,        "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/onyx-640-0.jpg",        "position": 2,        "product_id": 1234      },      {        "id": 123,        "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/stoutland-640-0.jpg",        "position": 3,        "product_id": 1234      }    ],    "name": {      "en": "Master Ball",      "es": "Master Ball",      "pt": "Master Ball"    },    "brand": null,    "video_url": "https://www.youtube.com/watch?v=57aG16_gQcU",    "seo_title": "Master Ball",    "seo_description": "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",    "published": true,    "free_shipping": false,    "updated_at": "2013-03-11T09:14:11-03:00",    "variants": [      {        "id": 101,        "promotional_price": "19.00",        "created_at": "2013-01-03T09:11:51-03:00",        "depth": null,        "height": null,        "values": [          {            "en": "Small"          }        ],        "price": "25.00",        "product_id": 1234,        "stock_management": true,        "stock": 5,        "sku": "BSG1234A",        "updated_at": "2013-03-11T09:14:11-03:00",        "weight": "2.00",        "width": null,        "cost": null      },      {        "id": 112,        "promotional_price": "19.00",        "created_at": "2013-01-03T09:11:51-03:00",        "depth": null,        "height": null,        "values": [          {            "en": "Medium"          }        ],        "price": "25.00",        "product_id": 1234,        "stock_management": true,        "stock": 5,        "sku": "BSG1234B",        "updated_at": "2013-03-11T09:14:11-03:00",        "weight": "2.25",        "width": null,        "cost": null      },      {        "id": 133,        "promotional_price": "19.00",        "created_at": "2013-01-03T09:11:51-03:00",        "depth": null,        "height": null,        "values": [          {            "en": "Large"          }        ],        "price": "25.00",        "product_id": 1234,        "stock_management": true,        "stock": 5,        "sku": "BSG1234C",        "updated_at": "2013-03-11T09:14:11-03:00",        "weight": "2.50",        "width": null,        "cost": "10.99"      }    ],    "tags": "Brinquedos, pokeball, oferta, colecionismo"  }]
```

#### GET /products?created\_at\_min=2013-01-01T00:00:00-03:00&fields=id,name[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productscreated_at_min2013-01-01t000000-0300fieldsidname "Direct link to GET /products?created_at_min=2013-01-01T00:00:00-03:00&fields=id,name")

`HTTP/1.1 200 OK`

```
[  {    "id": 1234,    "name": {      "en": "Master Ball",      "es": "Master Ball",      "pt": "Master Ball"    }  }]
```

### GET /products/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsid "Direct link to GET /products/{id}")

Receive a single Product

| Parameter | Explanation |
| --- | --- |
| fields | Comma-separated list of fields to include in the response |

#### GET /products/1234[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-products1234 "Direct link to GET /products/1234")

`HTTP/1.1 200 OK`

```
{  "attributes": [    {      "en": "Size"    }  ],  "categories": [    {      "created_at": "2013-01-03T09:11:51-03:00",      "description": {        "en": "",        "es": "",        "pt": ""      },      "handle": {        "en": "poke-balls",        "es": "poke-balls",        "pt": "poke-balls"      },      "id": 4567,      "name": {        "en": "Poké Balls",        "es": "Poké Balls",        "pt": "Poké Balls"      },      "parent": null,      "subcategories": [],      "google_shopping_category": null,      "updated_at": "2013-03-11T09:14:11-03:00"    }  ],  "created_at": "2013-01-03T09:11:51-03:00",  "description": {    "en": "<p>The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.</p>",    "es": "<p>La mejor Bola con el nivel máximo de desempeño. Atrapará cualquier Pokémon sin fallar.</p>",    "pt": "<p>A melhor Bola com o nível máximo de desempenho. Ele vai pegar qualquer Pokémon selvagem sem falhar.</p>"  },  "handle": {    "en": "master-ball",    "es": "master-ball",    "pt": "master-ball"  },  "id": 1234,  "images": [    {      "id": 101,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/servine-640-0.jpg",      "position": 1,      "product_id": 1234    },    {      "id": 112,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/onyx-640-0.jpg",      "position": 2,      "product_id": 1234    },    {      "id": 123,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/stoutland-640-0.jpg",      "position": 3,      "product_id": 1234    }  ],  "name": {    "en": "Master Ball",    "es": "Master Ball",    "pt": "Master Ball"  },  "brand": null,  "video_url": "https://www.youtube.com/watch?v=57aG16_gQcU",  "seo_title": "Master Ball",  "seo_description": "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",  "published": true,  "free_shipping": false,  "updated_at": "2013-03-11T09:14:11-03:00",  "variants": [    {      "id": 101,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Small"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234A",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.00",      "width": null,      "cost": null    },    {      "id": 112,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Small"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234B",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.25",      "width": null,      "cost": null    },    {      "id": 133,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Small"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234C",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.50",      "width": null,      "cost": "10.99"    }  ],  "tags": "Brinquedos, pokeball, oferta, colecionismo"}
```

### GET /products/sku/{sku}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsskusku "Direct link to GET /products/sku/{sku}")

Returns the first Product found where one of its variants has the given SKU.

#### GET /products/sku/1234abcd[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productssku1234abcd "Direct link to GET /products/sku/1234abcd")

### POST /products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-products "Direct link to POST /products")

Creates a new Product

> **_Note:_** To guarantee a fluid process, we recommended that you create a product with a maximum of 9 images linked to the object in this endpoint. If the product has more images, use this endpoint: [POST /products/{product\_id}/images](https://tiendanube.github.io/api-documentation/resources/product-image#post-productsproduct_idimages)

#### POST /products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-products-1 "Direct link to POST /products")

```
{  "invalid_name": "foobar"}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{  "name": ["can't be blank"]}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{  "code": 422,  "message": "Unprocessable Entity",  "description": "Store has reached maximum limit of 100000 allowed products"}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{  "code": 422,  "message": "Unprocessable Entity",  "description": "Product is not allowed to have more than 250 images"}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{  "code": 422,  "message": "Unprocessable Entity",  "description": "Product is not allowed to have more than 1000 variants"}
```

```
{  "code": 422,  "message": "Unprocessable Entity",  "description": "The video url field is not a secure url"}
```

#### POST /products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-products-2 "Direct link to POST /products")

```
{  "images": [    {      "src": "http://images1.wikia.nocookie.net/__cb20101106022321/pokemon/images/f/f1/UltraBallArt.png"    }  ],  "name": {    "en": "Ultra Ball",    "es": "Ultra Ball",    "pt": "Ultra Ball"  },  "video_url": "https://www.youtube.com/watch?v=57aG16_gQcU",  "variants": [    {      "price": "10.00",      "stock_management": true,      "stock": 12,      "weight": "2.00",      "cost": "10.99"    }  ],  "categories": [11654304, 11654305]}
```

`HTTP/1.1 201 Created`

```
{  "attributes": [],  "categories": [    {      "created_at": "2013-01-03T09:11:51-03:00",      "description": {        "en": "",        "es": "",        "pt": ""      },      "handle": {        "en": "poke-balls",        "es": "poke-balls",        "pt": "poke-balls"      },      "id": 4567,      "name": {        "en": "Poké Balls",        "es": "Poké Balls",        "pt": "Poké Balls"      },      "parent": null,      "subcategories": [],      "google_shopping_category": null,      "updated_at": "2013-03-11T09:14:11-03:00"    }  ],  "created_at": "2013-06-01T12:15:11-03:00",  "description": {    "en": "",    "es": "",    "pt": ""  },  "handle": {    "en": "ultra-ball",    "es": "ultra-ball",    "pt": "ultra-ball"  },  "id": 2435,  "images": [    {      "id": 231,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/UltraBallArt.jpg",      "position": 1,      "product_id": 2435    }  ],  "name": {    "en": "Ultra Ball",    "es": "Ultra Ball",    "pt": "Ultra Ball"  },  "brand": null,  "video_url": "https://www.youtube.com/watch?v=57aG16_gQcU",  "seo_title": "Ultra Ball",  "seo_description": "",  "published": true,  "free_shipping": false,  "created_at": "2013-06-01T12:15:11-03:00",  "variants": [    {      "id": 101,      "promotional_price": null,      "created_at": "2013-06-01T12:15:11-03:00",      "depth": null,      "height": null,      "values": [],      "price": "10.00",      "product_id": 1234,      "stock_management": true,      "stock": 12,      "sku": null,      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.00",      "width": null,      "cost": "10.99"    }  ],  "tags": ""}
```

### PUT /products/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-productsid "Direct link to PUT /products/{id}")

Modify an existing Product

> **_Note:_** If you create a product without the [Product Variant](https://tiendanube.github.io/api-documentation/resources/product-variant) object and want to change information such as price and stock, in the API there is a "virtual" variant which is linked to the typical properties of a variant (prices, stock, dimensions, etc). Therefore, in these cases, changes in any of the properties mentioned above must be made on its "virtual" variant, not on the product itself. That is, the endpoint to use is: [PUT /products/{product\_id}/variants/{id}](https://tiendanube.github.io/api-documentation/resources/product-variant#put-productsproduct_idvariantsid)

> **_Important:_** If the product has an associated category, and the `categories` field is sent empty, the product ends up without a category. In other words, the category is removed from the product. So, if you want to keep the current category, you must include the `category_id` in the field or else you must omit the `categories` field.

#### PUT /products/5123[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-products5123 "Direct link to PUT /products/5123")

```
{  "categories": [4567],  "id": 1234,  "published": false}
```

`HTTP/1.1 200 OK`

```
{  "attributes": [    {      "en": "Size"    }  ],  "categories": [    {      "created_at": "2013-01-03T09:11:51-03:00",      "description": {        "en": "",        "es": "",        "pt": ""      },      "handle": {        "en": "poke-balls",        "es": "poke-balls",        "pt": "poke-balls"      },      "id": 4567,      "name": {        "en": "Poké Balls",        "es": "Poké Balls",        "pt": "Poké Balls"      },      "parent": null,      "subcategories": [],      "google_shopping_category": null,      "updated_at": "2013-03-11T09:14:11-03:00"    }  ],  "created_at": "2013-01-03T09:11:51-03:00",  "description": {    "en": "<p>The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.</p>",    "es": "<p>La mejor Bola con el nivel máximo de desempeño. Atrapará cualquier Pokémon sin fallar.</p>",    "pt": "<p>A melhor Bola com o nível máximo de desempenho. Ele vai pegar qualquer Pokémon selvagem sem falhar.</p>"  },  "handle": {    "en": "master-ball",    "es": "master-ball",    "pt": "master-ball"  },  "id": 1234,  "images": [    {      "id": 101,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/servine-640-0.jpg",      "position": 1,      "product_id": 1234    },    {      "id": 112,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/onyx-640-0.jpg",      "position": 2,      "product_id": 1234    },    {      "id": 123,      "src": "http://d26lpennugtm8s.cloudfront.net/stores/001/234/products/stoutland-640-0.jpg",      "position": 3,      "product_id": 1234    }  ],  "name": {    "en": "Master Ball",    "es": "Master Ball",    "pt": "Master Ball"  },  "brand": null,  "video_url": null,  "seo_title": "Master Ball",  "seo_description": "The best Ball with the ultimate level of performance. It will catch any wild Pokémon without fail.",  "published": false,  "free_shipping": false,  "updated_at": "2013-06-01T12:15:11-03:00",  "variants": [    {      "id": 101,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Small"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234A",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.00",      "width": null,      "cost": null    },    {      "id": 112,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Medium"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234B",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.25",      "width": null,      "cost": null    },    {      "id": 133,      "promotional_price": "19.00",      "created_at": "2013-01-03T09:11:51-03:00",      "depth": null,      "height": null,      "values": [        {          "en": "Large"        }      ],      "price": "25.00",      "product_id": 1234,      "stock_management": true,      "stock": 5,      "sku": "BSG1234C",      "updated_at": "2013-03-11T09:14:11-03:00",      "weight": "2.50",      "width": null,      "cost": null    }  ],  "tags": ""}
```

### DELETE /products/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-productsid "Direct link to DELETE /products/{id}")

Remove a Product

#### DELETE /products/1234[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-products1234 "Direct link to DELETE /products/1234")

`HTTP/1.1 200 OK`

### PATCH /products/stock-price[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-productsstock-price "Direct link to PATCH /products/stock-price")

Updates Stock or Price of multiple products and variants. 50 different variants can be updated at once taking all products into account.

#### PATCH /products/stock-price[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-productsstock-price-1 "Direct link to PATCH /products/stock-price")

```
[    {        "id": 53786462,        "variants": [            {                "id": 147085180,                "price": 1000,                "inventory_levels": [                    {                        "stock": 300                    }                ]            }        ]    },    {        "id": 49819000,        "variants": [            {                "id": 133862417,                "price": 222.03            },            {                "id": 133862416,                "inventory_levels": [                    {                        "stock": 100                    }                ]            }        ]    }]
```

**Important:** This example applies to stores that don't use multiple warehouses. If the store uses multiple warehouses, it must specify the stock to be assigned to each one (`location_id`). Example [here](https://tiendanube.github.io/api-documentation/guides/multi-inventory/products#patch-productsstock-price).

| Parameter | Mandatory | Description |
| --- | --- | --- |
| Main array (no key) | Yes  | Array of products |
| id | Yes  | Product id |
| variants | Yes | Array of variants |
| id | Yes  | Variant id |
| price | No  | Variant price |
| inventory\_levels | No  | List with stock levels |
| stock | No  | Stock quantity |

Stock field is inside each `inventory_levels` array element to indicate the stock in accordance with the Multi CD project.

`HTTP/1.1 200 OK`

```
[    {        "id": 53786462,        "variants": [            {                "id": 147085180,                "success": true            }        ]    },    {        "id": 49819000,        "variants": [            {                "id": 133862417,                "success": true            },            {                "id": 133862416,                "success": true            }        ]    }]
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "Validation error",    "price": [        "The price must be a number."    ]}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "Validation error",    "stock": [        "The stock must be at least 0."    ]}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "Too many variants sent for update"}
```

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**How to set up unlimited/infinite stock?** **Why is the stock\_management property not being modified?** **How many attributes and variants can a product have?**