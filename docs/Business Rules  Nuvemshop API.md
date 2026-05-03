The Business Rules API offers the ability to define different business behaviours for the `shipping` and `payments` domains through a set of conditions.

When the merchant installs the app, the app must authenticate with `Nuvemshop` and create and individual `Callback` for the domain it supports and for the store that triggered the installation. These Callbacks represent the URL that we are going to consult when applying the rules to know what shipping options, payment options, etc. are applied at checkout.

In our platform, a Callback is created for a specific `store`.

> **_Note:_** To create a Business Rules App you need to create an App in the Partners Portal and request our Partner Support Team ([partners@nuvemshop.com.br](mailto:partners@nuvemshop.com.br) or [partners@tiendanube.com](mailto:partners@tiendanube.com)) to enable your app to access our APIs.

## Installation flow[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#installation-flow "Direct link to Installation flow")

Below we have the definition of the API to integrate a new business rule provider. This API is what the partner will use in the installation flow to register with the corresponding configuration. We can see that the URL is composed of the `store_id` and the domain to which the app corresponds and a token related to the installation of the app. Returns the No Content status on success.

### Callback[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#callback "Direct link to Callback")

| Field | Type | Description |
| --- | --- | --- |
| `url` | String | HTTPS URL where the data will be sent. |
| `event` | String | Event the application will listen. See [Events](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#events). |
| `domain` | String | Domain in which the event occurs. See [Domains](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#domains). |

### Domains[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#domains "Direct link to Domains")

There are multiple domains supported on our platform. The app requires certain mandatory scopes in order to work with each domain, as follows:

-   `payments`: Requires the scopes: `read_payment_options`, `read_payments`.
-   `shipping`: Requires the scopes: `read_shipping`.
-   `location`: Requires the scopes: `read_locations`

### Events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#events "Direct link to Events")

The events supported on our platform are:

-   `payments/before-filter`: Event to filter payments options.
-   `shipping/before-filter`: Event to filter shipping options.
-   `location/prioritization`: Event for location prioritization.

### Endpoint to create a Callback[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoint-to-create-a-callback "Direct link to Endpoint to create a Callback")

Create a callback for a given store.

-   URL: `/{*store_id*}/business_rules/integrations/{*domain*}`
-   Method: `PUT`

**Request** **Response**

## Partner's API[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#partners-api "Direct link to Partner's API")

In this section we explain that the partner's API must offer an endpoint with the following payload and response definitions. This endpoint represents the callbacks previously mentioned the partner must create.

### Callback payload format definition[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#callback-payload-format-definition "Direct link to Callback payload format definition")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `store_id` | String | True | Store where the operation took place. |
| `cart_id` | Number | if details.action is add | Id of the cart related to the operation. |
| `currency` | String | True | ISO code of the currency of the cart. |
| `details` | [Details](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#details) | True | Contains all the information related to the event. |
| `products` | [Products](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#products) | True | Contains all the information related to products. |
| `customer` | [Customer](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#customer) | True | Contains all the information related to the customer. |
| `shipping` | [Shipping](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping) | if details.domain is shipping | Contains all the information related to the shipping. |
| `package` | [Package](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#package) | if details.domain is shipping | Contains all the information related to the shipping package. |
| `locations` | `array<[Locations](location.md#properties)>` | if details.domain is location | Contains all the information related to the locations. |
| `totals` | [Totals](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#totals) | if details.domain is payments or shipping | Contains all the information related to the amount to be charged to the consumer. |

#### Details[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#details "Direct link to Details")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | String | True | Represents the moment where the event must be triggered to perform the action. One of: `shipping/before-filter`, `payments/before-filter`, `location/prioritization` . |
| `action` | String | True | Represents the action to perform. One of: `filter`. |
| `domain` | String | True | Represents the domain in which the action take place. One of: `cart`, `shipping`, `payments`, `locations`. |
| `timestamp` | Number | True | Update time. |

#### Products[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#products "Direct link to Products")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | Number | True | Id of the product line item. |
| `product_id` | Number | True | Id of the product. |
| `quantity` | Number | True | Number of products. |
| `stock` | Number | True | Number of products left. |
| `variant_id` | Number | True | Id of the product variant. |
| `price` | String | True | Price of the product. |
| `categories` | `Array<[Categories](#categories)>` | True | Product Categories. |

#### Categories[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#categories "Direct link to Categories")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | Number | True | Id of the category. |
| `parent` | Number | False | Id of the parent Category. |
| `subcategories` | `Array<Number>` | True | Ids of subcategories. |

#### Customer[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#customer "Direct link to Customer")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | Number | False | Id of the customer who performed the operation. |

#### Shipping[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping "Direct link to Shipping")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | String | False | Country of the place to send the product. |
| `city` | String | False | City of the place to send the product. |
| `postalcode` | String | False | Postal code of the place to send the product. |
| `cost` | String | False | Shipping cost to send the product. |

#### Package[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#package "Direct link to Package")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `weight` | String | True | Weight of the package to send. |

#### Totals[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#totals "Direct link to Totals")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subtotal` | String | True | Subtotal of the cart. |
| `total_discount` | String | True | Total discount of the cart. |
| `total` | String | True | Total of the cart. |

#### Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#examples "Direct link to Examples")

**Shipping Payload** **Payments Payload** **Locations Payload**

### Callback response format definition[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#callback-response-format-definition "Direct link to Callback response format definition")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `command` | String | True | Represents the name of the command to apply. One of: `filter_shipping_options`, `filter_payments_options`, `location_prioritization`. |
| `detail` | `Array<[Filtered-Option](#filtered_option)> <br/> Array<[location-prioritization](#location-prioritization)>` | True | Options to be filtered or Location prioritization. |

**Important**: This API has a timeout of 800ms. If no response is received within this timeframe, the request will timeout, and it will be treated as if no rule was returned.

#### Location Prioritization[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#location-prioritization "Direct link to Location Prioritization")

Location prioritization is crucial for order fulfillment in our cart distribution process. Below are scenarios describing how we select Distribution Centers (DCs) during the checkout process:

**Scenario 1:** Given a cart with 3 Products  
Given the priority order of DCs: DC 2, DC 1, and DC 3  
Given DC 1 has Product 1, DC 2 has Product 1 and Product 2, DC 3 has Product 1, Product 2, and Product 3  
Given the option "maximize shipment quantity" is active  
Then the shipment quantity election result will be 1, starting from DC 3. Despite being the lowest priority, DC 3 can fulfill shipment for all products in the order.

**Scenario 2:** Given a cart with 2 Products  
Given the priority order of DCs: DC 2, DC 1, and DC 3  
Given DC 1 has Product 1, DC 2 has Product 2, DC 3 has only Product 1  
Given the option "maximize shipment quantity" is active  
Then the shipment quantity election result will be 2, starting from DC 1 and DC 2, as no single DC alone can fulfill shipment for all products due to their priority order.

**Scenario 3:** Given a cart with 3 Products  
Given the priority order of DCs: DC 2, DC 1, and DC 3  
Given DC 1 has Product 1, DC 2 has Product 1 and Product 2, DC 3 has Product 1, Product 2, and Product 3  
Given the option "maximize shipment quantity" is not active  
Then the shipment quantity election result will be 2, starting from DC 1 and DC 2. Even though DC 3 could be the starting point for shipment of all products, maximizing option was not enabled.

**Scenario 4:** Given a cart with 3 Products  
When consulting the partner results in Response Status Code 201 but an empty prioritized DCs list  
Then the shipment quantity election result will be 0, indicating the purchase cannot be completed as there is no designated starting point for shipment. This scenario indicates a failure in prioritization rules preventing shipment to the consumer destination.

**Scenario 5:** Given a cart with 3 Products  
When consulting the partner results in a failure (e.g., downtime, non-2xx response status code, invalid payload format or and for requests that take longer than 1 second)  
Then default prioritization set by the merchant via the locations API will be used. This contingency approach ensures no sales are lost due to unexpected issues, utilizing standard prioritization rules.

**Note:**

-   The script considers not only DCs possessing the Products but also sufficient quantities to fulfill the consumer's cart.  
    
-   Even digital products (non-shippable) adhere to inventory control rules with assigned quantities and DCs, following the same prioritization rules as physical products.  
    

****This documentation provides clarity on how location prioritization influences shipment decisions during checkout, ensuring efficient and reliable order fulfillment.****

##### Location Prioritization[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#location-prioritization-1 "Direct link to Location Prioritization")

| Field | Type | Is Mandatory | Description |
| --- | --- | --- | --- |
| `id` | String | TRUE | Id of location. |
| `priority` | number | TRUE | priority for location. |

##### Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#examples-1 "Direct link to Examples")

**Location prioritization response**

#### Filtered Option[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#filtered-option "Direct link to Filtered Option")

##### Shipping Filtered Option[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-filtered-option "Direct link to Shipping Filtered Option")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | String | True | Id of the shipping carrier. |
| `option_id` | String | True | Id of the shipping option. |
| `code` | String | True | Code of the shipping option. |

##### Payments Filtered Option[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payments-filtered-option "Direct link to Payments Filtered Option")

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | String | True | Id of the payment provider. |
| `option_id` | String | True | Id of the payment option. |

##### Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#examples-2 "Direct link to Examples")

**Payments response** **Shipping response**

##### Endpoints your app may use to consume data[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints-your-app-may-use-to-consume-data "Direct link to Endpoints your app may use to consume data")

The endpoints included in this section are available in the `Nuvemshop` API.

###### Payment options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-options "Direct link to Payment options")

###### GET _{store\_id}_/payment\_providers/options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-store_idpayment_providersoptions "Direct link to get-store_idpayment_providersoptions")

> **_Note:_** Required Scope: read\_payments

**Header format** **Response Format**

###### Shipping options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#shipping-options "Direct link to Shipping options")

###### GET _{store\_id}_/shipping\_carriers/options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-store_idshipping_carriersoptions "Direct link to get-store_idshipping_carriersoptions")

> **_Note:_** Required Scope: read\_shipping

**Header format** **Response Format**