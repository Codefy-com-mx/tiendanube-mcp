An order is created when a customer completes the checkout process. Orders also can be created through the API.

#### Table of Contents[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#table-of-contents "Direct link to Table of Contents")

> [Get all orders](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders)
> 
> [Get an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersid)
> 
> [Create an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders)
> 
> [Update an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-ordersid)
> 
> [Get an order value history](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidhistoryvalues)
> 
> [Get an order edition history](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidhistoryeditions)
> 
> [Get order subscriptions](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidsubscriptions)
> 
> [Pay an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#pay-an-order)
> 
> [Close an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidclose)
> 
> [Reopen an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidopen)
> 
> [Cancel an order](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidcancel)
> 
> [Create an invoice](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#create-an-invoice)
> 
> [Read an invoice](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#read-an-invoice)

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation |
| --- | --- |
| id | The unique numeric identifier for the Order. It's different from `number` |
| token | Specifies the location of the Order |
| store\_id | ID of the store the order belongs to |
| contact\_email | Email of the buyer |
| contact\_phone | Phone of the buyer |
| contact\_identification | Identification of the buyer (CPF/CNPJ/DNI/CUIT) |
| number | Unique numberc identifier for an Order used by the shop owner and customers. It's sequential and starts at 100 |
| completed\_at | Object containing information about the date when the Order was created. It's the same date than the created\_at date, but in a different data type. |
| attributes | A list with the custom attributes for this order |
| customer | [Customer](https://tiendanube.github.io/api-documentation/resources/customer) that purchased this Order. Only given if the 'read\_customers' scope is set for the app |
| products | List of the products purchased by the `customer`. Contents are explained below and values hold are the ones corresponding to the time the products were purchased |
| note | Customer's note about the order |
| owner\_note | Store owner's note about the order |
| coupon | List of coupons applied to the order |
| discount | Total value of the discount applied to the price of the order |
| subtotal | Price of the order before shipping |
| total | Total price of the order including shipping and discounts |
| total\_usd | Total price of the order in US dollars |
| currency | The total spent's currency in [ISO 4217 format](http://en.wikipedia.org/wiki/ISO_4217) |
| language | Order's language used by the customer during the checkout process |
| gateway | ID of the payment provider that processed the order payment transaction. |
| gateway\_id | \[Read-only\] External transaction ID used by the payment provider. |
| gateway\_name | \[Read-only\] Name of the payment provider of the order. |
| gateway\_link | URL of the transaction details page (in the payments app's website). Can be null if the payment app didn't set this URL, or if it's a custom payment method. |
| shipping\_address | The customer's shipping address where the order will be shipped |
| billing\_name | Billing name for the order |
| billing\_phone | Billing phone for the order |
| billing\_address | Billing address for the order |
| billing\_number | Billing number for the order |
| billing\_floor | Billing floor for the order |
| billing\_locality | Billing locality for the order |
| billing\_zipcode | Billing zipcode for the order |
| billing\_city | Billing city for the order |
| billing\_province | Billing province for the order |
| billing\_country | Billing country code for the order |
| billing\_customer\_type | Billing customer type (person or company) |
| billing\_business\_name | Billing business name |
| billing\_fiscal\_regime | The ([Billing Fiscal Regime](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#billing-fiscal-regime)) is only used in es\_MX, and the default is 601. For other countries, the default is null |
| billing\_invoice\_use | The ([Billing Invoice Use](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#billing-invoice-use)) is only used in es\_MX, and the default is G01. For other countries, the default is null |
| billing\_trade\_name | Billing trade name |
| billing\_state\_registration | Billing state registration |
| billing\_document\_type | Billing document type |
| extra | A JSON object containing custom information. Can be set via the API or through custom form fields of name "extra\[key\]" on the cart's checkout form in the storefront |
| storefront | Origin of the order. Possible values are "store" (order created in the storefront), "meli" (order imported from Mercado Libre), "api" (order created via API), "form" (order created in the admin panel with the draft orders feature) or "pos" (order created via point of sale app) |
| checkout\_enabled | Deprecated |
| weight | Order's total weight, in kilograms |
| cancelled\_at | Date when the order was cancelled in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| closed\_at | Date when the order was closed (archived) in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| read\_at | Date when the order was marked as read in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| status | Order's status. Possible values are "open", "closed" or "cancelled" |
| payment\_status | Order's payment status. Possible values are "authorized", "pending", "paid", "partially\_paid", "abandoned", "refunded", "partially\_refunded" or "voided" |
| shipping\_status | Order's shipping status. Possible values are "unpacked", "shipped" (means "fulfilled"), "unshipped" (means "unfulfilled", only possible in Orders with shipments and not in Digital Orders), "delivered", "partially\_packed" (means at least 1 Fulfillment Order was packed), "partially\_fulfilled" (means at least 1 Fulfillment Order was shipped). |
| payment\_details | A JSON object containing payment details. |
| paid\_at | Date when the order was paid in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601). |
| cancel\_reason | Reason why the store owner cancelled an Order. Possible values are "customer", "fraud", "inventory" or "other" |
| created\_at | Date when the Order was created in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601). It's the same date than the completed\_at date, but in a different data type. |
| updated\_at | Date when the Order was last updated in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| client\_details | Customer details for analytics. |
| total\_paid\_by\_customer\_including\_fees | The total paid by the customer based on the reported amount from the Transactions with the Customer fees included if any correspond. |
| app\_id | If the order was created via API by an app, ID of the app. Otherwise, null. |
| same\_billing\_and\_shipping\_address | "true" if billing address and shipping address are the same, "false" otherwise. |
| total\_paid\_by\_customer | The total amount of money that the Customer paid in the Order. **Important**: this might not be the same as the Order's total (such as in unpaid Orders or partially paid Orders). Also, the Order's transaction might also not match this value, since some Orders (ie. Orders that were created via Draft Orders) don't have transactions associated to them, as well as Edit Orders allowing to modify the Order's price without affecting associated Transaction. Finally, this price can increase or decrease depending on Order editions. See [order/edited Webhook](https://tiendanube.github.io/api-documentation/resources/webhook) if you would like to be notified of these changes. |
| fulfillments | A list of the Fulfillment Orders of the Order. See [Fulfillment Order Resource Page](https://tiendanube.github.io/api-documentation/resources/fulfillment-order) for reference of the contents. Refer to the `aggregates` parameter for more information. |
| is\_subscription | Boolean indicating if the order is a subscription order |
| is\_subscription\_initial | Boolean indicating if the order is the initial order of a subscription (first purchase). `false` for recurrence orders and non-subscription orders |

The `products` field has the following contents:

| Property | Explanation |
| --- | --- |
| id | ID of the line item. A value that uniquely identifies this product within the order. |
| product\_id | [Product](https://tiendanube.github.io/api-documentation/resources/product) purchased |
| variant\_id | [Product Variant](https://tiendanube.github.io/api-documentation/resources/product-variant) purchased |
| name | Product's name at the time of purchase |
| price | Product's price at the time of purchase |
| quantity | Quantity purchased |
| weight | Product's weight at the time of purchase |
| width | Product's width at the time of purchase |
| height | Product's height at the time of purchase |
| depth | Product's depth at the time of purchase |
| free\_shipping | Indicates if the product has free shipping or not. |
| catalog\_kit\_id | The kit id of the product in the catalog, if the product is part of a kit |
| order\_kit\_id | An instance of the added kit persisted in the order, if the product is part of a kit |
| kit | Serialized kit information, if the product is part of a kit |
| issues | Possibles issues that can happen to an order. Contents are explained below. |
| properties | An array with values of custom fields |

> **Important:** In our API, it's possible to obtain the same `product_id` and `variant_id` in different line items.  
> Why can this happen? For example, an order may have two units of the same variant, but each with different custom fields.  
> That's why 2 units (`quantity`) are not sent in the same line item but are instead sent as separate units with different values in the `properties` array.

> The `products.id`has an incremental value, meaning it exceeds the limits of an `int32` type and can require support for larger data types, such as `int64`. It's crucial for the backend to accommodate fields with extended ranges to avoid exceptions that could disrupt the correct import of information.

The `issues` field has the following content:

| Property | Value Explanation | Issue explanation |
| --- | --- | --- |
| unclaimed\_stock | Number of items claimed by the user with insufficient stock | Can happens due to a race condition while the user is trying to pay the order and another user buys the same item. |

#### Fulfillment Orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillment-orders "Direct link to Fulfillment Orders")

The `fulfillment_orders` field is a list of Fulfillment Orders as defined [here](https://tiendanube.github.io/api-documentation/resources/fulfillment-order#fulfillmentorder).

By default, only the Fulfillment Order IDs are returned. To get the details it's possible to use [Fulfillment Order API](https://tiendanube.github.io/api-documentation/resources/fulfillment-order#fulfillmentorder) or add the parameter `aggregates=fulfillment_orders` to include the full details in the response. See [examples below](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersaggregatesfulfillment_orders).

#### Payment Details[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-details "Direct link to Payment Details")

The `payment_details` field has the following contents:

| Property | Type | Explanation |
| --- | --- | --- |
| method | String | Payment method selected. |
| credit\_card\_company | String | Credit card company. |
| installments | Integer | Quantity of installments. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders "Direct link to GET /orders")

Receive a list of all Orders. Make sure to check out our recommendations on best practices for retrieving orders information in our [FAQ section](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq) below.

> **Important:**
> 
> -   Our API returns up to 30 results by default. To retrieve a larger number of results, use the [pagination parameters](https://tiendanube.github.io/api-documentation/intro#pagination) (`page` and `per_page`).
> -   Query results are limited to 10.000 items. If your query exceeds this limit, the request will return the corresponding error. Consider filtering your query using the available parameters below to reduce the number of results, such as completion date ranges.

| Parameter | Explanation |
| --- | --- |
| since\_id | Restrict results to after the specified ID |
| status | Show Orders with a given state. Possible values are "any" (default), "open", "closed" or "cancelled" |
| channels | Restrict results to the specified sales channel. Possible values are "form" (draft order created via admin or API), "store" (order created in the storefront), "api" (order created via API - doesn't include draft orders), "meli" (order imported from Mercado Libre) or "pos" (order created via point of sale app) |
| payment\_status | Show Orders with a given payment state. Possible values are "any" (default), "pending", "authorized", "paid", "abandoned", "refunded" or "voided" |
| shipping\_status | Show Orders with a given shipping state. Possible values are "any" (default), "unpacked", "unfulfilled" (means "unshipped") or "fulfilled" (means "shipped") |
| created\_at\_min | Show Orders created after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| created\_at\_max | Show Orders created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_min | Show Orders last updated after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_max | Show Orders last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| total\_min | Show Orders with total value bigger or equals than the specified value |
| total\_max | Show Orders with total value lower or equals than the specified value |
| customer\_ids | Restrict results to the specified customer IDs (comma-separated) |
| page | Page to show |
| per\_page | Amount of results |
| fields | Comma-separated list of fields to include in the response |
| q | Search Orders by the given number; or containing the given text in the customer name or email |
| app\_id | Show orders created by a given app |
| payment\_methods | Show orders with a given payment method |
| payment\_provider | Show orders with a given payment provider |
| aggregates | Two possible values: `fulfillment_orders` and `custom_fields`. `fulfillment_orders` enables an array called `fulfillments` that displays partial information of the Fulfillment Order. If you want to get the complete information of the Fulfillment Order, you can use the [Fulfillment Order Resource](https://tiendanube.github.io/api-documentation/resources/fulfillment-order) or fetch the single Order with the corresponding `aggregates` value. `custom_fields` enables an array called `custom_fields` that displays each Order's full [Custom Fields](https://tiendanube.github.io/api-documentation/resources/orders/custom-fields). This is the same as fetching each Order's Custom Fields from the API with [`GET /orders/{id}/custom-fields`](https://tiendanube.github.io/api-documentation/resources/orders/custom-fields#get-ordersidcustom-fields) |

#### GET /orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders-1 "Direct link to GET /orders")

`HTTP/1.1 200 OK`

```
[    {        "id": 871254203,        "token": "b872a1befbcde5aaf0517ecbcc910f5dc005350e",        "store_id": "817495",        "contact_email": "buyer@tiendanube.com",        "contact_name": "Maria Silva",        "contact_phone": "+551533276436",        "contact_identification": "75839566500",        "billing_name": "Maria",        "billing_phone": "+551533276436",        "billing_address": "Rua Doutor Azevedo Sampaio",        "billing_number": "50",        "billing_floor": "",        "billing_locality": "Centro",        "billing_zipcode": "18010220",        "billing_city": "Sorocaba",        "billing_province": "São Paulo",        "billing_country": "BR",        "coupon": [],        "promotional_discount": {            "id": null,            "store_id": 817495,            "order_id": "871254203",            "created_at": "2022-11-15T19:37:08+0000",            "total_discount_amount": "0.00",            "contents": [],            "promotions_applied": []        },        "subtotal": "6000.00",        "discount": "600.00",        "discount_coupon": "0.00",        "discount_gateway": "600.00",        "total": "5400.00",        "total_usd": "40.79",        "checkout_enabled": true,        "weight": "0.000",        "currency": "ARS",        "language": "es",        "gateway": "offline",        "gateway_id": null,        "gateway_name": "Transferencia Bancaria",        "extra": {},        "storefront": "store",        "note": "",        "created_at": "2022-11-15T19:36:59+0000",        "updated_at": "2022-11-15T19:37:08+0000",        "completed_at": {            "date": "2022-11-15 19:36:59.000000",            "timezone_type": 3,            "timezone": "UTC"        },        "payment_details": {            "method": "custom",            "credit_card_company": null,            "installments": 1        },        "same_billing_and_shipping_address": false,        "attributes": [],        "customer": {            "id": 105799009,            "name": "Maria Silva",            "email": "buyer@tiendanube.com",            "identification": "75839566500",            "phone": "+551533276436",            "note": null,            "default_address": {                "address": "Evergreen Terrace",                "city": "New York",                "country": "US",                "created_at": "2022-11-15T19:36:59+0000",                "default": true,                "floor": "Apartment 8",                "id": 80189931,                "locality": "Bronx",                "name": "John Doe",                "number": "742",                "phone": "john.doe@example.com",                "province": "New York",                "updated_at": "2022-11-15T19:36:59+0000",                "zipcode": "10451"            },            "addresses": [                {                    "address": "Evergreen Terrace",                    "city": "New York",                    "country": "US",                    "created_at": "2022-11-15T19:36:59+0000",                    "default": true,                    "floor": "Apartment 8",                    "id": 80189931,                    "locality": "Bronx",                    "name": "John Doe",                    "number": "742",                    "phone": "john.doe@example.com",                    "province": "New York",                    "updated_at": "2022-11-15T19:36:59+0000",                    "zipcode": "10451"                }            ],            "billing_name": "Maria",            "billing_phone": "+551533276436",            "billing_address": "Rua Doutor Azevedo Sampaio",            "billing_number": "50",            "billing_floor": "",            "billing_locality": "Centro",            "billing_zipcode": "18010220",            "billing_city": "Sorocaba",            "billing_province": "São Paulo",            "billing_country": "BR",            "extra": {},            "total_spent": "27.00",            "total_spent_currency": "USD",            "last_order_id": 871254203,            "active": false,            "first_interaction": "2022-11-15T19:36:59+0000",            "created_at": "2022-11-15T19:36:59+0000",            "updated_at": "2022-11-15T19:36:59+0000"        },        "products": [            {                "id": 1069053829,                "depth": "0.00",                "height": "0.00",                "name": "Mesa de Roble",                "price": "6000.00",                "compare_at_price": "37.77",                "product_id": 111334785,                "image": {                    "id": 277896749,                    "product_id": 111334785,                    "src": "https://d2r9epyceweg5n.cloudfront.net/stores/817/495/products/pexels-olya-prutskova-89764951-74e3f47763f1aec3ec16448436206687-1024-1024.jpg",                    "position": 1,                    "alt": [],                    "created_at": "2022-02-14T13:00:03+0000",                    "updated_at": "2022-10-28T21:52:37+0000"                },                "quantity": "1",                "free_shipping": false,                "weight": "0.00",                "width": "0.00",                "variant_id": "426215948",                "variant_values": [],                "properties": [],                "sku": "12389012348124801234890",                "barcode": null            },            {                "id": 3127510877,                "depth": "0.00",                "height": "0.00",                "name": "PROD B",                "name_without_variants": null,                "price": "198.00",                "compare_at_price": "202.00",                "product_id": 332537484,                "image": {                    "id": 1152270560,                    "product_id": 332537484,                    "src": "https://example.com/stores/007/443/152/products/b.png",                    "position": 2,                    "alt": [],                    "height": 225,                    "width": 225,                    "thumbnails_generated": 2,                    "created_at": "2026-03-27T12:21:57+0000",                    "updated_at": "2026-03-27T12:22:21+0000"                },                "quantity": 1,                "free_shipping": false,                "weight": "0.000",                "width": "0.00",                "variant_id": 1479416655,                "variant_values": [],                "properties": [],                "sku": null,                "barcode": null,                "has_promotional_price": true,                "promotions": {                    "percentage_off": 1                },                "catalog_kit_id": 332538459,                "order_kit_id": 142,                "kit": {                    "id": 332538459,                    "variant_id": 1479421204,                    "name": "Kit descuento 1%",                    "image": {                        "id": 1152273818,                        "product_id": 332538459,                        "src": "https://example.com/stores/007/443/152/products/el-chalten.jpg",                        "position": 2,                        "alt": [],                        "height": 813,                        "width": 1361,                        "thumbnails_generated": 2,                        "created_at": "2026-03-27T12:22:59+0000",                        "updated_at": "2026-03-27T12:23:26+0000"                    },                    "price": "200.00"                },                "cost": null            },            {                "id": 3127510878,                "depth": "0.00",                "height": "0.00",                "name": "PROD C",                "name_without_variants": null,                "price": "2.00",                "compare_at_price": "5.00",                "product_id": 332537485,                "image": {                    "id": 1152270561,                    "product_id": 332537485,                    "src": "https://example.com/stores/007/443/152/products/c.png",                    "position": 2,                    "alt": [],                    "height": 225,                    "width": 225,                    "thumbnails_generated": 2,                    "created_at": "2026-03-27T12:21:57+0000",                    "updated_at": "2026-03-27T12:22:21+0000"                },                "quantity": 1,                "free_shipping": false,                "weight": "0.000",                "width": "0.00",                "variant_id": 1479416656,                "variant_values": [],                "properties": [],                "sku": null,                "barcode": null,                "has_promotional_price": true,                "promotions": {                    "percentage_off": 1                },                "catalog_kit_id": 332538459,                "order_kit_id": 142,                "kit": {                    "id": 332538459,                    "variant_id": 1479421204,                    "name": "Kit descuento 1%",                    "image": {                        "id": 1152273818,                        "product_id": 332538459,                        "src": "https://example.com/stores/007/443/152/products/el-chalten.jpg",                        "position": 2,                        "alt": [],                        "height": 813,                        "width": 1361,                        "thumbnails_generated": 2,                        "created_at": "2026-03-27T12:22:59+0000",                        "updated_at": "2026-03-27T12:23:26+0000"                    },                    "price": "200.00"                },                "cost": null            }        ],        "number": 306,        "cancel_reason": null,        "owner_note": null,        "cancelled_at": null,        "closed_at": null,        "read_at": null,        "status": "open",        "payment_status": "pending",        "gateway_link": null,        "shipping_address": {            "address": "Evergreen Terrace",            "city": "New York",            "country": "US",            "created_at": "2022-11-15T19:23:59+0000",            "default": false,            "floor": "Apartment 8",            "id": 0,            "locality": "Bronx",            "name": "John Doe",            "number": "742",            "phone": "john.doe@example.com",            "province": "New York",            "updated_at": "2022-11-15T19:37:08+0000",            "zipcode": "10451",            "customs": null        },        "shipping_status": "unpacked",        "paid_at": null,        "client_details": {            "browser_ip": "181.16.41.4",            "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"        },        "app_id": null,        "is_subscription": false,        "is_subscription_initial": false    }]
```

#### GET /orders?aggregates=fulfillment\_orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersaggregatesfulfillment_orders "Direct link to GET /orders?aggregates=fulfillment_orders")

`HTTP/1.1 200 OK`

```
[    {        "id": 871254203,        "token": "b872a1befbcde5aaf0517ecbcc910f5dc005350e",        "store_id": "817495",        ... // All fields from GET /orders are included in the response        "fulfillment_orders": [                    {            "id": "01BX5ZZKBKACTAV9WEVGEMMVRZ",            "number": "123456",            "total_quantity": 12,            "total_weight": 12.12,            "total_price": {               "value": 123.45,               "currency": "BRL",            },            "assigned_location": {               "id": "123e4567-e89b-12d3-a456-426614174000",               "name": "Location name",               "address": {                  "zipcode": "12910802",                  "street": "Some Street",                  "number": "100",                  "floor": "Some Floor",                  "locality": "Some Locality",                  "city": "Some City",                  "reference": "Some Reference",                  "between_streets": "Some Between Streets",                  "province": {                     "code": "SP",                     "name": "São Paulo"                   },                   "region": {                      "code": "SE",                      "name": "Sudeste"                   },                   "country": {                      "code": "BR",                      "name": "Brasil"                   }               }            },            "line_items": [               {                  "id": "12345",                  "quantity": 1,                  "order_line_item_id": "12345678",                  "created_at": "2022-11-24T10:20:19+00:00",                  "updated_at": "2022-11-24T10:20:19+00:00"                         }            ],            "recipient": {               "name": "Recipient name",               "phone": "11988864311",               "identifier": "11223344B",            },            "shipping": {               "type": "pickup|ship",               "carrier": {                  "name": "Some Carrier Name",                  "id": "12345"               },               "option": {                   "name": "Some Option Name",                   "code": "some-option-code",                   "reference": "some-option-ref"               },               "merchant_cost": {                   "value": 123.14,                   "currency": "BRL"               },               "consumer_cost": {                   "value": 123.14,                   "currency": "BRL"               },               "min_delivery_date": "2022-11-24T10:20:19+00:00" || null,               "max_delivery_date": "2022-11-25T10:20:19+00:00" || null,               "pickup_details": {                   "id": "pickup-option-id",                   "name": "Some option pickup detail name",                   "address": {                      "zipcode": "12910802",                      "street": "Some Street",                      "number": "100",                      "floor": "Some Floor",                      "locality": "Some Locality",                      "city": "Some City",                      "reference": "Some Reference",                      "between_streets": "Some Between Streets",                      "province": {                          "name": "São Paulo",                          "code": "SP"                       },                       "region": {                          "name": "Sudeste",                          "code": "SE"                       },                       "country": {                          "name": "Brasil",                          "code": "BR"                       }                   }               }            },            "destination": {               "zipcode": "12910802",               "street": "Some Street",               "number": "100",               "floor": "Some Floor",               "locality": "Some Locality",               "city": "Some City",               "reference": "Some Reference",               "between_streets": "Some Between Streets",               "province": {                   "name": "São Paulo",                   "code": "SP"                },                "region": {                   "name": "Sudeste",                   "code": "SE"                },                "country": {                   "name": "Brasil",                   "code": "BR"                }            },            "status": "PENDING",            "tracking_info": {               "url": null,               "code": null            },            "fulfilled_at": null,            "created_at": "2022-11-24T10:20:19+00:00",            "updated_at": "2022-11-24T10:20:19+00:00"        }]    }]
```

#### GET /orders?aggregates=custom\_fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersaggregatescustom_fields "Direct link to GET /orders?aggregates=custom_fields")

`HTTP/1.1 200 OK`

```
[    {        "id": 871254203,        "token": "b872a1befbcde5aaf0517ecbcc910f5dc005350e",        "store_id": "817495",        ... // All fields from GET /orders are included in the response        "custom_fields": [            {                "id": "d7b4a1f8-3c9d-4b62-a1e5-72d8c9f3e4b0",                "owner_resource": "order",                "source": "admin",                "value_type": "text_list",                "key": "send-as-anonymous",                "name": "Send as anonymous",                "description": "",                "read_only": false,                "value": "Yes"            },            {                "id": "f2a8c3d1-7b4e-419a-8d62-35c7e9f0b2a4",                "owner_resource": "order",                "source": "admin",                "value_type": "date",                "key": "date-of-delivery",                "name": "Date of delivery",                "description": "",                "read_only": false,                "value": "2026-02-18"            }        ]    }]
```

#### GET /orders?fields=id,number,price\_usd[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersfieldsidnumberprice_usd "Direct link to GET /orders?fields=id,number,price_usd")

`HTTP/1.1 200 OK`

```
[  {    "id": 450789469,    "number": "101",    "price_usd": "58.00"  }]
```

### GET /orders/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersid "Direct link to GET /orders/{id}")

Receive a single Order by its id.

If you would like to retrieve a Cart instead, refer to the [Cart resource](https://tiendanube.github.io/api-documentation/resources/cart).

| Parameter | Explanation |
| --- | --- |
| fields | Comma-separated list of fields to include in the response |
| aggregates | One possible value: fulfillment\_orders. Enables an array called `fulfillments` that displays the information of the Fulfillment Order. |

#### GET /orders/871254203[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders871254203 "Direct link to GET /orders/871254203")

`HTTP/1.1 200 OK`

```
{    "id": 871254203,    "token": "b872a1befbcde5aaf0517ecbcc910f5dc005350e",    "store_id": "817495",    "contact_email": "buyer@tiendanube.com",    "contact_name": "Maria Silva",    "contact_phone": "+551533276436",    "contact_identification": "75839566500",    "billing_name": "Maria",    "billing_phone": "+551533276436",    "billing_address": "Rua Doutor Azevedo Sampaio",    "billing_number": "50",    "billing_floor": "",    "billing_locality": "Centro",    "billing_zipcode": "18010220",    "billing_city": "Sorocaba",    "billing_province": "São Paulo",    "billing_country": "BR",    "billing_customer_type": "company",    "billing_business_name": "Nuvem Shop LTDA",    "billing_trade_name": "Nuvem Shop",    "billing_state_registration": "388108598269",    "billing_fiscal_regime": "601",    "billing_invoice_use": "G01",    "billing_document_type": "cnpj",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": "871254203",        "created_at": "2022-11-15T19:37:08+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "6000.00",    "discount": "600.00",    "discount_coupon": "0.00",    "discount_gateway": "600.00",    "total": "5400.00",    "total_usd": "40.79",    "checkout_enabled": true,    "weight": "0.000",    "currency": "ARS",    "language": "es",    "gateway": "offline",    "gateway_id": null,    "gateway_name": "Transferencia Bancaria",    "extra": {},    "storefront": "store",    "note": "",    "created_at": "2022-11-15T19:36:59+0000",    "updated_at": "2022-11-15T19:37:08+0000",    "completed_at": {        "date": "2022-11-15 19:36:59.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": "custom",        "credit_card_company": null,        "installments": 1    },    "same_billing_and_shipping_address": false,    "attributes": [],    "customer": {        "id": 105799009,        "name": "Maria Silva",        "email": "buyer@tiendanube.com",        "identification": "75839566500",        "phone": "+551533276436",        "note": null,        "default_address": {            "address": "Evergreen Terrace",            "city": "New York",            "country": "US",            "created_at": "2022-11-15T19:36:59+0000",            "default": true,            "floor": "Apartment 8",            "id": 80189931,            "locality": "Bronx",            "name": "John Doe",            "number": "742",            "phone": "john.doe@example.com",            "province": "New York",            "updated_at": "2022-11-15T19:36:59+0000",            "zipcode": "10451"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "New York",                "country": "US",                "created_at": "2022-11-15T19:36:59+0000",                "default": true,                "floor": "Apartment 8",                "id": 80189931,                "locality": "Bronx",                "name": "John Doe",                "number": "742",                "phone": "john.doe@example.com",                "province": "New York",                "updated_at": "2022-11-15T19:36:59+0000",                "zipcode": "10451"            }        ],        "billing_name": "Maria",        "billing_phone": "+551533276436",        "billing_address": "Rua Doutor Azevedo Sampaio",        "billing_number": "50",        "billing_floor": "",        "billing_locality": "Centro",        "billing_zipcode": "18010220",        "billing_city": "Sorocaba",        "billing_province": "São Paulo",        "billing_country": "BR",        "extra": {},        "total_spent": "27.00",        "total_spent_currency": "USD",        "last_order_id": 871254203,        "active": false,        "first_interaction": "2022-11-15T19:36:59+0000",        "created_at": "2022-11-15T19:36:59+0000",        "updated_at": "2022-11-15T19:36:59+0000"    },    "products": [        {            "id": 1069053829,            "depth": "0.00",            "height": "0.00",            "name": "Mesa de Roble",            "price": "6000.00",            "compare_at_price": "37.77",            "product_id": 111334785,            "image": {                "id": 277896749,                "product_id": 111334785,                "src": "https://d2r9epyceweg5n.cloudfront.net/stores/817/495/products/pexels-olya-prutskova-89764951-74e3f47763f1aec3ec16448436206687-1024-1024.jpg",                "position": 1,                "alt": [],                "created_at": "2022-02-14T13:00:03+0000",                "updated_at": "2022-10-28T21:52:37+0000"            },            "quantity": "1",            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": "426215948",            "variant_values": [],            "properties": [],            "sku": "12389012348124801234890",            "barcode": null        }    ],    "number": 306,    "cancel_reason": null,    "owner_note": null,    "cancelled_at": null,    "closed_at": null,    "read_at": null,    "status": "open",    "payment_status": "pending",    "gateway_link": null,    "shipping_address": {        "address": "Evergreen Terrace",        "city": "New York",        "country": "US",        "created_at": "2022-11-15T19:23:59+0000",        "default": false,        "floor": "Apartment 8",        "id": 0,        "locality": "Bronx",        "name": "John Doe",        "number": "742",        "phone": "john.doe@example.com",        "province": "New York",        "updated_at": "2022-11-15T19:37:08+0000",        "zipcode": "10451",        "customs": null    },    "shipping_status": "unpacked",    "fulfillments": [],    "paid_at": null,    "client_details": {        "browser_ip": "181.16.41.4",        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"    },    "app_id": null,    "is_subscription": false,    "is_subscription_initial": false}
```

### GET /orders/{id}/history/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidhistoryvalues "Direct link to GET /orders/{id}/history/values")

Receive a list of all Order's total value alterations.

Actions that may alter an Order's total are either editing or refunding an Order. Each modification carries the payment status associated to it, and while it may be related to a Transaction resource it doesn't require one (ie. Draft Orders will also generate this events even though they don't have a Transaction associated to them).

**Important**: you will see we sometimes refer to these modifications as "transactions". They are not to be confused with the [Transaction resource](https://tiendanube.github.io/api-documentation/resources/transaction) from the Payments Domain, since these rely on a model that is not required for an Order to exist. While these internal transactions **might** trigger the creation of a new Transaction and therefore have a connection to it, they don't require it. **For now, we are not creating Transaction resources beyond the initial one an Order might have when it is created**.

| Parameter | Explanation |
| --- | --- |
| status | The payment status of the Order's value transaction. Possible values are "PENDING", "CANCELLED" or "PAID". Note that if the transaction was not paid and it changes again (ie. an Order with a Pending payment is edited) then the corresponding entry will be marked as "CANCELLED", so "PENDING" is only possible for the most recent value in the history. Also, note that "PAID" in this context might mean that either the Customer or the Merchant paid it, depending of if the `total_paid_diff` is positive (Customer paid it) or negative (Merchat paid it, it is a partial or full refund). |
| total\_delta | The difference between the previous Order value and the new one. |
| total\_paid\_diff | The amount the Customer / Merchant paid in that Order's transaction state. Note that this value does not have a 1 to 1 correlation to `total_delta`, it can be higher or lower depending on the aggregate of previous transactions that were never paid. This value is only non-zero if the `status` is "PAID". |
| gateway\_method | The gateway / payment method the Customer / Merchant used to pay or refund the transaction. Possible values are "credit\_card", "debit\_card", "cash", "wire\_transfer", "pix" or "other". |
| gateway\_name | When "other" value is given for `gateway_method`, this field includes a human-readable custom name for the gateway. Otherwise, null is returned. |
| closed\_at | Datetime at which the transaciton transitioned to a final state (from "PENDING" to another state). |
| happened\_at | Datetime at which the Order's total modification happened. |

`HTTP/1.1 200 OK`

```
[    {        "status": "CANCELLED",        "total_delta": 3750,        "total_paid_diff": 0,        "gateway_method": null,        "gateway_name": null,        "closed_at": "2025-04-08T18:19:40+00:00",        "happened_at": "2025-04-08T18:19:15+00:00"    },    {        "status": "PAID",        "total_delta": 3750,        "total_paid_diff": 7500,        "gateway_method": "cash",        "gateway_name": null,        "closed_at": "2025-04-08T18:24:15+0000",        "happened_at": "2025-04-08T18:19:40+00:00"    }]
```

### GET /orders/{id}/history/editions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidhistoryeditions "Direct link to GET /orders/{id}/history/editions")

Receive a list of all Order's editions.

This is intended as a small change log for the changes that an edition made. Actual changed information will be overwritten in the original Orders' fields.

| Parameter | Explanation |
| --- | --- |
| product\_changes | Contains information about the changes made to the products in the edition. |
| shipping\_costs | Contains information about the changes in Shipping costs derived from the products changes. |
| transaction\_information | Contains information about the related transaction that the edition generated in the Order. See [here](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidhistoryvalues) for object contents reference. |
| reason | Human-readable text detailing why the edition was made, typically filled out by the Merchant. |
| happened\_at | Datetime at which the Order's edition happened. |

### Objects[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#objects "Direct link to Objects")

#### Product Change[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#product-change "Direct link to Product Change")

| Value | Description |
| --- | --- |
| type | "ADD" if the product was added, "REMOVED" if it was removed from the Order. This is only the action, for the quantity added or removed see the quantity properties. |
| modified\_stock | Indicates if the stock was modified or not. |
| previous\_quantity | The line item quantity before the edition. |
| new\_quantity | The line item quantity after the edition. |
| product\_name | The name of the line item that was modified. |

#### Shipping Cost[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-cost "Direct link to Shipping Cost")

| Value | Description |
| --- | --- |
| fulfillment\_number | The number of the Fulfillment Order related to the shipping cost. |
| previous\_merchant\_cost | The previous Shipping cost for the Merchant. |
| new\_merchant\_cost | The new Shipping cost for the Merchant. |
| previous\_consumer\_cost | The previous Shipping cost for the Customer. |
| new\_consumer\_cost | The new Shipping cost for the Customer. |

`HTTP/1.1 200 OK`

```
[    {        "product_changes": [            {                "type": "ADD",                "modified_stock": true,                "previous_quantity": 0,                "new_quantity": 1,                "product_name": "Pantalon de cuero (Beige)"            }        ],        "shipping_costs": [            {                "fulfillment_number": 1,                "previous_merchant_cost": 200,                "new_merchant_cost": 500,                "previous_consumer_cost": 200,                "new_consumer_cost": 500            }        ],        "transaction_information": {            "status": "CANCELLED",            "total_delta": 3750,            "total_paid_diff": 0,            "gateway_method": null,            "gateway_name": null,            "closed_at": null,            "happened_at": "2025-04-08T18:19:15+00:00"        },        "reason": null,        "happened_at": "2025-04-08T18:19:15+00:00"    },    {        "product_changes": [            {                "type": "ADD",                "modified_stock": true,                "previous_quantity": 1,                "new_quantity": 2,                "product_name": "Pantalon de cuero (Beige)"            }        ],        "shipping_costs": [            {                "fulfillment_number": 1,                "previous_merchant_cost": 500,                "new_merchant_cost": 500,                "previous_consumer_cost": 500,                "new_consumer_cost": 500            }        ],        "transaction_information": {            "status": "PAID",            "total_delta": 3750,            "total_paid_diff": 7500,            "gateway_method": "cash",            "gateway_name": null,            "closed_at": "2025-04-08T18:24:15+0000",            "happened_at": "2025-04-08T18:19:40+00:00"        },        "reason": null,        "happened_at": "2025-04-08T18:19:40+00:00"    }]
```

### GET /orders/{id}/subscriptions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidsubscriptions "Direct link to GET /orders/{id}/subscriptions")

Receive the subscriptions associated with a given Order. Returns the subscription details including frequency, discount, and associated products.

`HTTP/1.1 200 OK`

```
{    "items": [        {            "id": "sub_abc123",            "store_id": 817495,            "metaplan_id": "mp_xyz",            "metaplan_name": "Monthly Coffee Plan",            "customer_id": 105799009,            "email": "buyer@tiendanube.com",            "status": "active",            "initial_order_id": 871254203,            "initial_date": "2022-11-15T19:36:59+00:00",            "products": [                {                    "product_id": 111334785,                    "variant_id": 426215948,                    "quantity": 1                }            ],            "subscription_option": {                "id": "opt_001",                "frequency_type": "months",                "frequency_param": 1,                "discount_percentage": 15            }        }    ]}
```

The `items` field is an array of subscription objects with the following properties:

| Property | Type | Explanation |
| --- | --- | --- |
| id | String | Unique identifier of the subscription |
| store\_id | Integer | ID of the store |
| metaplan\_id | String | ID of the subscription metaplan |
| metaplan\_name | String | Name of the subscription metaplan |
| customer\_id | Integer | ID of the customer |
| email | String | Email of the subscriber |
| status | String | Status of the subscription (e.g., "active", "cancelled") |
| initial\_order\_id | Integer | ID of the first order that originated this subscription |
| initial\_date | String | Date when the subscription was created in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| products | Array | List of products included in the subscription |
| subscription\_option | Object | The subscription option chosen by the customer (frequency and discount) |

The `products` items have the following properties:

| Property | Type | Explanation |
| --- | --- | --- |
| product\_id | Integer | ID of the subscribed product |
| variant\_id | Integer | ID of the subscribed product variant |
| quantity | Integer | Quantity of the product |

The `subscription_option` object has the following properties:

| Property | Type | Explanation |
| --- | --- | --- |
| id | String | Unique identifier of the subscription option |
| frequency\_type | String | Type of frequency (e.g., "months", "weeks") |
| frequency\_param | Integer | Frequency value (e.g., 1 for every month, 2 for every 2 weeks) |
| discount\_percentage | Integer | Discount percentage applied to the subscription |

### POST /orders/[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders "Direct link to POST /orders/")

Create an Order.

| Parameter | Description | Required |
| --- | --- | --- |
| currency | The order currency code ([ISO 4217 format](https://en.wikipedia.org/wiki/ISO_4217)). The default is the store currency. | No |
| language | The language code ([ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)). The default is the store main language. | No |
| gateway | The order's payment gateway ([Payment Gateway](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-gateway)). The default is `not-provided`. | Yes |
| payment\_status | The order's payment status ([Payment Status](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-status)). The default is `pending`. | No |
| status | The order's status ([Order Status](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#order-status)). The default is `open`. | No |
| fulfillment | The order's status ([Order Status](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#order-status)). The default is `unpacked`. | No |
| products | Order's products list ([Product](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#product)). | Yes |
| total | The sum of all products prices, shipping costs and discounts. Must be positive. If not specified, it's calculated considering the provided costs and discounts. | No |
| inventory\_behaviour | The inventory behaviour that the order must perform ([Inventory Behaviour](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#inventory-behaviour)). | No |
| customer | The customer object ([Customer](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#customer)). | Yes |
| note | An additional customer note for the order. | No |
| billing\_address | The customer's billing address object ([Address](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address)). | Yes |
| shipping\_address | The customer's shipping address object ([Address](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address)). | Yes |
| shipping\_pickup\_type | The shipping pickup type ([Shipping Type](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-type)). The default is `pickup`. | Yes |
| shipping | The shipping method ([Shipping Method](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-method)). The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | Yes |
| shipping\_option | The order's shipping option nice name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | Yes |
| shipping\_tracking\_number | The order's shipping tracking number | No |
| shipping\_cost\_customer | The customer's shipping cost double value. The value 0 means free shipping. The default is 0. | Yes |
| shipping\_cost\_owner | The owner's shipping cost double value. | No |
| shipping\_min\_days | Minimum estimated number of days for delivery. Default value is null. | No |
| shipping\_max\_days | Maximum estimated number of days for delivery. Default value is null | No |
| send\_confirmation\_email | Send the order confirmation email to the customer . The default is false. | No |
| send\_fulfillment\_email | Send the order fulfillment email to the customer . The default is false. | No |
| location\_id | Location id from where the stock will be decreased . Must be string. | No |

### Objects[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#objects-1 "Direct link to Objects")

#### Customer[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#customer "Direct link to Customer")

| Value | Description | Type | Required |
| --- | --- | --- | --- |
| name | The customer's name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| email | The customer's email address. The defaults are `email@naoinformado.com` for pt\_BR and `email@noinformado.com` in every other cases (es\_AR, es\_MX, es\_CO). | E-mail | Yes |
| phone | The customer's phone number | String | No |
| document | The customer's document number | String | No |

#### Address[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address "Direct link to Address")

| Value | Description | Type | Required |
| --- | --- | --- | --- |
| first\_name | The customer's first name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| last\_name | The customer's last name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| address | The customer's street. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| number | The address's number. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| floor | The address's complement. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | No |
| locality | The address's locality. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | No |
| city | The address's city. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| province | The address's province. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| zipcode | The address's postal code. The default is `0000`. | String | Yes |
| country | The address's country ([ISO 3166-1 Format](http://en.wikipedia.org/wiki/ISO_3166-1)). The default is the store country. | String | Yes |
| phone | The address's phone number. | String | No |

#### Shipping\_Address[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping_address "Direct link to Shipping_Address")

| Value | Description | Type | Required |
| --- | --- | --- | --- |
| first\_name | The customer's first name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| last\_name | The customer's last name. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| address | The customer's street. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| number | The shipping\_address number. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | Integer | Yes |
| floor | The shipping\_address complement. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | No |
| locality | The shipping\_address locality. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | No |
| city | The shipping\_address city. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| province | The shipping\_address province. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | Yes |
| zipcode | The shipping\_address postal code. The default is `0000`. | String | Yes |
| country | The shipping\_address country ([ISO 3166-1 Format](http://en.wikipedia.org/wiki/ISO_3166-1)). The default is the store country. | String | Yes |
| phone | The shipping\_address phone number. The defaults are `Não informado` for pt\_BR and `No informado` in every other cases (es\_AR, es\_MX, es\_CO). | String | No |
| customs | The customs fields of the shipping address. this field can receive any custom value within the object. The default is null | Object | No |

#### Product[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#product "Direct link to Product")

| Value | Description | Type | Required |
| --- | --- | --- | --- |
| variant\_id | The product variant ID | Integer | Yes |
| quantity | The product quantity | Integer | Yes |
| price | The item price. Defaults to tiendanube's product variant price. | Double | No |

#### Order Status[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#order-status "Direct link to Order Status")

| Value | Description |
| --- | --- |
| open | The order is open |
| closed | The order is closed |
| cancelled | The order is cancelled |

#### Payment Status[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-status "Direct link to Payment Status")

| Value | Description |
| --- | --- |
| pending | The payment confirmation is pending |
| authorized | The payment was authorized but not captured yet |
| paid | The payment was successfully confirmed and captured |
| voided | The payment confirmation is voided |
| refunded | The payment was refunded to the customer |
| abandoned | The payment confirmation is abandoned |

#### Payment Gateway[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-gateway "Direct link to Payment Gateway")

| Value | Description |
| --- | --- |
| offline | Offline payment gateway |
| not-provided | The payment gateway is not provided |

#### Shipping Type[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-type "Direct link to Shipping Type")

| Value | Description |
| --- | --- |
| ship | Home delivery |
| pickup | Pickup in a physical location |

#### Shipping Method[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-method "Direct link to Shipping Method")

| Value | Description |
| --- | --- |
| branch | Store branches |
| table | Custom |
| not-provided | The shipping method was not provided |

#### Inventory Behaviour[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#inventory-behaviour "Direct link to Inventory Behaviour")

| Value | Description |
| --- | --- |
| bypass | Do not claim inventory (default) |
| claim | Attempt to claim inventory, it could prevent order creation |

#### Billing Fiscal Regime[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#billing-fiscal-regime "Direct link to Billing Fiscal Regime")

The Billing Fiscal Regime is only used in es\_MX (Régimen fiscal).

| Value | Description |
| --- | --- |
| 601 | General de Ley Personas Morales (default) |
| 603 | Personas Morales con Fines no Lucrativos |
| 610 | Residentes en el Extranjero sin Establecimiento Permanente en México |
| 620 | Sociedades Cooperativas de Producción que optan por diferir sus ingresos |
| 622 | Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras |
| 623 | Opcional para Grupos de Sociedades |
| 624 | Attempt to claim inventory, it could prevent order creation |
| 626 | Régimen Simplificado de Confianza |

#### Billing Invoice Use[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#billing-invoice-use "Direct link to Billing Invoice Use")

The Billing Invoice Use is only used in es\_MX (Uso de factura).

| Value | Description |
| --- | --- |
| G01 | General de Ley Personas Morales (default) |
| G02 | Devoluciones, descuentos o bonificaciones |
| G03 | Gastos en general |
| I01 | Construcciones |
| I02 | Mobiliario y equipo de oficina por inversiones |
| I03 | Equipo de transporte |
| I04 | Equipo de computo y accesorios |
| I05 | Dados, troqueles, moldes, matrices y herramental |
| I06 | Comunicaciones telefónicas |
| I07 | Comunicaciones satelitales |
| I08 | Otra maquinaria y equipo |
| S01 | Sin efectos fiscales |
| CP01 | Pagos |

#### POST /orders/[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders-1 "Direct link to POST /orders/")

`HTTP/1.1 201 Created`

```
{    "id": 871310835,    "token": "d928449fdd060fb7f3854c681923c28cfbccbcc1",    "store_id": 817495,    "contact_email": "john.doe@example.com",    "contact_name": "John Doe",    "contact_phone": "+55 11 99999-9999",    "contact_identification": null,    "billing_name": "John",    "billing_phone": "51230413",    "billing_address": "Evergreen Terrace",    "billing_number": "742",    "billing_floor": "Apartment 8",    "billing_locality": "Bronx",    "billing_zipcode": "10451",    "billing_city": "New York",    "billing_province": "New York",    "billing_country": "US",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": 871310835,        "created_at": "2022-11-15T19:47:32+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "80.00",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "80.00",    "total_usd": "80.00",    "checkout_enabled": true,    "weight": "0.000",    "currency": "USD",    "language": "es",    "gateway": "not-provided",    "gateway_id": null,    "gateway_name": "",    "extra": {},    "storefront": "api",    "note": null,    "created_at": "2022-11-15T19:47:32+0000",    "updated_at": "2022-11-15T19:47:32+0000",    "completed_at": {        "date": "2022-11-15 19:47:32.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": null,        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": {        "id": 44769493,        "name": "John Doe",        "email": "john.doe@example.com",        "identification": null,        "phone": "+55 11 99999-9999",        "note": null,        "default_address": {            "address": "No informado",            "city": "No informado",            "country": "AR",            "created_at": "2021-09-24T14:02:57+0000",            "default": true,            "floor": "No informado",            "id": 52781637,            "locality": "No informado",            "name": "No informado No informado",            "number": "No informado",            "phone": "No informado",            "province": "No informado",            "updated_at": "2021-09-24T14:02:57+0000",            "zipcode": "0000"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": null,                "created_at": "2020-09-11T18:06:09+0000",                "default": false,                "floor": "",                "id": 28900058,                "locality": "",                "name": "John Doe",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2020-09-11T18:06:09+0000",                "zipcode": "97475"            },            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-15T18:55:48+0000",                "default": false,                "floor": null,                "id": 52249003,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-15T18:55:48+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-24T14:01:01+0000",                "default": false,                "floor": null,                "id": 52781492,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-24T14:01:01+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "No informado",                "country": "AR",                "created_at": "2021-09-24T14:02:57+0000",                "default": true,                "floor": "No informado",                "id": 52781637,                "locality": "No informado",                "name": "No informado No informado",                "number": "No informado",                "phone": "No informado",                "province": "No informado",                "updated_at": "2021-09-24T14:02:57+0000",                "zipcode": "0000"            },            {                "address": "Fake Street",                "city": "Rosario",                "country": "AR",                "created_at": "2021-09-27T15:39:31+0000",                "default": false,                "floor": "",                "id": 52933588,                "locality": "",                "name": "John Doe",                "number": "123",                "phone": "+55 11 99999-9999",                "province": "Santa Fe",                "updated_at": "2021-09-27T15:39:31+0000",                "zipcode": "2000"            },            {                "address": null,                "city": null,                "country": "AR",                "created_at": "2021-09-27T15:43:15+0000",                "default": false,                "floor": null,                "id": 52933858,                "locality": null,                "name": "John Doe",                "number": null,                "phone": "+55 11 99999-9999",                "province": null,                "updated_at": "2021-09-27T15:43:15+0000",                "zipcode": null            }        ],        "billing_name": "John",        "billing_phone": "51230413",        "billing_address": "Evergreen Terrace",        "billing_number": "742",        "billing_floor": "Apartment 8",        "billing_locality": "Bronx",        "billing_zipcode": "10451",        "billing_city": "New York",        "billing_province": "New York",        "billing_country": "US",        "extra": {},        "total_spent": "187.50",        "total_spent_currency": "USD",        "last_order_id": 871310835,        "active": false,        "first_interaction": "2022-11-15T19:47:32+0000",        "created_at": "2020-09-11T18:06:09+0000",        "updated_at": "2022-11-15T19:47:32+0000"    },    "products": [        {            "id": 1069079649,            "depth": "0.00",            "height": "0.00",            "name": "Producto B",            "price": "40.00",            "compare_at_price": "40.00",            "product_id": 63021345,            "image": {                "id": 0,                "product_id": 0,                "src": "https://d2r9epyceweg5n.cloudfront.net/assets/stores/img/no-photo-1024-1024.png",                "position": 0,                "alt": [],                "created_at": "2022-11-15T19:47:33+0000",                "updated_at": "2022-11-15T19:47:33+0000"            },            "quantity": 2,            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": 194113141,            "variant_values": [],            "properties": [],            "sku": null,            "barcode": null        }    ],    "number": 307,    "cancel_reason": null,    "owner_note": null,    "cancelled_at": null,    "closed_at": null,    "read_at": null,    "status": "open",    "payment_status": "pending",    "gateway_link": null,    "shipping_address": {        "address": "No informado",        "city": "No informado",        "country": "AR",        "created_at": "2022-11-15T19:47:32+0000",        "default": false,        "floor": "No informado",        "id": 0,        "locality": "No informado",        "name": "No informado No informado",        "number": "No informado",        "phone": "No informado",        "province": "No informado",        "updated_at": "2022-11-15T19:47:32+0000",        "zipcode": "0000",        "customs": null    },    "shipping_status": "unpacked",    "paid_at": null,    "client_details": {        "browser_ip": null,        "user_agent": null    },    "app_id": 2181}
```

### PUT /orders/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-ordersid "Direct link to PUT /orders/{id}")

Change an Order's attributes (just `owner_note` for now) and/or update an Order's status

#### PUT /orders/871310835[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-orders871310835 "Direct link to PUT /orders/871310835")

```
{  "owner_note": "Need to gift wrap this order",  "status": "closed"}
```

`HTTP/1.1 200 OK`

```
{    "id": 871310835,    "token": "d928449fdd060fb7f3854c681923c28cfbccbcc1",    "store_id": 817495,    "contact_email": "john.doe@example.com",    "contact_name": "John Doe",    "contact_phone": "+55 11 99999-9999",    "contact_identification": null,    "billing_name": "John",    "billing_phone": "51230413",    "billing_address": "Evergreen Terrace",    "billing_number": "742",    "billing_floor": "Apartment 8",    "billing_locality": "Bronx",    "billing_zipcode": "10451",    "billing_city": "New York",    "billing_province": "New York",    "billing_country": "US",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": 871310835,        "created_at": "2022-11-15T19:49:48+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "80.00",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "80.00",    "total_usd": "80.00",    "checkout_enabled": true,    "weight": "0.000",    "currency": "USD",    "language": "es",    "gateway": "not-provided",    "gateway_id": null,    "gateway_name": "",    "shipping_pickup_type": "pickup",    "extra": {},    "storefront": "api",    "note": null,    "created_at": "2022-11-15T19:47:32+0000",    "updated_at": "2022-11-15T19:49:48+0000",    "completed_at": {        "date": "2022-11-15 19:47:32.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": null,        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": {        "id": 44769493,        "name": "John Doe",        "email": "john.doe@example.com",        "identification": null,        "phone": "+55 11 99999-9999",        "note": null,        "default_address": {            "address": "No informado",            "city": "No informado",            "country": "AR",            "created_at": "2021-09-24T14:02:57+0000",            "default": true,            "floor": "No informado",            "id": 52781637,            "locality": "No informado",            "name": "No informado No informado",            "number": "No informado",            "phone": "No informado",            "province": "No informado",            "updated_at": "2021-09-24T14:02:57+0000",            "zipcode": "0000"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": null,                "created_at": "2020-09-11T18:06:09+0000",                "default": false,                "floor": "",                "id": 28900058,                "locality": "",                "name": "John Doe",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2020-09-11T18:06:09+0000",                "zipcode": "97475"            },            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-15T18:55:48+0000",                "default": false,                "floor": null,                "id": 52249003,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-15T18:55:48+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-24T14:01:01+0000",                "default": false,                "floor": null,                "id": 52781492,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-24T14:01:01+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "No informado",                "country": "AR",                "created_at": "2021-09-24T14:02:57+0000",                "default": true,                "floor": "No informado",                "id": 52781637,                "locality": "No informado",                "name": "No informado No informado",                "number": "No informado",                "phone": "No informado",                "province": "No informado",                "updated_at": "2021-09-24T14:02:57+0000",                "zipcode": "0000"            },            {                "address": "Fake Street",                "city": "Rosario",                "country": "AR",                "created_at": "2021-09-27T15:39:31+0000",                "default": false,                "floor": "",                "id": 52933588,                "locality": "",                "name": "John Doe",                "number": "123",                "phone": "+55 11 99999-9999",                "province": "Santa Fe",                "updated_at": "2021-09-27T15:39:31+0000",                "zipcode": "2000"            },            {                "address": null,                "city": null,                "country": "AR",                "created_at": "2021-09-27T15:43:15+0000",                "default": false,                "floor": null,                "id": 52933858,                "locality": null,                "name": "John Doe",                "number": null,                "phone": "+55 11 99999-9999",                "province": null,                "updated_at": "2021-09-27T15:43:15+0000",                "zipcode": null            }        ],        "billing_name": "John",        "billing_phone": "51230413",        "billing_address": "Evergreen Terrace",        "billing_number": "742",        "billing_floor": "Apartment 8",        "billing_locality": "Bronx",        "billing_zipcode": "10451",        "billing_city": "New York",        "billing_province": "New York",        "billing_country": "US",        "extra": {},        "total_spent": "187.50",        "total_spent_currency": "USD",        "last_order_id": 871310835,        "active": false,        "first_interaction": "2022-11-15T19:47:32+0000",        "created_at": "2020-09-11T18:06:09+0000",        "updated_at": "2022-11-15T19:47:32+0000"    },    "products": [        {            "id": 1069079649,            "depth": "0.00",            "height": "0.00",            "name": "Producto B",            "price": "40.00",            "compare_at_price": "40.00",            "product_id": 63021345,            "image": {                "id": 0,                "product_id": 0,                "src": "https://d2r9epyceweg5n.cloudfront.net/assets/stores/img/no-photo-1024-1024.png",                "position": 0,                "alt": [],                "created_at": "2022-11-15T19:49:48+0000",                "updated_at": "2022-11-15T19:49:48+0000"            },            "quantity": 2,            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": 194113141,            "variant_values": [],            "properties": [],            "sku": null,            "barcode": null        }    ],    "number": 307,    "cancel_reason": null,    "owner_note": "Need to gift wrap this order",    "cancelled_at": null,    "closed_at": "2022-11-15T19:49:48+0000",    "read_at": null,    "status": "closed",    "payment_status": "paid",    "gateway_link": null,    "shipping_address": {        "address": "No informado",        "city": "No informado",        "country": "AR",        "created_at": "2022-11-15T19:47:32+0000",        "default": false,        "floor": "No informado",        "id": 0,        "locality": "No informado",        "name": "No informado No informado",        "number": "No informado",        "phone": "No informado",        "province": "No informado",        "updated_at": "2022-11-15T19:49:48+0000",        "zipcode": "0000",        "customs": null    },    "shipping_status": "unpacked",    "paid_at": "2022-11-15T19:48:39+0000",    "client_details": {        "browser_ip": null,        "user_agent": null    },    "app_id": 2181}
```

### Pay an Order[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#pay-an-order "Direct link to Pay an Order")

In fact, there is no action to pay an order. Orders are paid when sending a [Transaction](https://tiendanube.github.io/api-documentation/resources/transaction#transaction-event-workflow) with status success, regardless of the event (sale or capture).

After payment, two order's attributes get modified: attribute `payment_status` receives "paid" and attribute `paid_at` receives the exact time the payment was processed.

```
{  "payment_status": "paid",  "paid_at": "2022-11-07T12:17:22+0000"}
```

### POST /orders/{id}/close[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidclose "Direct link to POST /orders/{id}/close")

Close an Order

#### POST /orders/871310835/close[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders871310835close "Direct link to POST /orders/871310835/close")

`HTTP/1.1 200 OK`

```
{    "id": 871310835,    "token": "d928449fdd060fb7f3854c681923c28cfbccbcc1",    "store_id": 817495,    "contact_email": "john.doe@example.com",    "contact_name": "John Doe",    "contact_phone": "+55 11 99999-9999",    "contact_identification": null,    "billing_name": "John",    "billing_phone": "51230413",    "billing_address": "Evergreen Terrace",    "billing_number": "742",    "billing_floor": "Apartment 8",    "billing_locality": "Bronx",    "billing_zipcode": "10451",    "billing_city": "New York",    "billing_province": "New York",    "billing_country": "US",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": 871310835,        "created_at": "2022-11-15T19:51:59+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "80.00",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "80.00",    "total_usd": "80.00",    "checkout_enabled": true,    "weight": "0.000",    "currency": "USD",    "language": "es",    "gateway": "not-provided",    "gateway_id": null,    "gateway_name": "",    "extra": {},    "storefront": "api",    "note": null,    "created_at": "2022-11-15T19:47:32+0000",    "updated_at": "2022-11-15T19:51:59+0000",    "completed_at": {        "date": "2022-11-15 19:47:32.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": null,        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": {        "id": 44769493,        "name": "John Doe",        "email": "john.doe@example.com",        "identification": null,        "phone": "+55 11 99999-9999",        "note": null,        "default_address": {            "address": "No informado",            "city": "No informado",            "country": "AR",            "created_at": "2021-09-24T14:02:57+0000",            "default": true,            "floor": "No informado",            "id": 52781637,            "locality": "No informado",            "name": "No informado No informado",            "number": "No informado",            "phone": "No informado",            "province": "No informado",            "updated_at": "2021-09-24T14:02:57+0000",            "zipcode": "0000"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": null,                "created_at": "2020-09-11T18:06:09+0000",                "default": false,                "floor": "",                "id": 28900058,                "locality": "",                "name": "John Doe",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2020-09-11T18:06:09+0000",                "zipcode": "97475"            },            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-15T18:55:48+0000",                "default": false,                "floor": null,                "id": 52249003,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-15T18:55:48+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-24T14:01:01+0000",                "default": false,                "floor": null,                "id": 52781492,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-24T14:01:01+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "No informado",                "country": "AR",                "created_at": "2021-09-24T14:02:57+0000",                "default": true,                "floor": "No informado",                "id": 52781637,                "locality": "No informado",                "name": "No informado No informado",                "number": "No informado",                "phone": "No informado",                "province": "No informado",                "updated_at": "2021-09-24T14:02:57+0000",                "zipcode": "0000"            },            {                "address": "Fake Street",                "city": "Rosario",                "country": "AR",                "created_at": "2021-09-27T15:39:31+0000",                "default": false,                "floor": "",                "id": 52933588,                "locality": "",                "name": "John Doe",                "number": "123",                "phone": "+55 11 99999-9999",                "province": "Santa Fe",                "updated_at": "2021-09-27T15:39:31+0000",                "zipcode": "2000"            },            {                "address": null,                "city": null,                "country": "AR",                "created_at": "2021-09-27T15:43:15+0000",                "default": false,                "floor": null,                "id": 52933858,                "locality": null,                "name": "John Doe",                "number": null,                "phone": "+55 11 99999-9999",                "province": null,                "updated_at": "2021-09-27T15:43:15+0000",                "zipcode": null            }        ],        "billing_name": "John",        "billing_phone": "51230413",        "billing_address": "Evergreen Terrace",        "billing_number": "742",        "billing_floor": "Apartment 8",        "billing_locality": "Bronx",        "billing_zipcode": "10451",        "billing_city": "New York",        "billing_province": "New York",        "billing_country": "US",        "extra": {},        "total_spent": "187.50",        "total_spent_currency": "USD",        "last_order_id": 871310835,        "active": false,        "first_interaction": "2022-11-15T19:47:32+0000",        "created_at": "2020-09-11T18:06:09+0000",        "updated_at": "2022-11-15T19:47:32+0000"    },    "products": [        {            "id": 1069079649,            "depth": "0.00",            "height": "0.00",            "name": "Producto B",            "price": "40.00",            "compare_at_price": "40.00",            "product_id": 63021345,            "image": {                "id": 0,                "product_id": 0,                "src": "https://d2r9epyceweg5n.cloudfront.net/assets/stores/img/no-photo-1024-1024.png",                "position": 0,                "alt": [],                "created_at": "2022-11-15T19:51:59+0000",                "updated_at": "2022-11-15T19:51:59+0000"            },            "quantity": 2,            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": 194113141,            "variant_values": [],            "properties": [],            "sku": null,            "barcode": null        }    ],    "number": 307,    "cancel_reason": null,    "owner_note": "Need to gift wrap this order",    "cancelled_at": null,    "closed_at": "2022-11-15T19:51:59+0000",    "read_at": null,    "status": "closed",    "payment_status": "paid",    "gateway_link": null,    "shipping_address": {        "address": "No informado",        "city": "No informado",        "country": "AR",        "created_at": "2022-11-15T19:47:32+0000",        "default": false,        "floor": "No informado",        "id": 0,        "locality": "No informado",        "name": "No informado No informado",        "number": "No informado",        "phone": "No informado",        "province": "No informado",        "updated_at": "2022-11-15T19:51:59+0000",        "zipcode": "0000",        "customs": null    },    "shipping_status": "unpacked",    "paid_at": "2022-11-15T19:48:39+0000",    "client_details": {        "browser_ip": null,        "user_agent": null    },    "app_id": 2181}
```

### POST /orders/{id}/open[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidopen "Direct link to POST /orders/{id}/open")

Re-open a closed Order

#### POST /orders/871310835/open[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders871310835open "Direct link to POST /orders/871310835/open")

`HTTP/1.1 200 OK`

```
{    "id": 871310835,    "token": "d928449fdd060fb7f3854c681923c28cfbccbcc1",    "store_id": 817495,    "contact_email": "john.doe@example.com",    "contact_name": "John Doe",    "contact_phone": "+55 11 99999-9999",    "contact_identification": null,    "billing_name": "John",    "billing_phone": "51230413",    "billing_address": "Evergreen Terrace",    "billing_number": "742",    "billing_floor": "Apartment 8",    "billing_locality": "Bronx",    "billing_zipcode": "10451",    "billing_city": "New York",    "billing_province": "New York",    "billing_country": "US",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": 871310835,        "created_at": "2022-11-15T19:52:37+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "80.00",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "80.00",    "total_usd": "80.00",    "checkout_enabled": true,    "weight": "0.000",    "currency": "USD",    "language": "es",    "gateway": "not-provided",    "gateway_id": null,    "gateway_name": "",    "extra": {},    "storefront": "api",    "note": null,    "created_at": "2022-11-15T19:47:32+0000",    "updated_at": "2022-11-15T19:52:37+0000",    "completed_at": {        "date": "2022-11-15 19:47:32.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": null,        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": {        "id": 44769493,        "name": "John Doe",        "email": "john.doe@example.com",        "identification": null,        "phone": "+55 11 99999-9999",        "note": null,        "default_address": {            "address": "No informado",            "city": "No informado",            "country": "AR",            "created_at": "2021-09-24T14:02:57+0000",            "default": true,            "floor": "No informado",            "id": 52781637,            "locality": "No informado",            "name": "No informado No informado",            "number": "No informado",            "phone": "No informado",            "province": "No informado",            "updated_at": "2021-09-24T14:02:57+0000",            "zipcode": "0000"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": null,                "created_at": "2020-09-11T18:06:09+0000",                "default": false,                "floor": "",                "id": 28900058,                "locality": "",                "name": "John Doe",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2020-09-11T18:06:09+0000",                "zipcode": "97475"            },            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-15T18:55:48+0000",                "default": false,                "floor": null,                "id": 52249003,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-15T18:55:48+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-24T14:01:01+0000",                "default": false,                "floor": null,                "id": 52781492,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-24T14:01:01+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "No informado",                "country": "AR",                "created_at": "2021-09-24T14:02:57+0000",                "default": true,                "floor": "No informado",                "id": 52781637,                "locality": "No informado",                "name": "No informado No informado",                "number": "No informado",                "phone": "No informado",                "province": "No informado",                "updated_at": "2021-09-24T14:02:57+0000",                "zipcode": "0000"            },            {                "address": "Fake Street",                "city": "Rosario",                "country": "AR",                "created_at": "2021-09-27T15:39:31+0000",                "default": false,                "floor": "",                "id": 52933588,                "locality": "",                "name": "John Doe",                "number": "123",                "phone": "+55 11 99999-9999",                "province": "Santa Fe",                "updated_at": "2021-09-27T15:39:31+0000",                "zipcode": "2000"            },            {                "address": null,                "city": null,                "country": "AR",                "created_at": "2021-09-27T15:43:15+0000",                "default": false,                "floor": null,                "id": 52933858,                "locality": null,                "name": "John Doe",                "number": null,                "phone": "+55 11 99999-9999",                "province": null,                "updated_at": "2021-09-27T15:43:15+0000",                "zipcode": null            }        ],        "billing_name": "John",        "billing_phone": "51230413",        "billing_address": "Evergreen Terrace",        "billing_number": "742",        "billing_floor": "Apartment 8",        "billing_locality": "Bronx",        "billing_zipcode": "10451",        "billing_city": "New York",        "billing_province": "New York",        "billing_country": "US",        "extra": {},        "total_spent": "187.50",        "total_spent_currency": "USD",        "last_order_id": 871310835,        "active": false,        "first_interaction": "2022-11-15T19:47:32+0000",        "created_at": "2020-09-11T18:06:09+0000",        "updated_at": "2022-11-15T19:47:32+0000"    },    "products": [        {            "id": 1069079649,            "depth": "0.00",            "height": "0.00",            "name": "Producto B",            "price": "40.00",            "compare_at_price": "40.00",            "product_id": 63021345,            "image": {                "id": 0,                "product_id": 0,                "src": "https://d2r9epyceweg5n.cloudfront.net/assets/stores/img/no-photo-1024-1024.png",                "position": 0,                "alt": [],                "created_at": "2022-11-15T19:52:37+0000",                "updated_at": "2022-11-15T19:52:37+0000"            },            "quantity": 2,            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": 194113141,            "variant_values": [],            "properties": [],            "sku": null,            "barcode": null        }    ],    "number": 307,    "cancel_reason": null,    "owner_note": "Need to gift wrap this order",    "cancelled_at": null,    "closed_at": null,    "read_at": null,    "status": "open",    "payment_status": "paid",    "gateway_link": null,    "shipping_address": {        "address": "No informado",        "city": "No informado",        "country": "AR",        "created_at": "2022-11-15T19:47:32+0000",        "default": false,        "floor": "No informado",        "id": 0,        "locality": "No informado",        "name": "No informado No informado",        "number": "No informado",        "phone": "No informado",        "province": "No informado",        "updated_at": "2022-11-15T19:52:37+0000",        "zipcode": "0000",        "customs": null    },    "shipping_status": "unpacked",    "paid_at": "2022-11-15T19:48:39+0000",    "client_details": {        "browser_ip": null,        "user_agent": null    },    "app_id": 2181}
```

### POST /orders/{id}/cancel[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersidcancel "Direct link to POST /orders/{id}/cancel")

Cancel an Order

| Parameter | Explanation |
| --- | --- |
| reason | The reason for the order cancellation. Possible values are "customer", "inventory", "fraud" or "other" |
| email | Notify the customer of the cancellation (the default value is true) |
| restock | Restock the store's products (the default value is true) |

#### POST /orders/871310835/cancel[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders871310835cancel "Direct link to POST /orders/871310835/cancel")

`HTTP/1.1 200 OK`

```
{    "id": 871310835,    "token": "d928449fdd060fb7f3854c681923c28cfbccbcc1",    "store_id": 817495,    "contact_email": "john.doe@example.com",    "contact_name": "John Doe",    "contact_phone": "+55 11 99999-9999",    "contact_identification": null,    "billing_name": "John",    "billing_phone": "51230413",    "billing_address": "Evergreen Terrace",    "billing_number": "742",    "billing_floor": "Apartment 8",    "billing_locality": "Bronx",    "billing_zipcode": "10451",    "billing_city": "New York",    "billing_province": "New York",    "billing_country": "US",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 817495,        "order_id": 871310835,        "created_at": "2022-11-15T19:52:37+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "80.00",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "80.00",    "total_usd": "80.00",    "checkout_enabled": true,    "weight": "0.000",    "currency": "USD",    "language": "es",    "gateway": "not-provided",    "gateway_id": null,    "gateway_name": "",    "extra": {},    "storefront": "api",    "note": null,    "created_at": "2022-11-15T19:47:32+0000",    "updated_at": "2022-11-15T19:52:37+0000",    "completed_at": {        "date": "2022-11-15 19:47:32.000000",        "timezone_type": 3,        "timezone": "UTC"    },    "payment_details": {        "method": null,        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": {        "id": 44769493,        "name": "John Doe",        "email": "john.doe@example.com",        "identification": null,        "phone": "+55 11 99999-9999",        "note": null,        "default_address": {            "address": "No informado",            "city": "No informado",            "country": "AR",            "created_at": "2021-09-24T14:02:57+0000",            "default": true,            "floor": "No informado",            "id": 52781637,            "locality": "No informado",            "name": "No informado No informado",            "number": "No informado",            "phone": "No informado",            "province": "No informado",            "updated_at": "2021-09-24T14:02:57+0000",            "zipcode": "0000"        },        "addresses": [            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": null,                "created_at": "2020-09-11T18:06:09+0000",                "default": false,                "floor": "",                "id": 28900058,                "locality": "",                "name": "John Doe",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2020-09-11T18:06:09+0000",                "zipcode": "97475"            },            {                "address": "Evergreen Terrace",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-15T18:55:48+0000",                "default": false,                "floor": null,                "id": 52249003,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-15T18:55:48+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "Springfield",                "country": "US",                "created_at": "2021-09-24T14:01:01+0000",                "default": false,                "floor": null,                "id": 52781492,                "locality": null,                "name": "No informado No informado",                "number": "742",                "phone": "5551230413",                "province": "Oregon",                "updated_at": "2021-09-24T14:01:01+0000",                "zipcode": "97475"            },            {                "address": "No informado",                "city": "No informado",                "country": "AR",                "created_at": "2021-09-24T14:02:57+0000",                "default": true,                "floor": "No informado",                "id": 52781637,                "locality": "No informado",                "name": "No informado No informado",                "number": "No informado",                "phone": "No informado",                "province": "No informado",                "updated_at": "2021-09-24T14:02:57+0000",                "zipcode": "0000"            },            {                "address": "Fake Street",                "city": "Rosario",                "country": "AR",                "created_at": "2021-09-27T15:39:31+0000",                "default": false,                "floor": "",                "id": 52933588,                "locality": "",                "name": "John Doe",                "number": "123",                "phone": "+55 11 99999-9999",                "province": "Santa Fe",                "updated_at": "2021-09-27T15:39:31+0000",                "zipcode": "2000"            },            {                "address": null,                "city": null,                "country": "AR",                "created_at": "2021-09-27T15:43:15+0000",                "default": false,                "floor": null,                "id": 52933858,                "locality": null,                "name": "John Doe",                "number": null,                "phone": "+55 11 99999-9999",                "province": null,                "updated_at": "2021-09-27T15:43:15+0000",                "zipcode": null            }        ],        "billing_name": "John",        "billing_phone": "51230413",        "billing_address": "Evergreen Terrace",        "billing_number": "742",        "billing_floor": "Apartment 8",        "billing_locality": "Bronx",        "billing_zipcode": "10451",        "billing_city": "New York",        "billing_province": "New York",        "billing_country": "US",        "extra": {},        "total_spent": "187.50",        "total_spent_currency": "USD",        "last_order_id": 871310835,        "active": false,        "first_interaction": "2022-11-15T19:47:32+0000",        "created_at": "2020-09-11T18:06:09+0000",        "updated_at": "2022-11-15T19:47:32+0000"    },    "products": [        {            "id": 1069079649,            "depth": "0.00",            "height": "0.00",            "name": "Producto B",            "price": "40.00",            "compare_at_price": "40.00",            "product_id": 63021345,            "image": {                "id": 0,                "product_id": 0,                "src": "https://d2r9epyceweg5n.cloudfront.net/assets/stores/img/no-photo-1024-1024.png",                "position": 0,                "alt": [],                "created_at": "2022-11-15T19:52:37+0000",                "updated_at": "2022-11-15T19:52:37+0000"            },            "quantity": 2,            "free_shipping": false,            "weight": "0.00",            "width": "0.00",            "variant_id": 194113141,            "variant_values": [],            "properties": [],            "sku": null,            "barcode": null        }    ],    "number": 307,    "cancel_reason": "other",    "owner_note": "Need to gift wrap this order",    "cancelled_at": "2022-11-15T19:57:42+0000",    "closed_at": null,    "read_at": null,    "status": "cancelled",    "payment_status": "paid",    "gateway_link": null,    "shipping_address": {        "address": "No informado",        "city": "No informado",        "country": "AR",        "created_at": "2022-11-15T19:47:32+0000",        "default": false,        "floor": "No informado",        "id": 0,        "locality": "No informado",        "name": "No informado No informado",        "number": "No informado",        "phone": "No informado",        "province": "No informado",        "updated_at": "2022-11-15T19:52:37+0000",        "zipcode": "0000",        "customs": null    },    "shipping_status": "unpacked",    "paid_at": "2022-11-15T19:48:39+0000",    "client_details": {        "browser_ip": null,        "user_agent": null    },    "app_id": 2181}
```

### Invoices (e.g. NFe in Brazil)[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#invoices-eg-nfe-in-brazil "Direct link to Invoices (e.g. NFe in Brazil)")

We currently do not offer an `Invoice` API, but there are many apps which need to read and/or write invoice information. The way to achieve this is using [`Metafields`](https://tiendanube.github.io/api-documentation/resources/metafields).

The advantage of using `Metafields` is that a certain app could generate the invoice and another app can read it. Let's take a real Brazilian example: an ERP can generate the _nota fiscal_ (NFe) and a Shipping Carrier can use that NFe to fulfill a shipment.

#### Create an invoice[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#create-an-invoice "Direct link to Create an invoice")

An Order may have more than one invoice, so we will have a Metafield that holds a list of invoices. It's the responsbility of invoice producers to make sure this format is maintained when new invoices are added.

When adding a new invoice you have to append it to the list of NFEs adding both the NFe `key` (generated when created) and the `link` to the NFe XML and an optional `fulfillment_order_id` specifying the [`Fulfillment Order`](https://tiendanube.github.io/api-documentation/resources/fulfillment-order) the NFe applies to. The `value` of the metafields holds a json encoded string representation of the NFEs' list; the list is an array of object that have `key` and `link` properties. The value of `owner_id` should hold the `Order` id.

**Example**: let's say we want to add a new NFe with key `55555555555555555555555555555` and link `http://nfe.com.br/nsaasb` assigned to the Fulfillment Order with id `01FHZXHK8PTP9FVK99Z66GXASS`.

_To make sure other apps can read the invoice you create, please use this example as-is._

First we have to check if the NFe metafield already exists.

`GET /metafields/orders?per_page=1&owner_id=ORDER_ID&namespace=nfe&key=list&fields=id,value`

This will return an empty array if the NFe metafield does not exist.

`HTTP/1.1 200 OK`

or an aray with one object with the id and value in case it exists.

`HTTP/1.1 200 OK`

```
[    {      "id": 12345,      "value": "[{\"key\": \"44444444444444444444444444444\", \"link\": \"http://nfe.com.br/nsaasa\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}]",    }]
```

##### If the NFe list metafield does not exist[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#if-the-nfe-list-metafield-does-not-exist "Direct link to If the NFe list metafield does not exist")

We need to create a new metafield. _Please note that `value` is a JSON encoded string so for it to be valid JSON all double quotes must be escaped._

`POST /metafields`

```
{  "namespace": "nfe",  "key": "list",  "value": "[{\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}]",  "description": "Lista de NFes",  "owner_resource": "Order",  "owner_id": 12345678}
```

`HTTP/1.1 201 Created`

```
{  "id": 12345,  "namespace": "nfe",  "key": "link",  "value": "[{\"key\": \"55555555555555555555555555555\", link: \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}]",  "description": "Lista de NFes",  "owner_resource": "Order",  "owner_id": 12345678,  "created_at": "2015-01-02 20:27:51",  "updated_at": "2015-01-02 20:27:51",  "deleted_at": null}
```

##### If the NFe list metafield already existed[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#if-the-nfe-list-metafield-already-existed "Direct link to If the NFe list metafield already existed")

We now have to append our NFe to the existing array and update the metafield using the metafield `id`.

`PUT /metafields/METAFIELD_ID`

```
{  "value": "[{\"key\": \"44444444444444444444444444444\", \"link\": \"http://nfe.com.br/nsaasa\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}, {\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01ARZ3NDEKTSV4RRFFQ69G5FAV\"}]"}
```

`HTTP/1.1 200 OK`

```
{  "id": 12345,  "namespace": "nfe",  "key": "list",  "value": "[{\"key\": \"44444444444444444444444444444\", \"link\": \"http://nfe.com.br/nsaasa\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}, {\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01ARZ3NDEKTSV4RRFFQ69G5FAV\"}]",  "description": "Lista de NFes",  "owner_resource": "Order",  "owner_id": 12345678,  "created_at": "2015-01-02 20:27:51",  "updated_at": "2015-01-05 18:15:40",  "deleted_at": null}
```

Please take into account that JSON arrays do not allow trailing commas.

#### Read an invoice[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#read-an-invoice "Direct link to Read an invoice")

To read an invoice we need to search for the previously created metafield holding the invoice.

`GET /metafields/orders?per_page=1&owner_id=ORDER_ID&namespace=nfe&key=list&fields=value`

`HTTP/1.1 200 OK`

```
[    {      "value": "[{\"key\": \"44444444444444444444444444444\", \"link\": \"http://nfe.com.br/nsaasa\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}, {\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01ARZ3NDEKTSV4RRFFQ69G5FAV\"}]",    }]
```

You can then JSON decode the `value` to access the list of NFEs.

**Note**: you can still use the old method of sending the NFe key and url as two separate metafields, but we recommend migrating to this new method as it is now the preferred method for NFe consumers as it allows to receive multiple NFes supporting orders with multiple fulfillments.

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**What are our recommendations on best practices for retrieving orders information?** **Orders placed via API do not update stock?** **Things to take into account when implementing a Subscription App** **Only Argentinian stores: How to know when the buyer requested a 'Factura A' during checkout?**