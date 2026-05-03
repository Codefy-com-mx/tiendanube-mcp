Version: 2025-03

A Category lets the store owner group his/her products to make the store easier to browse.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Property | Explanation |
| --- | --- |
| id | The unique numeric identifier for the Category |
| name | List of the names of the Category, in every language supported by the store |
| description | List of the descriptions of the Category, as HTML, in every language supported by the store |
| handle | List of the url-friendly strings generated from the Category's names, in every language supported by the store |
| parent | Id of the Category's parent. _null_ if it has no parent |
| visibility | Represents the visibility status of a category within the category tree. Possible values are: `visible`, `hidden`, and `soft-hidden`. The `soft-hidden` value is automatically assigned when a category inherits visibility from a hidden parent and cannot be set manually. Please see the [FAQ](https://tiendanube.github.io/api-documentation/resources/category#faq) section for more details about visibility rules. |
| visibility\_updated\_at | Date when the visibility field was last updated, in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |
| subcategories | The ids of the Category's first level subcategories |
| google\_shopping\_category | Attributes used to categorize an item. This category is selected from the Google’s taxonomy. The full list of product categories can be found here: [ES](https://www.google.com/basepages/producttype/taxonomy.es-ES.txt) - [PT](https://www.google.com/basepages/producttype/taxonomy.pt-BR.txt) |
| created\_at | Date when the Category was created in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |
| updated\_at | Date when the Category was last updated in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-categories "Direct link to GET /categories")

Receive a list of all Categories.

| Parameter | Explanation |
| --- | --- |
| since\_id | Restrict results to after the specified ID |
| language | Specify search language (required when serching for handle) |
| handle | Show Categories with a given URL |
| parent\_id | Show Categories with a given parent category |
| created\_at\_min | Show Categories created after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| created\_at\_max | Show Categories created before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_min | Show Categories last updated after date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| updated\_at\_max | Show Categories last updated before date ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) |
| page | Page to show |
| per\_page | Amount of results |
| fields | Comma-separated list of fields to include in the response |

#### GET /categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-categories-1 "Direct link to GET /categories")

`HTTP/1.1 200 OK`

```
[    {      "created_at": "2013-01-03T09:11:51-03:00",      "description": {          "en": "",          "es": "",          "pt": ""      },      "handle": {          "en": "poke-balls",          "es": "poke-balls",          "pt": "poke-balls"      },      "id": 4567,      "name": {          "en": "Poké Balls",          "es": "Poké Balls",          "pt": "Poké Balls"      },      "parent": null,      "subcategories": [],      "visibility": "hidden",      "visibility_updated_at": "2025-03-12T10:43:45+00:00",      "google_shopping_category": null,      "updated_at": "2013-03-11T09:14:11-03:00"    }]
```

#### GET /categories?fields=id,name,subcategories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-categoriesfieldsidnamesubcategories "Direct link to GET /categories?fields=id,name,subcategories")

`HTTP/1.1 200 OK`

```
[    {      "id": 4567,      "name": {          "en": "Poké Balls",          "es": "Poké Balls",          "pt": "Poké Balls"      },      "subcategories": []    }]
```

### GET /categories/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-categoriesid "Direct link to GET /categories/{id}")

Receive a single Category

| Parameter | Explanation |
| --- | --- |
| fields | Comma-separated list of fields to include in the response |

#### GET /categories/4567[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-categories4567 "Direct link to GET /categories/4567")

`HTTP/1.1 200 OK`

```
{  "created_at": "2013-01-03T09:11:51-03:00",  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "poke-balls",      "es": "poke-balls",      "pt": "poke-balls"  },  "id": 4567,  "name": {      "en": "Poké Balls",      "es": "Poké Balls",      "pt": "Poké Balls"  },  "parent": null,  "subcategories": [],  "visibility": "visible",  "visibility_updated_at": "2025-03-12T10:43:45+00:00",  "google_shopping_category": null,   "updated_at": "2013-03-11T09:14:11-03:00"}
```

### POST /categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-categories "Direct link to POST /categories")

Create a new Category

#### POST /categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-categories-1 "Direct link to POST /categories")

```
{    "invalid_name": "foobar"}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "name": [      "can't be blank"    ]}
```

`HTTP/1.1 422 Unprocessable Entity`

```
{    "code": 422,    "message": "Unprocessable Entity",    "description": "Store has reached maximum limit of 1000 allowed categories"}
```

#### POST /categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-categories-2 "Direct link to POST /categories")

```
{    "name": {      "en": "Gen I",      "es": "Gen I",      "pt": "Gen I"    },    "parent": 4567,  "google_shopping_category": "Clothing & Accessories > Jewelry"}
```

`HTTP/1.1 201 Created`

```
{  "created_at": "2013-06-01T12:15:11-03:00",  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "gen-i",      "es": "gen-i",      "pt": "gen-i"  },  "id": 5678,  "name": {      "en": "Gen I",      "es": "Gen I",      "pt": "Gen I"  },  "parent": 4567,  "google_shopping_category": "Clothing & Accessories > Jewelry",  "subcategories": [],  "visibility": "visible",  "visibility_updated_at": "2025-03-12T10:43:45+00:00",  "updated_at": "2013-06-01T12:15:11-03:00"}
```

#### Create a hidden category[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#create-a-hidden-category "Direct link to Create a hidden category")

```
{    "name": {      "en": "Gen I",      "es": "Gen I",      "pt": "Gen I"    },    "visibility": "hidden"}
```

`HTTP/1.1 201 Created`

```
{  "id": 5680,  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "gen-i",      "es": "gen-i",      "pt": "gen-i"  },  "name": {      "en": "Gen I",      "es": "Gen I",      "pt": "Gen I"  },  "google_shopping_category": "",  "subcategories": [],  "visibility": "hidden",  "visibility_updated_at": "2025-03-12T10:43:45+00:00",  "created_at": "2013-06-01T12:15:11-03:00",  "updated_at": "2025-03-12T10:43:45+00:00"}
```

### PUT /categories/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-categoriesid "Direct link to PUT /categories/{id}")

Modify an existing Category

#### PUT /categories/5678[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-categories5678 "Direct link to PUT /categories/5678")

```
{  "id": 5678,  "parent": null}
```

`HTTP/1.1 200 OK`

```
{  "created_at": "2013-06-01T12:15:11-03:00",  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "gen-i",      "es": "gen-i",      "pt": "gen-i"  },  "id": 5678,  "name": {      "en": "Gen I",      "es": "Gen I",      "pt": "Gen I"  },  "parent": null,  "subcategories": [],  "google_shopping_category": null,  "updated_at": "2013-06-01T12:15:11-03:00"}
```

#### Update the category visibility[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#update-the-category-visibility "Direct link to Update the category visibility")

Given a category

```
{  "id": 1234,  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "clothes",      "es": "clothes",      "pt": "clothes"  },  "name": {      "en": "Clothes",      "es": "Ropa",      "pt": "Roupas"  },  "google_shopping_category": "",  "subcategories": [],  "visibility": "hidden",  "visibility_updated_at": "2025-03-12T10:43:45+00:00",  "created_at": "2013-06-01T12:15:11-03:00",  "updated_at": "2025-03-12T10:43:45+00:00"}
```

#### PUT /categories/1234[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-categories1234 "Direct link to PUT /categories/1234")

```
{  "visibility": "visible"}
```

`HTTP/1.1 200 OK`

```
{  "id": 1234,  "description": {      "en": "",      "es": "",      "pt": ""  },  "handle": {      "en": "clothes",      "es": "clothes",      "pt": "clothes"  },  "name": {      "en": "Clothes",      "es": "Ropa",      "pt": "Roupas"  },  "google_shopping_category": "",  "subcategories": [],  "visibility": "visible",  "visibility_updated_at": "2025-04-29T12:08:27+00:00",  "created_at": "2013-06-01T12:15:11-03:00",  "updated_at": "2025-04-29T12:08:27+00:00"}
```

### DELETE /categories/{id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-categoriesid "Direct link to DELETE /categories/{id}")

Remove a Category

#### DELETE /categories/4567[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-categories4567 "Direct link to DELETE /categories/4567")

`HTTP/1.1 200 OK`

## FAQ[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#faq "Direct link to FAQ")

**How to add categories to a product?** **What is the character limit of the description property** **How to add a child category (subcategory) to an existing category?** **What are the visibility rules for categories in the hierarchical tree?**