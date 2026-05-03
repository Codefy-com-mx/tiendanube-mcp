Version: 2025-03

The abandoned checkout is created when the customer reaches checkout's seconds step, but for some reason it does not finish the process. While it is not possible to fetch abandoned checkouts from over 30 days ago, it is still possible for an old abandoned checkout to be converted into an Order. Abandoned checkouts are completely deleted after 90 days.

#### Table of Contents[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#table-of-contents "Direct link to Table of Contents")

> [Get all abandoned checkout](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-checkouts)

> [Get an abandoned checkout](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-checkoutscheckout_id)

> [Create a discount coupon](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-checkoutscart_idcoupon)

## Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#notes "Direct link to Notes")

> _**Note:**_ The application must have `read_orders` or `write_orders` permission (depends on whether they just want to do GET or POST).

> _**Note:**_ A cart can be created up to `6 hours` after the purchase has been abandoned.

> _**Note:**_ The carts are accessible for `30 days` after being created.

> _**Note:**_ A purchase is only converted into an abandoned cart if the customer has arrived to checkout's second step.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

### Abandoned Checkout[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#abandoned-checkout-1 "Direct link to Abandoned Checkout")

The `Abandoned Checkout` has the following contents:

| Property | Type | Explanation |
| --- | --- | --- |
| id | Integer | The unique numeric identifier for the Abandoned Checkout |
| token | String | Specifies the location of the Order |
| store\_id | Integer | Abandoned Checkout store identifier |
| abandoned\_checkout\_url | String | Redirect URL for checkout |
| contact\_email | String | Checkout consumer email |
| contact\_name | String | Checkout consumer Name |
| contact\_phone | String | Checkout consumer phone |
| contact\_identification | String | Contact identification |
| shipping\_name | String | Shipping name used at checkout |
| shipping\_phone | String | Shipping address phone used at checkout |
| shipping\_address | String | Shipping address used at checkout |
| shipping\_number | String | Shipping address number used at checkout |
| shipping\_floor | String | Shipping address floor used at checkout |
| shipping\_locality | String | Shipping address Locality used at checkout |
| shipping\_zipcode | String | Shipping zip code used at checkout |
| shipping\_city | String | Shipping City used at checkout |
| shipping\_province | String | Shipping province used at checkout |
| shipping\_country | String | Shipping country used at checkout |
| shipping\_min\_days | Integer | The minimum number of weekdays needed for the order to be delivered |
| shipping\_max\_days | Integer | The maximum number of weekdays needed for the order to be delivered |
| billing\_name | String | Billing name used at checkout |
| billing\_phone | String | Billing phone used at checkout |
| billing\_address | String | Billing address used at checkout |
| billing\_number | String | Billing number used at checkout |
| billing\_floor | String | Billing floor used at checkout |
| billing\_locality | String | Billing Locality used at checkout |
| billing\_zipcode | String | Billing zipcode used at checkout |
| billing\_city | String | Billing City used at checkout |
| billing\_province | String | Billing province used at checkout |
| billing\_country | String | Billing country used at checkout |
| shipping\_cost\_owner | String | The shipping cost the store owner has to pay to the shipping company. |
| shipping\_cost\_customer | String | The shipping cost the customer has to pay to the store owner. |
| coupon | Array\[Object\] | List of coupons applied to the order |
| promotional\_discount | Object | Promotional Discount applied to the draft order. |
| subtotal | String | Price of the order before shipping |
| discount | String | Total value of the discount applied to the price of the order |
| discount\_coupon | String | Discount applied by coupon |
| discount\_gateway | String | Discount applied by the payment gateway |
| total | String | Total price of the order including shipping and discounts |
| total\_usd | String | Total price of the order in US dollars |
| checkout\_enabled | Boolean |  |
| weight | String | Order's total weight, in kilograms |
| currency | String | The total spent's currency in [ISO 4217 format](http://en.wikipedia.org/wiki/ISO_4217) |
| language | String | Order's language used by the customer during the checkout process |
| gateway | String | The payment gateway used |
| gateway\_id | String | The payment gateway identifier |
| shipping | String | The shipping method used |
| shipping\_option | String | The shipping option chosen by the customer during the checkout process. |
| shipping\_option\_code | String | The shipping option code selected by the consumers. |
| shipping\_option\_reference | String | The shipping option reference provided by a custom shipping carrier during the checkout process. |
| shipping\_pickup\_details | String | The shipping pickup details (address and/or business hours) of the selected pickup point. |
| shipping\_tracking\_number | String | The order's shipping tracking number |
| shipping\_tracking\_url | String | The shipping tracking URL where the customer can check for the shipment status. |
| shipping\_store\_branch\_name | String | If order is going to be picked up, shows the store branch name |
| shipping\_pickup\_type | String | "ship" if the order is going to be shipped; "pickup" if it's going to be picked up from a store branch |
| shipping\_suboption | String | List of suboptions chosen for the shipping method. |
| extra | Object | A JSON object containing custom information. Can be set via the API or through custom form fields of name "extra\[key\]" on the cart's checkout form in the storefront |
| storefront | String | Origin of the order. Possible values are "store" (order created in the storefront), "meli" (order imported from Mercado Libre), "api" (order created via API), "form" (order created in the admin panel with the draft orders feature) or "pos" (order created via point of sale app) |
| note | String | An additional customer note for the order. |
| created\_at | String | Date when the Order was created in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| updated\_at | String | Date when the Order was last updated in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| completed\_at | String | Date when the Order was completed in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601) |
| next\_action | String | Next available operation in the orders flow |
| payment\_details | Object | A JSON object containing payment details. |
| attributes | Array | Line item properties. |
| products | Array | List of the products purchased by the `customer`. Contents are explained below and values hold are the ones corresponding to the time the products were purchased |

Property `next_action` can take one of the following values:

-   **noop**: no action to take
-   **close**: order should be closed
-   **waiting\_ipn**: we are waiting for the gateway to update us on the order status, the seller just needs to wait
-   **waiting\_manual\_confirmation**: we are waiting for the seller to confirm the transaction

### Promotional Discount[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#promotional-discount "Direct link to Promotional Discount")

The `promotional_discount` field has the following contents:

| Property | Type | Explanation |
| --- | --- | --- |
| id | Integer | The unique numeric identifier for the promotional discount. |
| store\_id | Integer | The unique numeric identifier for the store. |
| order\_id | Integer | The unique numeric identifier for the draft order. |
| created\_at | String | Date when the draft order was created in [ISO 8601 format](http://es.wikipedia.org/wiki/ISO_8601). |
| total\_discount\_amount | String | Total value of the promotions applied. |
| contents | Array\[Object\] | A JSON object containing products discounts information. |
| promotions\_applied | Array\[Object\] | List of promotions applied to the draft order's products. |

### Products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#products "Direct link to Products")

The `products` field has the following contents:

| Property | Type | Explanation |
| --- | --- | --- |
| id | Integer | The unique numeric identifier for the checkout cart. |
| depth | String | Product's depth at the time of purchase. |
| height | String | Product's height at the time of purchase. |
| name | String | Product's name at the time of purchase. |
| price | String | Product's price at the time of purchase. |
| product\_id | Integer | [Product](https://tiendanube.github.io/api-documentation/resources/product) purchased. |
| image | Object | Information about the product image. |
| quantity | Integer | Quantity purchased. |
| free\_shipping | Boolean | Indicates if the product has free shipping or not. |
| weight | String | Product's weight at the time of purchase. |
| width | String | Product's width at the time of purchase. |
| variant\_id | Integer | [Product Variant](https://tiendanube.github.io/api-documentation/resources/product-variant) purchased. |
| properties | Array\[Object\] | Line item properties. |
| sku | String | Product Variant sku number. |
| barcode | String | Product Variant barcode number. |

### Payment Details[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-details "Direct link to Payment Details")

The `payment_details` field has the following contents:

| Property | Type | Explanation |
| --- | --- | --- |
| method | String | Payment method selected. |
| credit\_card\_company | String | Credit card company. |
| installments | Integer | The unique numeric identifier for the promotional discount. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /checkouts[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-checkouts "Direct link to GET /checkouts")

List all Abandoned Checkouts.

#### Query parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#query-parameters "Direct link to Query parameters")

| Parameter | Explanation |
| --- | --- |
| since\_id | Restrict results to after the specified ID |
| created\_at\_max | Show Orders created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_max | Show Orders last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page | Page to show |
| per\_page | Amount of results |
| fields | Comma-separated list of fields to include in the response |

#### Return Status Code[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#return-status-code "Direct link to Return Status Code")

| Code | Description |
| --- | --- |
| 200 | The search was successful. |
| 404 | Error finding result with the parameters entered. |
| 500 | Internal error. |

#### Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#examples "Direct link to Examples")

**GET /checkouts**

`HTTP/1.1 200 OK`

```
[{"id": 411335234,"token": "d0e589b2ba4fef1a4155dc071c253dfk1j34198b9","store_id": 167985134,"abandoned_checkout_url": "https://nuvemteste.lojavirtualnuvem.com.br/checkout/v3/order/proxy/411335234/d0e589b2ba4fef1a4155dc071c253dfk1j34198b9","contact_email": "teste@teste.com.br","contact_name": "Teste 12","contact_phone": "+551335593019","contact_identification": "78448385071","shipping_name": "Teste","shipping_phone": "+551335593019","shipping_address": "Rua Ali","shipping_number": "123","shipping_floor": "","shipping_locality": "Mundo Novo","shipping_zipcode": "29580000","shipping_city": "Dores do Rio Preto","shipping_province": "Espirito Santo","shipping_country": "BR","shipping_min_days": 0,"shipping_max_days": 0,"billing_name": "Teste","billing_phone": "+551335593019","billing_address": "Rua Ali","billing_number": "123","billing_floor": "","billing_locality": "Mundo Novo","billing_zipcode": "29580000","billing_city": "Dores do Rio Preto","billing_province": "Espirito Santo","billing_country": "BR","shipping_cost_owner": "1.00","shipping_cost_customer": "1.00","coupon": [],"promotional_discount": {"id": null,"store_id": 1679854,"order_id": 411335518,"created_at": "2021-05-18T19:51:19+0000","total_discount_amount": "0.00","contents": [],"promotions_applied": []},"subtotal": "290.35","discount": "0.00","discount_coupon": "0.00","discount_gateway": "0.00","total": "291.35","total_usd": "0.00","checkout_enabled": true,"weight": "5.000","currency": "BRL","language": "pt","gateway": null,"gateway_id": null,"shipping": "api_128646","shipping_option": "Nimbus 2001","shipping_option_code": "nimbus-201","shipping_option_reference": null,"shipping_pickup_details": null,"shipping_tracking_number": null,"shipping_tracking_url": null,"shipping_store_branch_name": null,"shipping_pickup_type": "ship","shipping_suboption": [],"extra": {},"storefront": "store","note": null,"created_at": "2021-05-12T19:08:06+0000","updated_at": "2021-05-13T21:04:00+0000","completed_at": null,"next_action": "noop","payment_details": {"method": null,"credit_card_company": null,"installments": 1},"attributes": [],"products": [{"id": 516763823,"depth": "2.00","height": "20.00","name": "Varinha do Harry Potter (Preto)","price": "58.07","product_id": 87219151,"image": {"id": 171099852,"product_id": 87219151,"src": "https://d2r9epyceweg5n.cloudfront.net/stores/001/679/854/products/varinha-hp-luxo-21-5ebe5e31da8e2b693515728471178129-1024-10241-bc9b30adf4b178fabc16202348529015-1024-1024.jpeg","position": 1,"alt": [],"created_at": "2021-05-05T17:14:05+0000","updated_at": "2021-05-10T17:22:52+0000"},"quantity": 5,"free_shipping": false,"weight": "1.00","width": "4.00","variant_id": 332977991,"variant_values": ["Preto"],"properties": [],"sku": null,"barcode": null}]}]
```

### GET /checkouts/{checkout\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-checkoutscheckout_id "Direct link to GET /checkouts/{checkout_id}")

Returns a specific abandoned checkout.

#### Parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#parameters "Direct link to Parameters")

| Parameter | Explanation |
| --- | --- |
| checkout\_id | Checkout identifier |

#### Return Status Code[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#return-status-code-1 "Direct link to Return Status Code")

| Code | Description |
| --- | --- |
| 200 | The search was successful. |
| 404 | Error finding result with the parameters entered. |
| 500 | Internal error. |

#### Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#examples-1 "Direct link to Examples")

**GET /checkouts/411335234**

`HTTP/1.1 200 OK`

```
{"id": 411335234,"token": "d0e589b2ba4fef1a4155dc071c253dfk1j34198b9","store_id": 167985134,"abandoned_checkout_url": "https://nuvemteste.lojavirtualnuvem.com.br/checkout/v3/order/proxy/411335234/d0e589b2ba4fef1a4155dc071c253dfk1j34198b9","contact_email": "teste@teste.com.br","contact_name": "Teste 12","contact_phone": "+551335593019","contact_identification": "78448385071","shipping_name": "Teste","shipping_phone": "+551335593019","shipping_address": "Rua Ali","shipping_number": "123","shipping_floor": "","shipping_locality": "Mundo Novo","shipping_zipcode": "29580000","shipping_city": "Dores do Rio Preto","shipping_province": "Espirito Santo","shipping_country": "BR","shipping_min_days": 0,"shipping_max_days": 0,"billing_name": "Teste","billing_phone": "+551335593019","billing_address": "Rua Ali","billing_number": "123","billing_floor": "","billing_locality": "Mundo Novo","billing_zipcode": "29580000","billing_city": "Dores do Rio Preto","billing_province": "Espirito Santo","billing_country": "BR","shipping_cost_owner": "1.00","shipping_cost_customer": "1.00","coupon": [],"promotional_discount": {"id": null,"store_id": 1679854,"order_id": 411335518,"created_at": "2021-05-18T19:51:19+0000","total_discount_amount": "0.00","contents": [],"promotions_applied": []},"subtotal": "290.35","discount": "0.00","discount_coupon": "0.00","discount_gateway": "0.00","total": "291.35","total_usd": "0.00","checkout_enabled": true,"weight": "5.000","currency": "BRL","language": "pt","gateway": null,"gateway_id": null,"shipping": "api_128646","shipping_option": "Nimbus 2001","shipping_option_code": "nimbus-201","shipping_option_reference": null,"shipping_pickup_details": null,"shipping_tracking_number": null,"shipping_tracking_url": null,"shipping_store_branch_name": null,"shipping_pickup_type": "ship","shipping_suboption": [],"extra": {},"storefront": "store","note": null,"created_at": "2021-05-12T19:08:06+0000","updated_at": "2021-05-13T21:04:00+0000","completed_at": null,"next_action": "noop","payment_details": {"method": null,"credit_card_company": null,"installments": 1},"attributes": [],"products": [{"id": 516763823,"depth": "2.00","height": "20.00","name": "Varinha do Harry Potter (Preto)","price": "58.07","product_id": 87219151,"image": {"id": 171099852,"product_id": 87219151,"src": "https://d2r9epyceweg5n.cloudfront.net/stores/001/679/854/products/varinha-hp-luxo-21-5ebe5e31da8e2b693515728471178129-1024-10241-bc9b30adf4b178fabc16202348529015-1024-1024.jpeg","position": 1,"alt": [],"created_at": "2021-05-05T17:14:05+0000","updated_at": "2021-05-10T17:22:52+0000"},"quantity": 5,"free_shipping": false,"weight": "1.00","width": "4.00","variant_id": 332977991,"variant_values": ["Preto"],"properties": [],"sku": null,"barcode": null}]}
```

### POST /checkouts/{cart\_id}/coupon[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-checkoutscart_idcoupon "Direct link to POST /checkouts/{cart_id}/coupon")

Add a discount coupon to the cart.

| Parameter | Description | Type | Required |
| --- | --- | --- | --- |
| `coupon_id` | ID of the [Coupon](https://tiendanube.github.io/api-documentation/resources/coupon) that applies to this abandoned cart. | Integer | Yes |

```
{    "coupon_id": 1029384756}
```

`HTTP/1.1 200 OK`

```
{    "id": 987654321,    "token": "b5d911460455d44411c7f259da4309b3d099291e",    "store_id": 1234567,    "abandoned_checkout_url": "https://abandonedcheckouturl/checkout/v3/order/proxy/987654321/b5d911460455d44411c7f259da4309b3d099291e",    "contact_email": "hetoca2855@threepp.com",    "contact_name": "3245U67Jyhrtegf 23fewsdf",    "contact_phone": "",    "contact_identification": "83092433084",    "shipping_name": "3245U67Jyhrtegf",    "shipping_phone": "",    "shipping_address": null,    "shipping_number": null,    "shipping_floor": null,    "shipping_locality": null,    "shipping_zipcode": "75474567",    "shipping_city": "City",    "shipping_province": "State",    "shipping_country": "BR",    "shipping_min_days": -5,    "shipping_max_days": -4,    "billing_name": "3245U67Jyhrtegf",    "billing_phone": "",    "billing_address": "zewrtryewr",    "billing_number": "654",    "billing_floor": "",    "billing_locality": "aersrdgfd",    "billing_zipcode": "75474567",    "billing_city": "City",    "billing_province": "State",    "billing_country": "BR",    "shipping_cost_owner": "38.15",    "shipping_cost_customer": "38.15",    "coupon": [],    "promotional_discount": {        "id": null,        "store_id": 1234567,        "order_id": 987654321,        "created_at": "2021-05-18T16:28:17+0000",        "total_discount_amount": "0.00",        "contents": [],        "promotions_applied": []    },    "subtotal": "1999.99",    "discount": "0.00",    "discount_coupon": "0.00",    "discount_gateway": "0.00",    "total": "2038.14",    "total_usd": "766.71",    "checkout_enabled": true,    "weight": "13.000",    "currency": "BRL",    "language": "pt",    "gateway": null,    "gateway_id": null,    "shipping": "api_129734",    "shipping_option": "Express Delivery",    "shipping_option_code": "xp-dlv-1",    "shipping_option_reference": "ref123 xp dlv",    "shipping_pickup_details": null,    "shipping_tracking_number": null,    "shipping_tracking_url": null,    "shipping_store_branch_name": null,    "shipping_pickup_type": "ship",    "shipping_suboption": [],    "extra": {},    "storefront": "store",    "note": "",    "created_at": "2021-05-17T14:24:54+0000",    "updated_at": "2021-05-18T16:28:17+0000",    "completed_at": null,    "next_action": "noop",    "payment_details": {        "method": "redirect",        "credit_card_company": null,        "installments": 1    },    "attributes": [],    "customer": null,    "products": [        {            "id": 192837465,            "depth": "0.00",            "height": "0.00",            "name": "Product Abc123",            "price": "1999.99",            "product_id": 564738291,            "image": {                "id": 291837465,                "product_id": 564738291,                "src": "https://d2r9epyceweg5n.cloudfront.net/stores/001/679/811/products/bc123-757914__480-3bf9322c22a0206aee16202452236251-1024-1024.png",                "position": 2,                "alt": [],                "created_at": "2021-05-05T20:07:08+0000",                "updated_at": "2021-05-10T14:00:17+0000"            },            "quantity": 1,            "free_shipping": false,            "weight": "13.00",            "width": "0.00",            "variant_id": 344345678,            "variant_values": [                "Azul",                "17"            ],            "properties": [],            "sku": null,            "barcode": null        }    ]}
```

## HTTP Errors List - POST Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-errors-list---post-examples "Direct link to HTTP Errors List - POST Examples")

`HTTP/1.1 401 Unauthorized`

```
{    "code": 401,    "message": "Unauthorized",    "description": "Invalid access token"}
```

`HTTP/1.1 404 Not Found`

```
{    "code": 404,    "message": "Not Found",    "description": null}
```

`HTTP/1.1 415 Unsupported Media Type`

```
{    "code": 415,    "message": "Unsupported Media Type",    "description": "Content-Type should be application/json"}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "Validation error",    "coupon_id": [        "The coupon id field is required."    ]}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "The checkout already has an assigned coupon."}
```