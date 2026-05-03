A Location of the store where physical goods reside.

## Scopes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#scopes "Direct link to Scopes")

| Property | Explanation |
| --- | --- |
| read\_locations | Required for all GET resources. |
| write\_locations | Required for all POST/PUT/DELETE resources. |

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation | Required |
| --- | --- | --- |
| id | The unique numeric identifier for the Location | read-only |
| name | Localized Location Name | Yes |
| address | The Address of the Location | Yes |
| is\_default | "true" if it is the default Location, "false" otherwise | No |
| priority | Priority of the location to assign stock during checkout. The lower the value the higher the priority | No |
| created\_at | Date when the Location was created in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) | read-only |
| updated\_at | Date when the Location was last updated in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) | read-only |

## Address Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address-properties "Direct link to Address Properties")

| Property | Explanation | Required |
| --- | --- | --- |
| zipcode | The address zipcode. | Yes |
| street | The address street. | Yes |
| number | The address number. | No |
| floor | The address floor. Brazil complement. | No |
| locality | The address locality. Brazil neighborhood. | No |
| city | The address city name. | Yes |
| reference | The address reference. | No |
| between\_streets | The address bwtween streets reference. | No |
| province | The address Province. | Yes |
| region | The address Region. | Yes |
| country | The address Country. | Yes |
| verified\_at | Date when the Location Address was verified in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) | No |

## Address Province Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address-province-properties "Direct link to Address Province Properties")

| Property | Explanation |
| --- | --- |
| name | The address province name. |
| code | The address province code. |

## Address Region Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address-region-properties "Direct link to Address Region Properties")

| Property | Explanation |
| --- | --- |
| name | The address region name. |
| code | The address region code. |

## Address Country Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address-country-properties "Direct link to Address Country Properties")

| Property | Explanation |
| --- | --- |
| name | The address country name. |
| code | The address country code. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /locations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locations "Direct link to GET /locations")

Receive a list of all Locations.

#### GET /locations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locations-1 "Direct link to GET /locations")

`HTTP/1.1 200 OK`

```
[    {      "id": "01HTMFDH09VC6E2Q8KGTGP44D3",      "name": {        "es_AR": "Nombre en espanol",        "pt_BR": "Nome em português",        "en_US": "Name in english"      },      "store_id": "12345",      "priority": 0,      "address": {        "zipcode": "12910802",        "street": "St Louis",        "number": "01",        "floor": "Floor",        "locality": "Locality",        "city": "São Paulo",        "province": {          "code": "SP",          "name": "São Paulo"        },        "region": {          "code": "SE",          "name": "São Paulo"        },        "country": {          "code": "BR",          "name": "São Paulo"        },        "reference": "tiendanube's close",        "between_streets": "St Mark Third",        "verified_at": "1997-07-16T19:20:30+01:00"      },      "is_default": true,      "created_at": "1997-07-16T19:20:30+01:00",      "updated_at": "1997-07-16T19:20:30+01:00"    },    {      "id": "01HTMFFHWXRC8TRS40M43XGQFB",      "name": {        "es_AR": "Nombre en espanol",        "pt_BR": "Nome em português",        "en_US": "Name in english"      },      "store_id": "12345",      "priority": 1,      "address": {        "zipcode": "12910802",        "street": "St Louis",        "number": "01",        "floor": "Floor",        "locality": "Locality",        "city": "São Paulo",        "province": {          "code": "SP",          "name": "São Paulo"        },        "region": {          "code": "SE",          "name": "São Paulo"        },        "country": {          "code": "BR",          "name": "São Paulo"        },        "reference": "tiendanube's close",        "between_streets": "St Mark Third",        "verified_at": "1997-07-17T19:20:30+01:00"      },      "is_default": true,      "created_at": "1997-07-17T19:20:30+01:00",      "updated_at": "1997-07-17T19:20:30+01:00"    }]
```

### GET /locations/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locationsid "Direct link to GET /locations/{id}")

Receive a single Location

#### GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locations01htmfdh09vc6e2q8kgtgp44d3 "Direct link to GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3")

`HTTP/1.1 200 OK`

```
{   "id": "01HTMFDH09VC6E2Q8KGTGP44D3",   "name": {        "es_AR": "Nombre en espanol",        "pt_BR": "Nome em português",        "en_US": "Name in english"   },   "store_id": "12345",   "priority": 0,   "address": {      "zipcode": "12910802",      "street": "St Louis",      "number": "01",      "floor": "Floor",      "locality": "Locality",      "city": "São Paulo",      "province": {         "code": "SP",         "name": "São Paulo"      },      "region": {         "code": "SE",         "name": "São Paulo"      },      "country": {         "code": "BR",         "name": "São Paulo"      },      "reference": "tiendanube's close",      "between_streets": "St Mark Third",      "verified_at": "1997-07-16T19:20:30+01:00"   },   "is_default": true,   "created_at": "1997-07-16T19:20:30+01:00",   "updated_at": "1997-07-16T19:20:30+01:00"}
```

### POST /locations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-locations "Direct link to POST /locations")

Create a new Location

#### POST /locations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-locations-1 "Direct link to POST /locations")

```
{  "name": {    "es_AR": "Nombre en espanol",    "pt_BR": "Nome em português",    "en_US": "Name in english"  },  "address": {    "zipcode": "12910802",    "street": "Some place",    "number": "12",    "floor": "AP1",    "locality": "Locality",    "reference": "REF12",    "between_streets": "Some place between",    "city": "São Paulo",    "province": {      "code": "SP",      "name": "São Paulo"    },    "region": {      "code": "SE",      "name": "Sudeste"    },    "country": {      "code": "BR",      "name": "Brazil"    }  }}
```

`HTTP/1.1 201 Created`

```
{   "id": "01HTMFDH09VC6E2Q8KGTGP44D3",   "name": {     "es_AR": "Nombre en espanol",     "pt_BR": "Nome em português",     "en_US": "Name in english"   },   "store_id": "12345",   "priority": 0,   "address": {      "zipcode": "12910802",      "street": "12910802",      "number": "Some place",      "floor": "AP1",      "locality": "Locality",      "city": "São Paulo",      "province": {         "code": "SP",         "name": "São Paulo"      },      "region": {         "code": "SE",         "name": "Sudeste"      },      "country": {         "code": "BR",         "name": "Brazil"      },      "reference": "REF12",      "between_streets": "Some place between",      "verified_at": "1997-07-16T19:20:30+01:00"   },   "is_default": true,   "created_at": "1997-07-16T19:20:30+01:00",   "updated_at": "1997-07-16T19:20:30+01:00"}
```

### PATCH /locations/priorities[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-locationspriorities "Direct link to PATCH /locations/priorities")

Change priorities of all existing locations from store. On change priority the Location with priority 0 will be updated as default.

#### PATCH /locations/priorities[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-locationspriorities-1 "Direct link to PATCH /locations/priorities")

```
[  {    "id": "01HSY0PDQCTWCEKH6Y23W0P2VR",    "priority": 0  },  {    "id": "01HSY0MVKDRAXEZ45B91EGVEJX",    "priority": 2  },  {    "id": "01HSY0PNSV30VZ9F35VCDE0C52",    "priority": 1  }]
```

`HTTP/1.1 200 Ok`

```
[  {    "id": "01HSY0PDQCTWCEKH6Y23W0P2VR",    "priority": 0  },  {    "id": "01HSY0MVKDRAXEZ45B91EGVEJX",    "priority": 2  },  {    "id": "01HSY0PNSV30VZ9F35VCDE0C52",    "priority": 1  }]
```

### PUT /locations/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-locationsid "Direct link to PUT /locations/{id}")

Modify an existing Location

#### PUT /locations/01HTMFDH09VC6E2Q8KGTGP44D3[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-locations01htmfdh09vc6e2q8kgtgp44d3 "Direct link to PUT /locations/01HTMFDH09VC6E2Q8KGTGP44D3")

```
{  "name": {    "es_AR": "Nombre en espanol",    "pt_BR": "Nome em português",    "en_US": "Name in english"  },  "address": {    "zipcode": "12910802",    "street": "Some place",    "number": "12",    "floor": "AP1",    "locality": "Locality",    "reference": "REF12",    "between_streets": "Some place between",    "city": "São Paulo",    "province": {      "code": "SP",      "name": "São Paulo"    },    "region": {      "code": "SE",      "name": "Sudeste"    },    "country": {      "code": "BR",      "name": "Brazil"    }  }}
```

`HTTP/1.1 200 Ok`

```
{   "id": "01HTMFDH09VC6E2Q8KGTGP44D3",   "name": {    "es_AR": "Nombre en espanol",    "pt_BR": "Nome em português",    "en_US": "Name in english"   },   "store_id": "12345",   "priority": 0,   "address": {      "zipcode": "12910802",      "street": "12910802",      "number": "Some place",      "floor": "AP1",      "locality": "Locality",      "city": "São Paulo",      "province": {         "code": "SP",         "name": "São Paulo"      },      "region": {         "code": "SE",         "name": "Sudeste"      },      "country": {         "code": "BR",         "name": "Brazil"      },      "reference": "REF12",      "between_streets": "Some place between",      "verified_at": "1997-07-16T19:20:30+01:00"   },   "is_default": true,   "created_at": "1997-07-16T19:20:30+01:00",   "updated_at": "1997-07-16T19:20:30+01:00"}
```

### DELETE /locations/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-locationsid "Direct link to DELETE /locations/{id}")

Delete an existing Location, and repreorize remains locations. For the deletion to be successful the Location should not have any inventory levels assigned and Locantion can\`t be default.

#### DELETE /locations/01HTMFDH09VC6E2Q8KGTGP44D3[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-locations01htmfdh09vc6e2q8kgtgp44d3 "Direct link to DELETE /locations/01HTMFDH09VC6E2Q8KGTGP44D3")

`HTTP/1.1 204 No Content`

### PATCH /locations/{id}/chosen-as-default[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-locationsidchosen-as-default "Direct link to PATCH /locations/{id}/chosen-as-default")

Change an existing Location to default and priority 0, and repreorize other locations. For the change to be successfull the Location should have priority greatter than 0.

#### PATCH /locations/01HSY0MVKDRAXEZ45B91EGVEJX/chosen-as-default[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-locations01hsy0mvkdraxez45b91egvejxchosen-as-default "Direct link to PATCH /locations/01HSY0MVKDRAXEZ45B91EGVEJX/chosen-as-default")

`HTTP/1.1 200 Ok`

```
{   "id": "01HSY0MVKDRAXEZ45B91EGVEJX",   "name": {    "es_AR": "Nombre en espanol",    "pt_BR": "Nome em português",    "en_US": "Name in english"   },   "store_id": "12345",   "priority": 0,   "address": {      "zipcode": "12910802",      "street": "12910802",      "number": "Some place",      "floor": "AP1",      "locality": "Locality",      "city": "São Paulo",      "province": {         "code": "SP",         "name": "São Paulo"      },      "region": {         "code": "SE",         "name": "Sudeste"      },      "country": {         "code": "BR",         "name": "Brazil"      },      "reference": "REF12",      "between_streets": "Some place between",      "verified_at": "1997-07-16T19:20:30+01:00"   },   "is_default": true,   "created_at": "1997-07-16T19:20:30+01:00",   "updated_at": "1997-07-16T19:20:30+01:00"}
```

### GET /locations/{id}/inventory-levels[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locationsidinventory-levels "Direct link to GET /locations/{id}/inventory-levels")

Receive the inventory levels assigned to a particular Location.

| Parameter | Explanation |
| --- | --- |
| variant\_id | Filter only the inventory level of this [Product Variant](https://tiendanube.github.io/api-documentation/resources/product-variant) |
| page | Page to show (optional, default: 1) |
| per\_page | Amount of results (optional, default: 1) |

#### GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3/inventory-levels?page=1&per\_page=10[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locations01htmfdh09vc6e2q8kgtgp44d3inventory-levelspage1per_page10 "Direct link to GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3/inventory-levels?page=1&per_page=10")

`HTTP/1.1 200 OK`

```
{  "total": 4,  "page": 1,  "per_page": 10,  "results": [    {        "id": "1",        "variant_id": "101",        "location_id": "01HTMFDH09VC6E2Q8KGTGP44D3",        "stock": 1,        "created_at": "2022-09-19T10:46:32+0000",        "updated_at": "2022-09-19T10:46:32+0000"    },    {        "id": "2",        "variant_id": "102",        "location_id": "01HTMFDH09VC6E2Q8KGTGP44D3",        "stock": 1,        "created_at": "2022-09-19T10:46:32+0000",        "updated_at": "2022-09-19T10:46:32+0000"    },    {        "id": "3",        "variant_id": "103",        "location_id": "01HTMFDH09VC6E2Q8KGTGP44D3",        "stock": 1,        "created_at": "2022-09-19T10:46:32+0000",        "updated_at": "2022-09-19T10:46:32+0000"    },    {        "id": "4",        "variant_id": "104",        "location_id": "01HTMFDH09VC6E2Q8KGTGP44D3",        "stock": 1,        "created_at": "2022-09-19T10:46:32+0000",        "updated_at": "2022-09-19T10:46:32+0000"    }  ]}
```

#### GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3/inventory-levels?page=1&per\_page=10&variant\_id=101[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-locations01htmfdh09vc6e2q8kgtgp44d3inventory-levelspage1per_page10variant_id101 "Direct link to GET /locations/01HTMFDH09VC6E2Q8KGTGP44D3/inventory-levels?page=1&per_page=10&variant_id=101")

`HTTP/1.1 200 OK`

```
{  "total": 4,  "page": 1,  "per_page": 10,  "results": [    {        "id": "1",        "variant_id": "101",        "location_id": "01HTMFDH09VC6E2Q8KGTGP44D3",        "stock": 1,        "created_at": "2022-09-19T10:46:32+0000",        "updated_at": "2022-09-19T10:46:32+0000"    }  ]}
```

## Webhooks[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhooks "Direct link to Webhooks")

Location Webhooks allow applications to receive automatic notifications whenever a Location is created, updated, or deleted in the store.

### Available Events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#available-events "Direct link to Available Events")

| Event | Description | When it is triggered |
| --- | --- | --- |
| `location/created` | Notifies when a new Location is created | When a new Location is successfully created in the store |
| `location/updated` | Notifies when a Location is updated | When any attribute of a Location is modified (name, address, priority, etc.) |
| `location/deleted` | Notifies when a Location is deleted | When a Location is permanently removed from the store |

### Payload Structure[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payload-structure "Direct link to Payload Structure")

All Location webhooks share a common payload structure with the following fields:

-   **store\_id**: ID of the store where the event occurred
-   **event**: Name of the triggered event
-   **id**: Unique ID of the Location

#### location/created[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#locationcreated "Direct link to location/created")

Triggered when a new Location is created.

```
{  "store_id": "5145204",  "event": "location/created",  "id": "01HTMFDH09VC6E2Q8KGTGP44D3"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`location/created`)
-   `id`: Unique Location ID

#### location/updated[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#locationupdated "Direct link to location/updated")

Triggered when a Location is updated.

```
{  "store_id": "5145204",  "event": "location/updated",  "id": "01HTMFDH09VC6E2Q8KGTGP44D3"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`location/updated`)
-   `id`: Unique Location ID

#### location/deleted[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#locationdeleted "Direct link to location/deleted")

Triggered when a Location is deleted.

```
{  "store_id": "5145204",  "event": "location/deleted",  "id": "01HTMFDH09VC6E2Q8KGTGP44D3"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`location/deleted`)
-   `id`: Unique Location ID

### Webhook Registration[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhook-registration "Direct link to Webhook Registration")

To receive notifications for these events, you must register webhooks through the Webhooks API.

See the [complete Webhooks documentation](https://tiendanube.github.io/api-documentation/resources/webhook) for detailed information on how to create, update, and manage your webhooks.

**Registration example:**

```
{  "event": "location/created",  "url": "https://api.partner.com/webhooks/location"}
```

### Required Scopes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#required-scopes "Direct link to Required Scopes")

To receive Location webhooks, your application must have the following scopes:

| Scope | Description |
| --- | --- |
| `read_locations` | Allows receiving notifications about Locations |
| `write_locations` | Required for write operations on Locations |

### Important Considerations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#important-considerations "Direct link to Important Considerations")

-   **Idempotency**: Webhooks should be implemented in an idempotent way, as the same event may be sent multiple times
-   **Timeout**: Your application must respond within 10 seconds with an HTTP 2xx status code
-   **Delivery Order**: Events are sent in order of emission, but may be processed asynchronously
-   **Security**: It is recommended to validate the origin of requests using the `x-linkedstore-hmac-sha256` header (see [Webhook Verification](https://tiendanube.github.io/api-documentation/resources/webhook#verifying-a-webhook))
-   **Format**: The request body will always be `application/json` and will contain the `event` field
-   **Retries**: In case of failure, the system will perform automatic retries according to the [retry policy](https://tiendanube.github.io/api-documentation/resources/webhook#retry-policies)