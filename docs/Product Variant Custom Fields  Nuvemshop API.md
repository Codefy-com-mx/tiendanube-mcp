A custom field allows the store owner/merchant to expand their experience and control their own business through personalized and unique custom fields for product variants.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation | Type | Required |
| --- | --- | --- | --- |
| id | The unique universal identifier for the custom field | UUID | false |
| name | Name of the custom field | String | true |
| description | Description of the custom field | String | false |
| value\_type | Custom field type (text\_list, text, numeric, date) | Enum | true |
| owner\_resource | Custom field owner (`product_variant`) | String | true |
| read\_only | If set to true, it restricts the association of the custom field by merchants via the administrator panel, the merchant can only read the value associated with the custom field. (default value is `false`) | Boolean | false |
| values | A list of all values for a custom field (for value\_type text\_list only, for other types can be an empty array) | Array | true |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### POST /products/variants/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-productsvariantscustom-fields "Direct link to POST /products/variants/custom-fields")

Create a new custom field

#### POST /products/variants/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-productsvariantscustom-fields-1 "Direct link to POST /products/variants/custom-fields")

```
{  "name": "Production status",  "description": "Possible product production status",  "value_type": "text_list",  "read_only": false,  "values": ["Started", "In Production", "Finished"]}
```

`HTTP/1.1 201 CREATED`

```
{  "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",  "name": "Production status",  "description": "Possible product production status",  "value_type": "text_list",  "read_only": false,  "owner_resource": "product_variant",  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In Production",      "created": true    },    {      "value": "Finished",      "created": true    }  ]}
```

`HTTP/1.1 201 CREATED - When some value returns error`

```
{  "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",  "name": "Production status",  "description": "Possible product production status",  "value_type": "text_list",  "read_only": false,  "owner_resource": "product_variant",  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In Production",      "created": true    },    {      "value": "Finished",      "created": false,      "error": "The custom field value with key <Finished> is duplicated"    }  ]}
```

### GET /products/variants/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fields "Direct link to GET /products/variants/custom-fields")

Return a list of all custom fields from a specific owner resource

#### GET /products/variants/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fields-1 "Direct link to GET /products/variants/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "0df04fdf-db03-47d0-8c2e-8735e7a55df5",    "name": "Maker",    "description": "Product maker",    "value_type": "text",    "read_only": false,    "owner_resource": "product_variant",    "values": []  },  {    "id": "0e271b50-bf27-433c-84cc-57d88f283e73",    "name": "Age group",    "description": "Age group for the product",    "value_type": "numeric",    "read_only": false,    "owner_resource": "product_variant",    "values": []  }]
```

### PUT /products/variants/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-productsvariantscustom-fieldsid "Direct link to PUT /products/variants/custom-fields/{id}")

Update the custom field values

#### PUT /products/variants/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-productsvariantscustom-fieldsid-1 "Direct link to PUT /products/variants/custom-fields/{id}")

```
{  "values": ["Waiting for supplier"]}
```

`HTTP/1.1 200 OK`

```
{  "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",  "name": "Production status",  "description": "Possible product production status",  "value_type": "text_list",  "read_only": false,  "owner_resource": "product_variant",  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In Production",      "created": true    },    {      "value": "Finished",      "created": true    },    {      "value": "Waiting for supplier",      "created": true    }  ]}
```

### GET /products/variants/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantsidcustom-fields "Direct link to GET /products/variants/{id}/custom-fields")

List custom fields associated with a specific product variant

#### GET /products/variants/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantsidcustom-fields-1 "Direct link to GET /products/variants/{id}/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",    "name": "Production status",    "owner_resource": "product_variant",    "value_type": "text_list",    "source": "app",    "description": "Possible product production status",    "read_only": false,    "value": "Started"  }]
```

### GET /products/variants/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fieldsidowners "Direct link to GET /products/variants/custom-fields/{id}/owners")

List product variants associated with a specific custom field

#### GET /products/variants/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fieldsidowners-1 "Direct link to GET /products/variants/custom-fields/{id}/owners")

`HTTP/1.1 200 OK`

```
{  "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",  "name": "Production status",  "description": "Possible product production status",  "value_type": "text_list",  "read_only": false,  "owner_resource": "product_variant",  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In Production",      "created": true    },    {      "value": "Finished",      "created": true    },    {      "value": "Waiting for supplier",      "created": true    }  ],  "product-variants": [    {      "id": 123456,      "value": "Started"    }  ]}
```

### PUT /products/variants/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-productsvariantsidcustom-fieldsvalues "Direct link to PUT /products/variants/{id}/custom-fields/values")

Update a value associated with a product variant.

#### PUT /products/variants/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-productsvariantsidcustom-fieldsvalues-1 "Direct link to PUT /products/variants/{id}/custom-fields/values")

```
[  {    "id": "d6079ed1-6aaf-4392-8c10-32557e7f93f3",    "value": "Finished"  }]
```

`HTTP/1.1 204 NO CONTENT`

### DELETE /products/variants/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-productsvariantscustom-fieldsid "Direct link to DELETE /products/variants/custom-fields/{id}")

Delete a custom field

#### DELETE /products/variants/custom-fields/d6079ed1-6aaf-4392-8c10-32557e7f93f3[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-productsvariantscustom-fieldsd6079ed1-6aaf-4392-8c10-32557e7f93f3 "Direct link to DELETE /products/variants/custom-fields/d6079ed1-6aaf-4392-8c10-32557e7f93f3")

`HTTP/1.1 204 NO CONTENT`

### GET /products/variants/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fieldsid "Direct link to GET /products/variants/custom-fields/{id}")

List the data of a given product variant custom field

#### GET /products/variants/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-productsvariantscustom-fieldsid-1 "Direct link to GET /products/variants/custom-fields/{id}")

`HTTP/1.1 200 OK`

```
{    "id": "f18ded4b-77b3-4360-ae32-07810993613f",    "name": "Color",    "owner_resource": "product_variant",    "value_type": "text_list",    "source": "admin",    "description": "Color types",    "read_only": false,    "created_at": "2023-03-10T21:42:14+0000",    "updated_at": "2023-03-10T21:42:14+0000",    "values": [        "Yellow",        "Blue",        "White",        "Orange",        "Black",        "Pink",        "Green",        "Red"    ]}
```

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**How to associate or disassociate a custom-field with a specific product variant?** **It's possible to delete all custom-fields with the DELETE endpoint?** **Can this type of custom field be used as a filter in the store?**