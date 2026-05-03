Version: 2025-03

The metafields are Namespaced Key - Value store for Apps.

The metafields can only be associated with the following entities:

-   Product
-   Product\_Variant
-   Category
-   Page
-   Order
-   Customer

To do that you need to set the owner\_resource to one of the above, an example would be owner\_resource='Product'.

An use example would be use it in an app for Bookstores that require associate a book (product) with it's author and genre to provide an advanced search of books by this fields.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation |
| --- | --- |
| id | The unique numeric identifier for the metafield. |
| namespace | The namespace where the metafield makes sense. It can be any string that starts with a letter followed only by: a-z A-Z 0-9 or \_. |
| key | String that identifies the metafield in some namespace. It can be any string that starts with a letter followed only by: a-z A-Z 0-9 or \_. |
| description | String explaining the metafield's meaning (optional). |
| value | Metafield's value (string). |
| owner\_resource | Type of entity to which is associated the metafield. |
| owner\_id | Entity id to which is associated the metaField. |
| created\_at | Date when the Metafield was created in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |
| updated\_at | Date when the Metafield was last updated in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /metafields/{owner\_resource}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-metafieldsowner_resource "Direct link to GET /metafields/{owner_resource}")

-   {owner\_resource} examples are: products, product\_variants, categories and pages

Receive a list of all metafield.

| Parameter | Explanation |
| --- | --- |
| owner\_id | Entity id to which is associated the metaField. |
| namespace | The namespace where the metafield was defined.filter. |
| key | Metafield's key. |
| created\_at\_min | Show Products created after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| created\_at\_max | Show Products created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_min | Show Products last updated after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_max | Show Products last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page | Page to show |
| per\_page | Amount of results |
| fields | Comma-separated list of fields to include in the response |

#### GET /metafields/products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-metafieldsproducts "Direct link to GET /metafields/products")

`HTTP/1.1 200 OK`

```
[    {        "id":10691,        "key":"key3",        "value":"3",        "namespace":"namespace3",        "description":"description3",        "owner_id":2856879,        "owner_resource":"Product",        "created_at":"2015-01-02T19:48:44+0000",        "updated_at":"2015-01-02T19:48:44+0000"    },    {        "id":10692,        "key":"key4",        "value":"4",        "namespace":"namespace4",        "description":"description4",        "owner_id":2856879,        "owner_resource":"Product",        "created_at":"2015-01-02T19:48:44+0000",        "updated_at":"2015-01-02T19:48:44+0000"    }]
```

#### GET /metafields/products?per\_page=3&owner\_id=2856934&created\_at\_min=2013-01-01T00:00:00-03:00&fields=owner\_id,key,value[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-metafieldsproductsper_page3owner_id2856934created_at_min2013-01-01t000000-0300fieldsowner_idkeyvalue "Direct link to GET /metafields/products?per_page=3&owner_id=2856934&created_at_min=2013-01-01T00:00:00-03:00&fields=owner_id,key,value")

`HTTP/1.1 200 OK`

```
[    {        "key":"key3",        "value":"3",        "owner_id":2856934    },    {        "key":"key4",        "value":"4",        "owner_id":2856934    },    {        "key":"key5",        "value":"5",        "owner_id":2856934    }]
```

### GET /metafields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-metafieldsid "Direct link to GET /metafields/{id}")

Receive a single metafield

#### GET /metafields/11896[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-metafields11896 "Direct link to GET /metafields/11896")

`HTTP/1.1 200 OK`

```
{    "id":11896,    "key":"key0",    "value":"0",    "namespace":"namespace0",    "description":"description0",    "owner_id":2856959,    "owner_resource":"Product",    "created_at":"2015-01-02T20:01:50+0000",    "updated_at":"2015-01-02T20:01:50+0000"}
```

### POST /metafields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-metafields "Direct link to POST /metafields")

Create a new metafield

| Parameter | Explanation |
| --- | --- |
| key | The value is mandatory and it can be any string that starts with a letter followed only by: a-z A-Z 0-9 or \_. |
| value | The value is mandatory and it can be any string. |
| namespace | The value is mandatory and it can be any string that starts with a letter followed only by: a-z A-Z 0-9 or \_. |
| description | (Optional) Can have some description that shows the use of this metafield. |
| owner\_id | The value is mandatory and must exist an entity of the owner\_resource type with that id. |
| owner\_resource | The value is mandatory and can be only the allowed values mentioned at the beginning of this documentation. |

#### POST /metafields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-metafields-1 "Direct link to POST /metafields")

```
{    "key": "key",    "value": "value",    "namespace": "namespace",    "description": "description",    "owner_id": "2857023",    "owner_resource": "Product"}
```

`HTTP/1.1 201 Created`

```
{    "id":12877,    "namespace":"namespace",    "description":"description",    "key":"key","value":"value",    "owner_id":2857023,    "owner_resource": "Product",    "created_at":"2015-01-02 20:27:51",    "updated_at":"2015-01-02 20:27:51",    "deleted_at":null}
```

### PUT /metafields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-metafieldsid "Direct link to PUT /metafields/{id}")

Modify an existing metafield. You can update the metafield value or/and the description associated.

#### PUT /metafields/32967[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-metafields32967 "Direct link to PUT /metafields/32967")

```
{    "value": "modified",    "description": "description modified"}
```

`HTTP/1.1 200 OK`

```
{    "id":13226,    "key":"key0",    "value":"modified",    "namespace":"namespace0",    "description":"description modified",    "owner_id":2857047,    "owner_resource":"Product",    "created_at":"2015-01-02T20:32:08+0000",    "updated_at":"2015-01-02T20:32:09+0000"}
```

### DELETE /metafields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-metafieldsid "Direct link to DELETE /metafields/{id}")

Delete an existing metafield

#### DELETE /metafields/13226[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-metafields13226 "Direct link to DELETE /metafields/13226")

`HTTP/1.1 200 OK`