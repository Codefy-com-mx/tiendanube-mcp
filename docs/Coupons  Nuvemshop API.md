A discount coupon is a promotional tool that allows a store to offer savings to its customers. There are three types of coupons available:

-   **Percentage:** Applies a discount based on a percentage of the cart total.
-   **Absolute Value:** Reduces the cart total by a specific, fixed amount.
-   **Free Shipping:** Eliminates the shipping cost without affecting the value of the products in the cart.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation |
| --- | --- |
| id | The unique numeric identifier for the coupon. |
| code | String that identifies the coupon. |
| type | Type of the coupon. Can take the following values: percentage, absolute or shipping. |
| valid | Indicates if the coupon is valid (`true`) or not (`false`). |
| start\_date | Date from which the coupon is valid. |
| end\_date | Date of overdue of the coupon. |
| deleted\_at | Date when the coupon was deleted. The value is NULL if the coupon is still valid. |
| max\_uses | Max number of times the coupon can be used. |
| value | Value of the discount. |
| includes\_shipping | Indicates if the coupon also applies to shipping costs (`true`) or not (`false`). |
| first\_consumer\_purchase | Indicates if the coupon applies only to the first purchase of a consumer based on the email and/or personal ID. |
| min\_price | Indicates the minimum value of the bill for applying the discount. |
| categories | List of [Category](https://tiendanube.github.io/api-documentation/resources/category) objects representing the categories of the store to which the discount applies. |
| products | List of [Product](https://tiendanube.github.io/api-documentation/resources/product) objects representing the products of the store to which the discount applies. |
| combines\_with\_other\_discounts | Indicates if the coupon is combinable with other promotions or discounts. |
| only\_cheapest\_shipping | Indicates if the coupon only applies to the cheapest eligible shipping option. Effective only for `type = shipping` coupons; ignored otherwise. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /coupons[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-coupons "Direct link to GET /coupons")

Retrieve the list of all coupons.

#### Filtering Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#filtering-properties "Direct link to Filtering Properties")

| Parameter | Explanation |
| --- | --- |
| q | The coupon's code to filter. |
| min\_start\_date | The minimum start\_date to filter. |
| min\_end\_date | The minimum end\_date to filter. |
| max\_start\_date | The maximum start\_date to filter. |
| max\_end\_date | The maximum end\_date to filter. |
| valid | Flag (true of false) for filtering valid coupons. |
| status | Coupon's status for filtering coupons. One of: `activated`, `deactivated`. |
| limitation\_type | Coupon's limitation for filtering coupons. One of: `quantity`, `cart_value`, `categories`. |
| term\_type | Coupon's term limitation for filtering coupons. One of: `unlimited`, `limited`. |
| discount\_type | Coupon's discount type for filtering coupons. One of: `percentage`, `absolute`, `shipping`. |
| includes\_shipping | Coupon that apply to shipping costs for filtering coupons. |
| sort\_by | Attribute for ordering coupons. One of: `created-at-ascending`, `created-at-descending`, `alpha-ascending`, `alpha-descending`, `uses-ascending`, `uses-descending`. |
| created\_at\_min | Show Products created after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)). |
| created\_at\_max | Show Products created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)). |
| updated\_at\_min | Show Products last updated after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)). |
| updated\_at\_max | Show Products last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)). |
| page | Page to show. |
| per\_page | Amount of results. |
| fields | Comma-separated list of fields to include in the response. |

#### GET /coupons[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-coupons-1 "Direct link to GET /coupons")

`HTTP/1.1 200 OK`

**Response**

#### GET /coupons?valid=true[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-couponsvalidtrue "Direct link to GET /coupons?valid=true")

`HTTP/1.1 200 OK`

**Response**

### GET /coupons/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-couponsid "Direct link to GET /coupons/{id}")

Retrieve a single coupon.

#### GET /coupons/32964[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-coupons32964 "Direct link to GET /coupons/32964")

`HTTP/1.1 200 OK`

**Response**

### POST /coupons[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-coupons "Direct link to POST /coupons")

Create a new coupon.

#### Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties-1 "Direct link to Properties")

| Parameter | Explanation | Required |
| --- | --- | --- |
| code | Must be unique and can contain only alphanumeric characters. | True |
| type | One of: `percentage`, `absolute`, `shipping`. | True |
| value | The value is mandatory if the type is percentage or absolute. | False |
| start\_date | Must be a datetime. | False |
| end\_date | Must be a datetime. | False |
| categories | A List of Category IDs. Cannot be combined with `products`. | False |
| products | A List of Product IDs. Cannot be combined with `categories`. | False |
| min\_price | Must be a numeric value with greater than or equal to zero. | False |
| valid | Must be a boolean. | False |
| includes\_shipping | Must be a boolean. | False |
| first\_consumer\_purchase | Must be a boolean. | False |
| combines\_with\_other\_discounts | Must be a boolean. Defaults to `true`. | False |
| only\_cheapest\_shipping | Must be a boolean. Defaults to `false`. | False |

**Payload**

`HTTP/1.1 201 Created`

**Response**

### PUT /coupons/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-couponsid "Direct link to PUT /coupons/{id}")

Modify an existing coupon.

#### PUT /coupons/32967[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-coupons32967 "Direct link to PUT /coupons/32967")

**Payload**

`HTTP/1.1 200 OK`

**Response**

### DELETE /coupons/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-couponsid "Direct link to DELETE /coupons/{id}")

Delete an existing coupon.

#### DELETE /coupons/32967[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-coupons32967 "Direct link to DELETE /coupons/32967")

`HTTP/1.1 200 OK`