A custom field allows the store owner/merchant to expand their experience and control their own business through personalized and unique custom fields for orders.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation | Type | Required |
| --- | --- | --- | --- |
| id | The unique universal identifier for the custom field | UUID | false |
| name | Name of the custom field | String | true |
| description | Description of the custom field | String | false |
| value\_type | Custom field type (text\_list, text, numeric, date) | Enum | true |
| owner\_resource | Custom field owner (`order`) | String | true |
| read\_only | If set to true, it restricts the association of the custom field by merchants via the administrator panel, the merchant can only read the value associated with the custom field. (default value is `false`) | Boolean | false |
| values | A list of all values for a custom field (for value\_type text\_list only, for other types can be an empty array) | Array | true |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### POST /orders/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orderscustom-fields "Direct link to POST /orders/custom-fields")

Create a new custom field

#### POST /orders/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orderscustom-fields-1 "Direct link to POST /orders/custom-fields")

```
{  "name": "Delivery status",  "description": "Possible delivery status",  "value_type": "text_list",  "read_only": false,  "values": ["Started", "In transit", "Finished"]}
```

`HTTP/1.1 201 CREATED`

```
{  "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",  "owner_resource": "order",  "name": "Delivery status",  "description": "Possible delivery status",  "read_only": false,  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In transit",      "created": true    },    {      "value": "Finished",      "created": true    }  ]}
```

`HTTP/1.1 201 CREATED - When some value returns error`

```
{  "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",  "owner_resource": "order",  "name": "Delivery status",  "description": "Possible delivery status",  "read_only": false,  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In transit",      "created": true    },    {      "value": "Finalizada",      "created": false,      "error": "The custom field value with key <Finalizada> is duplicated"    }  ]}
```

### GET /orders/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fields "Direct link to GET /orders/custom-fields")

Return a list of all custom fields from a specific owner resource

#### GET /orders/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fields-1 "Direct link to GET /orders/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "0df04fdf-db03-47d0-8c2e-8735e7a55df5",    "name": "Notes",    "owner_resource": "order",    "value_type": "text",    "description": "Invoice notes",    "read_only": false,    "values": []  },  {    "id": "0e271b50-bf27-433c-84cc-57d88f283e73",    "name": "Delivery date",    "owner_resource": "order",    "value_type": "date",    "description": "Product delivery date",    "read_only": false,    "values": []  }]
```

### PUT /orders/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-orderscustom-fieldsid "Direct link to PUT /orders/custom-fields/{id}")

Update the custom field values

#### PUT /orders/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-orderscustom-fieldsid-1 "Direct link to PUT /orders/custom-fields/{id}")

```
{  "values": ["Canceled"]}
```

`HTTP/1.1 200 OK`

```
{  "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",  "owner_resource": "order",  "name": "Delivery status",  "description": "Possible delivery status",  "read_only": false,  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In transit",      "created": true    },    {      "value": "Finished",      "created": true    },    {      "value": "Canceled",      "created": true    }  ]}
```

### GET /orders/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidcustom-fields "Direct link to GET /orders/{id}/custom-fields")

List custom fields associated with a specific order

#### GET /orders/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersidcustom-fields-1 "Direct link to GET /orders/{id}/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",    "name": "Delivery status",    "owner_resource": "order",    "value_type": "text_list",    "source": "app",    "description": "Possible delivery status",    "read_only": false,    "value": "Started"  }]
```

### GET /orders/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fieldsidowners "Direct link to GET /orders/custom-fields/{id}/owners")

List orders associated with a specific custom field

#### GET /orders/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fieldsidowners-1 "Direct link to GET /orders/custom-fields/{id}/owners")

`HTTP/1.1 200 OK`

```
{  "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",  "owner_resource": "order",  "name": "Delivery status",  "description": "Possible delivery status",  "read_only": false,  "values": [    {      "value": "Started",      "created": true    },    {      "value": "In transit",      "created": true    },    {      "value": "Finished",      "created": true    },    {      "value": "Canceled",      "created": true    }  ],  "orders": [    {      "id": 123456,      "value": "Started"    }  ]}
```

### PUT /orders/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-ordersidcustom-fieldsvalues "Direct link to PUT /orders/{id}/custom-fields/values")

Update a value associated with a order on order details.

#### PUT /orders/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-ordersidcustom-fieldsvalues-1 "Direct link to PUT /orders/{id}/custom-fields/values")

```
[  {    "id": "9dda74d1-5dc9-43bd-90e2-4dce3b5f3835",    "value": "In transit"  }]
```

`HTTP/1.1 204 NO CONTENT`

### DELETE /orders/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-orderscustom-fieldsid "Direct link to DELETE /orders/custom-fields/{id}")

Delete a custom field

#### DELETE /orders/custom-fields/9dda74d1-5dc9-43bd-90e2-4dce3b5f3835[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-orderscustom-fields9dda74d1-5dc9-43bd-90e2-4dce3b5f3835 "Direct link to DELETE /orders/custom-fields/9dda74d1-5dc9-43bd-90e2-4dce3b5f3835")

`HTTP/1.1 204 NO CONTENT`

### GET /orders/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fieldsid "Direct link to GET /orders/custom-fields/{id}")

List the data of a given order custom field

#### GET /orders/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orderscustom-fieldsid-1 "Direct link to GET /orders/custom-fields/{id}")

`HTTP/1.1 200 OK`

```
{    "id": "40685075-a317-4fa0-87ae-a5946723ce5a",    "name": "Status",    "owner_resource": "order",    "value_type": "text_list",    "source": "admin",    "description": "Types of order status",    "read_only": false,    "created_at": "2023-04-03T18:06:54+0000",    "updated_at": "2023-04-03T18:06:54+0000",    "values": [        "Finished",        "In Progess",        "Pending"    ]}
```

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**How to associate or disassociate a custom-field with a specific order?** **It's possible to delete all custom-fields with the DELETE endpoint?**