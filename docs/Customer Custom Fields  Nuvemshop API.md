A custom field allows the store owner/merchant to expand their experience and control their own business through personalized and unique custom fields for customers.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation | Type | Required |
| --- | --- | --- | --- |
| id | The unique universal identifier for the custom field | UUID | false |
| name | Name of the custom field | String | true |
| description | Description of the custom field | String | false |
| value\_type | Custom field type (text\_list, text, numeric, date) | Enum | true |
| owner\_resource | Custom field owner (`customer`) | String | true |
| read\_only | If set to true, it restricts the association of the custom field by merchants via the administrator panel, the merchant can only read the value associated with the custom field. (default value is `false`) | Boolean | false |
| values | A list of all values for a custom field (for value\_type text\_list only, for other types can be an empty array) | Array | true |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### POST /customers/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-customerscustom-fields "Direct link to POST /customers/custom-fields")

Create a new custom field

#### POST /customers/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-customerscustom-fields-1 "Direct link to POST /customers/custom-fields")

```
{  "name": "Client type",  "description": "Indicates the type of customer",  "value_type": "text_list",  "read_only": false,  "values": ["Wholesale", "Retail"]}
```

`HTTP/1.1 201 CREATED`

```
{  "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",  "name": "Client type",  "description": "Indicates the type of customer",  "value_type": "text_list",  "read_only": false,  "owner_resource": "customer",  "values": [    {      "value": "Wholesale",      "created": true    },    {      "value": "Retail",      "created": true    }  ]}
```

`HTTP/1.1 201 CREATED - When some value returns error`

```
{  "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",  "name": "Client type",  "description": "Indicates the type of customer",  "value_type": "text_list",  "read_only": false,  "owner_resource": "customer",  "values": [    {      "value": "Wholesale",      "created": true    },    {      "value": "Retail",      "created": false,      "error": "The custom field value with key <Retail> is duplicated"    }  ]}
```

### GET /customers/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fields "Direct link to GET /customers/custom-fields")

Return a list of all custom fields from a specific owner resource

#### GET /customers/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fields-1 "Direct link to GET /customers/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",    "name": "Client type",    "description": "Indicates the type of customer",    "value_type": "text_list",    "read_only": false,    "owner_resource": "customer",    "values": ["Wholesale", "Retail"]  },  {    "id": "95e8febc-9460-439e-bfbe-d051aaf9e71f",    "name": "Birthday",    "description": "Customer's birthday",    "value_type": "date",    "read_only": false,    "owner_resource": "customer",    "values": []  },  {    "id": "232aff8c-fa13-439e-917e-7cfe8a5dfe21",    "name": "Favorite authors",    "description": "List of customer's favorite authors",    "value_type": "text",    "read_only": false,    "owner_resource": "customer",    "values": []  }]
```

### PUT /customers/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-customerscustom-fieldsid "Direct link to PUT /customers/custom-fields/{id}")

Update the custom field values

#### PUT /customers/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-customerscustom-fieldsid-1 "Direct link to PUT /customers/custom-fields/{id}")

```
{  "values": ["Wholesale + Retail"]}
```

`HTTP/1.1 200 OK`

```
{  "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",  "name": "Client type",  "description": "Indicates the type of customer",  "value_type": "text_list",  "read_only": false,  "owner_resource": "customer",  "values": [    {      "value": "Wholesale",      "created": true    },    {      "value": "Retail",      "created": true    },    {      "value": "Wholesale + Retail",      "created": true    }  ]}
```

### GET /customers/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customersidcustom-fields "Direct link to GET /customers/{id}/custom-fields")

List custom fields associated with a specific customer

#### GET /customers/{id}/custom-fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customersidcustom-fields-1 "Direct link to GET /customers/{id}/custom-fields")

`HTTP/1.1 200 OK`

```
[  {    "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",    "name": "Client type",    "owner_resource": "customer",    "value_type": "text_list",    "source": "app",    "description": "Indicates the type of customer",    "read_only": false,    "value": "Wholesale"  }]
```

### GET /customers/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fieldsidowners "Direct link to GET /customers/custom-fields/{id}/owners")

List customers associated with a specific custom field

#### GET /customers/custom-fields/{id}/owners[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fieldsidowners-1 "Direct link to GET /customers/custom-fields/{id}/owners")

`HTTP/1.1 200 OK`

```
{  "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",  "name": "Client type",  "description": "Indicates the type of customer",  "value_type": "text_list",  "read_only": false,  "owner_resource": "customer",  "values": [    {      "value": "Wholesale",      "created": true    },    {      "value": "Retail",      "created": true    },    {      "value": "Wholesale + Retail",      "created": true    }  ],  "customers": [    {      "id": 1234567,      "value": "Wholesale"    }  ]}
```

### PUT /customers/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-customersidcustom-fieldsvalues "Direct link to PUT /customers/{id}/custom-fields/values")

Update a value associated with a customer.

#### PUT /customers/{id}/custom-fields/values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-customersidcustom-fieldsvalues-1 "Direct link to PUT /customers/{id}/custom-fields/values")

```
[  {    "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",    "value": "Wholesale + Retail"  }]
```

`HTTP/1.1 204 NO CONTENT`

### DELETE /customers/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-customerscustom-fieldsid "Direct link to DELETE /customers/custom-fields/{id}")

Delete a custom field

#### DELETE /customers/custom-fields/f6b3ca8c-2271-4895-b417-14350e6755a7[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-customerscustom-fieldsf6b3ca8c-2271-4895-b417-14350e6755a7 "Direct link to DELETE /customers/custom-fields/f6b3ca8c-2271-4895-b417-14350e6755a7")

`HTTP/1.1 204 NO CONTENT`

### GET /customers/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fieldsid "Direct link to GET /customers/custom-fields/{id}")

List the data of a given customer custom field

#### GET /customers/custom-fields/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-customerscustom-fieldsid-1 "Direct link to GET /customers/custom-fields/{id}")

`HTTP/1.1 200 OK`

```
{  "id": "f6b3ca8c-2271-4895-b417-14350e6755a7",  "name": "Client type",  "owner_resource": "customer",  "value_type": "text_list",  "source": "app",  "description": "Indicates the type of customer",  "read_only": false,  "created_at": "2023-10-10T18:03:14+0000",  "updated_at": "2023-10-10T18:03:14+0000",  "values": [      "Wholesale",      "Retail",      "Wholesale + Retail"  ]}
```

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**How to associate or disassociate a custom-field with a specific customer?** **It's possible to delete all custom-fields with the DELETE endpoint?**