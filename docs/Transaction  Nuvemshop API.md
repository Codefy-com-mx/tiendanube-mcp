Each movement of money is modeled through a _Transaction_ object, which can be of different types (e.g. credit card, debit card, boleto, wire transfer, etc.). Each _Transaction_ type has a Finite State Machine (FSM) that defines its current status. The _Transaction Event_ object represents transitions in the _Transaction_'s FSM.

A [Payment Provider](https://tiendanube.github.io/api-documentation/resources/payment-provider) can create a Transaction and update its status through Transaction Events as it changes over time. Since an order can be related to multiple payment methods, a different Transaction must be created for each of them using the same order ID.

> **_Note:_** This endpoint is for the exclusive use of payment apps.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

All `Transaction` types have the same attributes, but may generate different kinds of _events_ and contain some _info_ fields specific to their type.

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | \[Read-only\] Unique identifier of the Transaction object. |
| `payment_attempt_id` | String | The unique identifier of the payment attempt generated during the [process\_payment](https://tiendanube.github.io/api-documentation/guides/payment-provider#process-payment-api) flow. When the payment request is sent to the partner's backend, it includes an `attemptId`. This ID must be reported in the `payment_attempt_id` field when creating the corresponding transaction to ensure full traceability. |
| `payment_provider_id` | String | ID of the [Payment Provider](https://tiendanube.github.io/api-documentation/resources/payment-provider) that processed this Transaction. |
| `payment_provider_tax_id` | String | \[Required for Brazilian providers\] The tax identification number for the payment provider.. E.g. `"12.345.678/0001-99"` |
| `payment_method` | Object | Object containing the payment method used in this Transaction. See [Payment Method](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method). |
| `info` | Object | Object containing specific info related to this Transaction. See [Transaction Info](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-info). |
| `status` | Object | \[Read-only\] The state of the FSM in which the Transaction is. See [Transaction Status](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-status). |
| `events` | Array(Object) | \[Read-only\] List of fulfillment events related to this Transaction. See [Transaction Events](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-events). |
| `captured_amount` | Object | \[Read-only\] Object containing the captured amount of this Transaction. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `refunded_amount` | Object | \[Read-only\] Object containing the refunded amount of this Transaction. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `authorized_amount` | Object | \[Read-only\] Object containing the authorized amount of this Transaction. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `voided_amount` | Object | \[Read-only\] Object containing the voided amount of this Transaction. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `discount_amount` | Object | \[Read-only\] Object containing the discount applied to the Transaction on the Payment Provider external site. See [Redirect Transactions Discounts](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#redirect-transactions-discounts). |
| `failure_code` | String | \[Read-only\] If the transaction failed, this field is used to indicate the code related to the failure cause. See [Transaction Failure Codes](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-failure-codes). |
| `created_at` | Date | \[Read-only\] ISO 8601 date for the date the Transaction was created in our platform. Defaults to current time. E.g. `"2020-03-11T12:42:15.000Z"`. |

> _**Note:**_ Read-only properties will only appear in our responses, which means that should not be part of the requests.

### Payment Method[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method "Direct link to Payment Method")

| Field | Type | Description |
| --- | --- | --- |
| `type` | String | One of the available [Payment Method Types](https://tiendanube.github.io/api-documentation/resources/payment-provider#payment-method-types). |
| `id` | String | \[Optional for `cash`, `pix` and `wallet`\] ID of the payment method used for this Transaction. See [Supported Payment Methods by Payment Method Type](https://tiendanube.github.io/api-documentation/resources/payment-provider#supported-payment-methods-by-payment-method-type). |

### Transaction Info[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-info "Direct link to Transaction Info")

This object is used to indicate specific information of a Transaction. It can be omitted in the Transaction body if all its fields are unfilled.

| Field | Type | Description |
| --- | --- | --- |
| `card` | Object | \[Optional\] Object containing data related to the consumer's credit or debit card. See [Card Info](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#card-info). |
| `installments` | Object | \[Required for `credit_card`\] Object containing the installments data related to this Transaction. See [Installments Info](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#installments-info). |
| `external_id` | String | \[Required\] ID used by the Payment Provider. |
| `external_url` | String | \[Optional\] HTTPS URL with details of this Transaction for the merchant. |
| `external_resource_url` | String | \[Required for transparent transactions with `boleto`, `ticket`, `wire_transfer`, `bank_debit` and `pix`\] HTTPS URL of the boleto or ticket to show to the consumer to resume the payment. In the case of bank debit and wire transfer, link to the bank selected by the consumer to make the transaction. In the case of PIX, source to the QR code image to show to the consumer to make the payment, it could be a URL or a `base64` code. |
| `external_resource_code` | String | \[Required for transparent transactions with `boleto`, `ticket`, `wire_transfer`, `bank_debit` and `pix`\] Barcode for boleto, or code for ticket. For all other cases, used as a reference code for the consumer. |
| `external_resource_expires_at` | Date | \[Required for transparent transactions with `boleto`, `ticket` and `pix`\] ISO 8601 date for the expiration date of a boleto or ticket. |
| `refund_url` | String | \[Optional\] HTTPS URL to request the refund of the transaction. It is required if the `supports_partial_refund` field is `true`. See [Refund URL](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#refund-url). |
| `supports_partial_refund` | Boolean | \[Optional\] Indicates whether the transaction supports partial refund. Defaults to `false`. |
| `ip` | String | \[Optional\] IP of the device that initiated this Transaction. |
| `consumer_charges` | Array(Object) | \[Optional\] List of consumer charges. See [Transaction Charges](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-charge). |
| `consumer_discounts` | Array(Object) | \[Optional\] List of consumer discounts. See [Transaction Discounts](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-discount). |
| `merchant_charges` | Array(Object) | \[Optional\] List of merchant charges. See [Transaction Charges](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-charge). |
| `authorization_code` | String | \[Read-only\] If the transaction is approved, this field contains the code generated when authorizing a payment. |

> _**Note:**_ All URLs must be secure URLs (https).

### Card Info[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#card-info "Direct link to Card Info")

| Field | Type | Description |
| --- | --- | --- |
| `brand` | String | The brand of the card. See [Supported Card Brands](https://tiendanube.github.io/api-documentation/resources/payment-provider#supported-payment-methods-by-payment-method-type). |
| `issuer` | String | \[Optional\] The issuer of the card. |
| `expiration_month` | Number | The expiration month of the card. |
| `expiration_year` | Number | The expiration year of the card. |
| `first_digits` | String | The first 6 (six) digits of the card. |
| `last_digits` | String | The last 4 (four) digits of the card. |
| `masked_number` | String | \[Optional\] Masked card number displaying only the last 4 (four) digits. E.g. `"XXXXXXXXXXXX1234"`. |
| `name` | String | Name of the card holder. |

### Installments Info[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#installments-info "Direct link to Installments Info")

| Field | Type | Description |
| --- | --- | --- |
| `quantity` | Number | The number of installments. E.g. `3`. |
| `interest` | String | The interest applied to each installment. E.g. `"0.015"`. |

### Refund URL[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#refund-url "Direct link to Refund URL")

If the Transaction supports refund, the Payment App must specify a URL in the `info.refund_url` field when creating the Transaction. Nuvemshop will call this URL when the merchant requests the total or partial refund of the order linked to the Transaction from the store's order management tool. In order to avoid invalid refund requests from our platform, we strongly recommend setting the refund URL to the Transaction only if it meets all the conditions to accept the refund operation (the payment method type supports refund; etc.).

Partial refunds will be available only for orders that have a single Transaction with `paid` or `partially_refunded` status and as long as the Transaction was created with the field `info.supports_partial_refund` set to `true`.

When Nuvemshop sends a POST request to the refund URL, your App should expect to receive the following JSON payload:

| Field | Type | Description |
| --- | --- | --- |
| `store_id` | String | The store ID. |
| `payment_provider_id` | String | The [Payment Provider](https://tiendanube.github.io/api-documentation/resources/payment-provider) ID. |
| `transaction_id` | String | The [Transaction](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties) ID. |
| `amount` | Object | The transaction amount to be refunded. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |

The Payment App must reply Nuvemshop the HTTP status code `202 Accepted` when it accepts the refund request for the transaction, which indicates that it will eventually refund the money. This is because refunding a transaction might be an async process and its complexity is different for each Payment Provider. It is very important to point out that once the refund process is completed by the Payment App, it must be notified to Nuvemshop through a [Transaction Event](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-events) of type `refund` in order to update the status of the Transaction.

In case of rejecting the refund request, the App must return a `422 Unprocessable Entity` status code indicating the reason for the rejection through the `error_code` field, which can take one of the following values:

| Rejection Code | Description |
| --- | --- |
| `insufficient_account_balance` | The available balance in the merchant's account is not sufficient to perform the operation. |
| `refund_already_in_process` | The transaction already has a refund in process. |
| `refund_rejected` | Generic error for refund rejections. |
| `transaction_date_too_old` | The transaction creation date is outside of the allowed refund period. |

#### Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#request "Direct link to Request")

Requesting a Payment App for its `paid/partially_refunded` transaction to be refunded.

```
curl -X POST \  'https://mypayments.com/transactions/refund' \  -H 'Content-Type: application/json' \   -d '{        "store_id":"12345",        "payment_provider_id":"6b7727b1-f912-4dcf-b0ae-0d006122598f",        "transaction_id":"6e760b6e-e4f3-42ba-8a2d-afddf44e6cf1",        "amount":{            "value":"200.45",            "currency":"BRL"        }      }'
```

> _**Note:**_ The URL `mypayments.com/transactions/refund` is used as an example, replace it with your own domain and path.

> _**Note:**_ The refund URL must not have path variables.

**Success Response** **Rejection Response**

### Transaction Charge[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-charge "Direct link to Transaction Charge")

| Field | Type | Description |
| --- | --- | --- |
| `type` | String | One of the available [Charge Type](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#charge-type). |
| `amount` | Object | Object containing the amount of this charge. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `description` | String | A description of this charge in the store language. |

### Charge Type[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#charge-type "Direct link to Charge Type")

-   `payment_processing_fee`: Payment Processor fee for this transaction.
-   `cost_per_transaction`: Nuvemshop's transaction fee. Used only when the Payment Provider is implementing payment Split.
-   `financing_cost`: Financing cost applied to the merchant or consumer when installments are being used.
-   `tax`: Any tax charged to the merchant.
-   `other`: For other charges.

### Transaction Discount[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-discount "Direct link to Transaction Discount")

| Field | Type | Description |
| --- | --- | --- |
| `type` | String | The type of this discount. This value must be `other`. |
| `amount` | Object | Object containing the amount of this discount. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `description` | String | A description of this discount in the store language. |

### Transaction Events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-events "Direct link to Transaction Events")

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | \[Read-only\] Unique identifier of the Transaction Event object. |
| `transaction_id` | String | \[Read-only\] ID of the [Transaction](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties) related to this Transaction Event. |
| `amount` | Object | Object containing the amount of this Transaction Event. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money).
_Note:_ For this value, only the cart total price reported by Nuvemshop should be considered (See [Cart Data](https://tiendanube.github.io/api-documentation/resources/checkout#getdata)). Extra payment method costs such as credit card interest should be excluded from the Transaction amount and can optionally be included into the [Card Info](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#card-info) object. If multiple payments for the same order are allowed by the payment provider, then the sum of the amount of the generated transactions should be equal to the cart total price, disregarding costs associated with the payment provider. _Not doing this could cause some fraud scenarios_.

 |
| `type` | String | One of the available [Transaction Event Types](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-types). |
| `status` | String | One of the available [Transaction Event Status](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-status). |
| `authorization_code` | String | Alphanumeric code generated when authorizing a payment.

**Required when**: (`type` is `sale` or `capture`) AND (`status` is `success`) AND (payment method is `credit_card`, `debit_card` or `pix`).

 |
| `info` | Object | Object containing specific info related to this Transaction Event. See [Transaction Event Info](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-info). |
| `failure_code` | String | \[Required for Transaction Event Status `failure`\] If the Transaction Event failed, this field is used to indicate the code related to the failure cause. See [Transaction Failure Codes](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-failure-codes). |
| `happened_at` | Date | ISO 8601 date for the date the Transaction Event was processed. Defaults to current time. E.g. `"2020-03-11T12:42:15.000Z"`. |
| `expires_at` | Date | \[Optional\] ISO 8601 date for date the Transaction Event expires. It will be used to indicate to the merchant the deadline to accept or cancel a transaction under review. |
| `created_at` | Date | \[Read-only\] ISO 8601 date for the date the Transaction Event was created in our platform. Defaults to current time. E.g. `"2020-03-11T12:42:15.000Z"`. |

> _**Note:**_ The `amount` property is required for `authorization` and `sale` Transaction Event Types, and must always be included in the `first_event` field during the Transaction creation. If no `amount` value is specified for subsequent events `void`, `refund` or `capture`, the total amount indicated in the first event is assumed.

### Money[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money "Direct link to Money")

| Field | Type | Description |
| --- | --- | --- |
| `value` | String | Amount of money as a string. E.g. `"49.99"` |
| `currency` | String | ISO 4217 code for the currency, such as ARS, BRL, USD, etc. |

> _**Note:**_ Decimal numbers are represented as string format for better decimal precision handling. It must contain two decimal places and use a point as decimal separator.

### Transaction Status[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-status "Direct link to Transaction Status")

Each type of Transaction has a Finite State Machine (FSM) that defines its status:

-   `authorized`: The transaction is authorized.
-   `expired`: The transaction is expired.
-   `failed`: The transaction failed.
-   `in_fraud_analysis`: The transaction is under fraud analysis by the payment provider.
-   `needs_merchant_review`: The transaction needs merchant action to continue.
-   `paid`: The transaction is confirmed.
-   `partially_refunded`: The transaction is partially refunded.
-   `pending`: The transaction is pending.
-   `refunded`: The transaction is refunded.
-   `voided`: The transaction is voided.

### Transaction Event Types[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-types "Direct link to Transaction Event Types")

-   `authorization`: The credit card transaction has been authorized.
-   `capture`: The credit card transaction has been captured.
-   `expiration`: The transaction has expired.
-   `in_fraud_analysis`: The credit card transaction is being reviewed by the payment provider (no merchant action is required).
-   `refund`: The sale has been fully refunded.
-   `needs_merchant_review`: The credit card transaction has to be approved or rejected by the merchant.
-   `sale`: Represents an authorization along with capture for credit card transactions, or a sale event for all other payment method types.
-   `void`: The credit card transaction has been voided.

### Transaction Event Status[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-status "Direct link to Transaction Event Status")

-   `error`: There was an error processing the transaction event.
-   `failure`: The transaction event failed. See [this list](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-failure-codes) for possible failure causes.
-   `pending`: The transaction event is pending.
-   `success`: The transaction event succeeded.

### Transaction Event Info[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-info "Direct link to Transaction Event Info")

| Field | Type | Description |
| --- | --- | --- |
| `message` | String | \[Optional\] Description to explain a Transaction Event update. |
| `fraud_score` | String | \[Optional\] Decimal score between 0 to 1. The closer the score is to 1, the more likely the Transaction is fraudulent. E.g `"0.15"`. |
| `risk_level` | String | \[Optional\] Risk level that an Order is fraudulent. One of `low`, `medium` or `high`. |
| `accept_url` | String | \[Optional\] HTTPS URL we will call to accept the Transaction from our platform. It should return a 2xx HTTP code or we will return an error to the merchant. |
| `cancel_url` | String | \[Optional\] HTTPS URL we will call to cancel the Transaction from our platform. It should return a 2xx HTTP code or we will return an error to the merchant. |

### Transaction Event Workflow[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-event-workflow "Direct link to Transaction Event Workflow")

Transaction Events are used to alter the status of a Transaction and to provide related information to take action on it.

There are specific _status_ values and transitions for each Transaction Event Type, which are shown in the following diagram.

> The blue boxes contain the list of _status_ values that each Transaction Event Type supports.

![event_types](https://tiendanube.github.io/api-documentation/assets/images/event_workflow-b6894fc817cb1e33cad3cd59bd7ef448.png)

#### Available Transaction Event Types by Payment Method Type[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#available-transaction-event-types-by-payment-method-type "Direct link to Available Transaction Event Types by Payment Method Type")

The following table shows the Transaction Event Types supported for each _payment method type_.

| Payment Method Type | Transaction Event Type |
| --- | --- |
| `credit_card` | `sale`, `authorization`, `capture`, `in_fraud_analysis`, `needs_merchant_review`, `void`, `refund` |
| `boleto`, `pix`, `ticket` | `sale`, `expiration`, `refund` |
| `bank_debit`, `cash`, `debit_card`, `wallet`, `wire_transfer` | `sale`, `refund` |

### Transaction Status Workflow[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-status-workflow "Direct link to Transaction Status Workflow")

A Transaction may change its _status_ upon receiving a Transaction Event. The following diagram shows the possible Transaction Status transitions based on the events the Transaction receives.

> The arrows represent the occurrence of a Transaction Event with _status_ `success` unless another status is mentioned in its description.

![status_workflow](https://tiendanube.github.io/api-documentation/assets/images/status_workflow-b4fa03fce08ef220c6878f7570b9bfc8.png)

### Redirect Transactions Discounts[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#redirect-transactions-discounts "Direct link to Redirect Transactions Discounts")

Payment Providers may use discounts on their external checkouts to reduce the amount charged to a customer on a payment Transaction. Under this scenario, any promotion applied on the Payment Provider external site, such as a bank promotion or a discount coupon, can affect the Transaction amount for an order, reducing its value.

In these cases, the Transaction object created for the order must include the `discount_amount` field with the value of the discount applied on the Payment Provider external site. On the other hand, the total amount of the Transaction must also be updated with the corresponding value after the discount has been applied (see case Nº 6 of the [Common Examples](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#common-examples)).

> _**Note:**_ Discounts on external Transactions must be applied to the order total amount reported by Nuvemshop.

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### POST /orders/_{order\_id}_/transactions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersorder_idtransactions "Direct link to post-ordersorder_idtransactions")

Create a Transaction for a given order.

**Request** **Response**

### POST /orders/_{order\_id}_/transactions/_{transaction\_id}_/events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersorder_idtransactionstransaction_idevents "Direct link to post-ordersorder_idtransactionstransaction_idevents")

Create a Transaction Event for a given Transaction.

**Request** **Response**

### GET /orders/_{order\_id}_/transactions[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idtransactions "Direct link to get-ordersorder_idtransactions")

Get all Transactions for a given order.

**Request** **Response**

### GET /orders/_{order\_id}_/transactions/_{transaction\_id}_[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idtransactionstransaction_id "Direct link to get-ordersorder_idtransactionstransaction_id")

Get a specific Transaction for a given order.

**Request** **Response**

## HTTP Errors List[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-errors-list "Direct link to HTTP Errors List")

-   **400 Bad Request** - the request could not be understood or was missing required parameters.
-   **401 Unauthorized** - authentication failed or user doesn't have permissions for requested operation.
-   **403 Forbidden** - access denied.
-   **404 Not Found** - resource was not found.
-   **405 Method Not Allowed** - requested method is not supported for resource.

## Common Examples[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#common-examples "Direct link to Common Examples")

**Example Nº 1: Create a credit card transaction that is authorized and captured within a single event** **Example Nº 2: Create a boleto transaction that starts pending and then is paid by the buyer** **Example Nº 3: Get a credit card transaction that has been authorized, captured and then refunded** **Example Nº 4: Create a confirmed wallet transaction** **Example Nº 5: Create a failed debit card transaction** **Example Nº 6: Create an external transaction for a $100 order with a $10 discount**

## Appendix[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#appendix "Direct link to Appendix")

### Transaction Failure Codes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#transaction-failure-codes "Direct link to Transaction Failure Codes")

The following list contains all the Transaction failures codes currently supported by our platform, organized by data groups.

**Consumer** **Payment Methods** **Shipping** **Order**