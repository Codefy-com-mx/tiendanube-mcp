Version: 2025-03

A [Payment Provider](https://tiendanube.github.io/api-documentation/resources/payment-provider) can implement multiple payment options to be available at the checkout of a store. Payment options are the different alternatives through which a consumer can pay for their order in the store. These options can be integrated in the store checkout in two ways:

-   **transparent integration:** the payment through this option is processed within the checkout of the store;
-   **redirect integration:** by using this option, the consumer is redirected to an external checkout provided by the payment provider.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | Unique identifier of the payment provider. |
| `name` | String | Name of the payment provider. |
| `checkout_payment_options` | Array(Object) | List of checkout payment options supported by the payment provider. See [Checkout Payment Options](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#checkout-payment-options). |
| `logo_url` | String | \[Optional\] HTTPS URL of the payment provider logo. |

### Checkout Payment Options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#checkout-payment-options "Direct link to Checkout Payment Options")

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | Unique identifier of the payment option. |
| `name` | String | Name of the payment option. |
| `supported_payment_method_types` | Array(String) | Payment method types supported by the payment option. See [Payment Method Types](https://tiendanube.github.io/api-documentation/resources/payment-provider#payment-method-types). One of these values: `bank_debit`; `boleto`; `cash`; `credit_card`; `debit_card`; `other`; `pix`; `ticket`; `wallet`; `wire_transfer`. |
| `integration_type` | String | \[Optional\] The integration type of the payment option. One of these values: `redirect` or `transparent`. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /payment-options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-payment-options "Direct link to GET /payment-options")

Get the payment options available for the checkout of a store based on the Payment Providers activated by the merchant.

**Response**