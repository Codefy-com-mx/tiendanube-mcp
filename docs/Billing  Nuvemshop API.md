## Introduction[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#introduction "Direct link to Introduction")

This section of the API enables you to:

-   Manage the **plans** you offer to your service’s users.
-   Handle **subscriptions** for your customers. This will be used to create the charges for your fixed fee periodically.
-   Create **extra charges** to bill for any additional expenses related to your service.

## Entities[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#entities "Direct link to Entities")

1.  ### **Plan**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#plan "Direct link to plan")
    
    A plan defines the level of service a customer can subscribe to and is part of the pricing model. Each plan may include different features, limits, and prices.
    
2.  ### **Subscriptions**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#subscriptions "Direct link to subscriptions")
    
    A subscription is the link between the customer (or “merchant”) and the service. It automatically generates periodic charges to cover the service’s cost. The field `next_execution` on the subscription informs the date when the new charge will be created.
    
3.  ### **Business Unit**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#business-unit "Direct link to business-unit")
    
    Represents the partner. Each Business Unit can define its own plans with its own pricing model for a given service.
    
4.  ### **Service (also known as Business Unit Service)**[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#service-also-known-as-business-unit-service "Direct link to service-also-known-as-business-unit-service")
    
    The service provided by a Business Unit. An application created by a partner would be the “Service”.
    

### Example in Context[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#example-in-context "Direct link to Example in Context")

-   The customer is the _Merchant_.
-   The application is the _Service_ (for example when an endpoint asks for the service\_id, in this case would be the app\_id).
-   The partner who created the app is the _Business Unit_.
-   The entity that creates the charges for the service is the _Subscription_.
-   The periodic fee associated with that subscription corresponds to a _Plan_.

___

## Plans[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#plans "Direct link to Plans")

As a partner, you can offer multiple plans for your service with different features, limits, and prices to meet the needs of different users. When a merchant is subscribed to a specific plan, the subscription will generate the corresponding charges, and your application should enable or restrict functionalities based on the plan.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

-   **POST** `/plans`  
    Creates a new plan.
    
    > ⚠️📝 _Note:_ This endpoint uses the Partner-Action authentication method [see here](https://tiendanube.github.io/api-documentation/next/guides/authentication-for-partner-actions#making-a-request).
    
    #### Body[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#body "Direct link to Body")
    
    | Parameter | Type | Explanation |
    | --- | --- | --- |
    | code | string | Currency code of the subscription |
    | external\_reference? | string | Optional, field left open for you to set up your own id |
    | description? | string | Optional, short description of the plan |
    
    **Response** **Failed Responses**
-   **PATCH** `/plans/{plan_id}`  
    Updates an existing plan.  
    **IMPORTANT:** Updating a plan will modify all subscriptions to that plan, and all charges created but not already paid or waiting for payment.
    
    > ⚠️📝 _Note:_ This endpoint uses the Partner-Action authentication method [see here](https://tiendanube.github.io/api-documentation/next/guides/authentication-for-partner-actions#making-a-request).
    
    #### URL parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-parameters "Direct link to URL parameters")
    
    | Parameter | Explanation |
    | --- | --- |
    | plan\_id | ID of the plan to patch or your external\_reference |
    
    #### Body[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#body-1 "Direct link to Body")
    
    | Parameter | Type | Explanation |
    | --- | --- | --- |
    | code | string | Currency code of the subscription |
    | external\_reference | string | Field left open for you to set up your own id |
    | description | string | Short description of the plan |
    
    **Response** **Failed Responses**
-   **DELETE** `/plans/{plan_id}`  
    Deletes a plan. **IMPORTANT:** Deleting a plan will delete all subscriptions to that plan, and all charges created but not already paid or waiting for payment.
    
    > ⚠️📝 _Note:_ This endpoint uses the Partner-Action authentication method [see here](https://tiendanube.github.io/api-documentation/next/guides/authentication-for-partner-actions#making-a-request).
    
    #### URL parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-parameters-1 "Direct link to URL parameters")
    
    | Parameter | Explanation |
    | --- | --- |
    | plan\_id | ID of the plan to patch or your external\_reference |
    
    **Failed Responses**

___

## Subscriptions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#subscriptions-1 "Direct link to Subscriptions")

The idea of a subscription only makes sense if the service is not free. Each user (merchant) utilizing your paid service will have an associated subscription. This subscription periodically generates charges for the fixed cost of the service. To handle variable or additional charges, you can use the dedicated API endpoint (see the “Charges” section below).

Key points about subscriptions:

> **IMPORTANT** ⚠️ The date `next_execution` is the day when the next charge will be created automatically. This date is important because it marks the start of the next billing period

-   They are created automatically when the merchant installs the app (or when the service is activated).
-   They are updated based on certain events automatically [(more on this here)](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhooks):
    -   Free days are added
    -   The charge for the next period is created and the `next_execution` date is updated
-   In some cases you’ll need to update them manually via the API:
    -   You want to give an special price for a client

#### Billing Cycle[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#billing-cycle "Direct link to Billing Cycle")

A subscription automatically creates charges for the next billing period but always attempts to align that period with the 16th day of the month. For example

-   If a merchant installs an application on the 2nd, the next charge will cover the period from that day until the 16th of that month, with a prorated fee for those days.
-   If a merchant installs an application on the 20th, the next charge will cover the period from that day until the 16th of the next month, with a prorated fee for those days.
-   If a merchant installs an application on the 16th (already aligned with the desired period), the next charge will cover the period from that day until the 16th of the next month, with the full price.

### Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints-1 "Direct link to Endpoints")

-   **GET** `/concepts/{concept_code}/services/{service_id}/subscriptions`  
    Retrieves the subscription for a specific user.
    
    #### URL parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-parameters-2 "Direct link to URL parameters")
    
    | Parameter | Explanation |
    | --- | --- |
    | concept\_code | Concept code of the subscription to retrieve |
    | service\_id | ID of the service; If the service is an app, the app\_id |
    
    **Response** **Failed Responses**
-   **PATCH** `/concepts/{concept_code}/services/{service_id}/subscriptions`  
    Updates subscription details (for example, switching the plan a user is subscribed to).  
    **IMPORTANT**: Updating a subscription's price will update all charges created but not already paid or waiting for payment.
    
    #### URL parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-parameters-3 "Direct link to URL parameters")
    
    | Parameter | Explanation |
    | --- | --- |
    | concept\_code | Concept code of the subscription to patch |
    | service\_id | ID of the service; If the service is an app, the app\_id |
    
    #### Body[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#body-2 "Direct link to Body")
    
    | Parameter | Type | Explanation |
    | --- | --- | --- |
    | amount\_currency | string | Currency code of the subscription |
    | amount\_value | number | Price of the subscription |
    | plan\_id | UUID | ID of the plan associated with the subscription |
    | plan\_external\_id | string | Partner's ID of the plan associated with the subscription |
    
    **Response** **Failed Responses**

### Webhooks[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhooks "Direct link to Webhooks")

You can configure webhooks to stay informed about significant subscription events, such as `next_execution` date changes. For this you'll first need to configure a listener for the event `subscription/updated`, then every time there's an update we'll send a notification to the `url` you provided. With this, you can use the information in the webhook to fetch the modified subscription, see what's new and handle the update.

**To learn more about setting up a webhook listener [go here](https://tiendanube.github.io/api-documentation/resources/webhook)**  
**To see more info about this specific webhook [go here](https://tiendanube.github.io/api-documentation/resources/webhook#subscriptionupdated)**

___

## Charges[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#charges "Direct link to Charges")

If your pricing model includes a fixed fee plus variable charges, the subscription will generate the fixed fee automatically. However, additional or variable charges must be created via the “Charges” API. If your pricing model consist only of variable charges, you will not have a subscription (because there is no periodic fee) and the extra charges should be created via this API.

**Recommendation:**

> **Create these variable charges **one day before** the subscription’s `next_execution`, and ensure they correspond to the same billing period. This allows the merchant to see all charges together, providing a smoother payment experience and reducing confusion.**

### Endpoint[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoint "Direct link to Endpoint")

-   **POST** `/services/{service_id}/charges`  
    Creates an additional charge (e.g., extra usage not included in the fixed fee).
    
    #### URL parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-parameters-4 "Direct link to URL parameters")
    
    | Parameter | Explanation |
    | --- | --- |
    | service\_id | ID of the service; If the service is an app, the app\_id |
    
    #### Body[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#body-3 "Direct link to Body")
    
    | Parameter | Type | Explanation |
    | --- | --- | --- |
    | description | string | Short description for the charge |
    | external\_reference? | string | This field is open if you want to use it as an id for the charge |
    | from\_date | date | Date of the start of the period |
    | to\_date | date | Date of the end of the period |
    | amount\_value | number | Price of the charge |
    | amount\_currency | string | Currency code of the subscription |
    | concept\_code | string | Concept code for the charge |
    
    **Response** **Failed Responses**

___

## Final Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#final-notes "Direct link to Final Notes")

-   Implement robust error handling and notify users if an operation cannot be completed.
-   Provide clear documentation about your plans (pricing, limits, benefits) so merchants can make informed decisions.