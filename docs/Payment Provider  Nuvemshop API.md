A Payment Provider, shorter name for Payments Services Provider, represents any entity which provides all the necessary resources and infrastructure for merchants and consumers to execute [Transactions](https://tiendanube.github.io/api-documentation/resources/transaction) between them. This entities could be any of the following:

-   **Aggregator**
-   **Acquirer**
-   **Gateway**

Payments companies have many different and sometimes complex features which add value to the purchase experience, mainly providing multiple payments options and simpler checkout flows. They also provide merchants with tools to make better management of their Transactions as well as their incomes.

In our platform, a Payment Provider is created for a specific `store`.

> **_Note:_** This endpoint is for the exclusive use of payment apps.

> **_Note:_** To create a Payments App you need to create an App in the Partners Portal and request our Partner Support Team ([partners@nuvemshop.com.br](mailto:partners@nuvemshop.com.br)/partners@tiendanube.com) to enable your app to access our Payments APIs.

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | \[Read-only\] Unique identifier of the Payment Provider object. |
| `store_id` | Integer | \[Read-only\] Id of the store to which the Payment Provider belongs. |
| `app_id` | String | \[Read-only\] Id of the app to which the Payment Provider belongs. |
| `name` | String | Name to be displayed to merchants at the store admin tool. |
| `public_name` | String | \[Optional\] Name to be displayed to consumers at the storefront. If not specified, the same value as `name` is used. |
| `description` | String | Short paragraph which provides merchants with a description of the Payment Provider. |
| `logo_urls` | Object | Object containing `key:value` pair for each version of the logos for the frontend. Only supports HTTPS URLs. See [Logos](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#logos). |
| `supported_currencies` | Array(String) | ISO.4217 currency codes supported by the Payment Provider. See [Currency Codes](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#currency-codes). |
| `supported_payment_methods` | Array(Object) | List of available payment methods for each payment method type. See [Payment Methods](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-methods). |
| `checkout_js_url` | String | HTTPS URL of the JavaScript file to be included in the checkout frontend. See [Checkout](https://tiendanube.github.io/api-documentation/resources/checkout). |
| `checkout_payment_options` | Array(Object) | Object containing the available payment options for the checkout frontend. See [Checkout Payment Options](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#checkout-payment-options). |
| `configuration_url` | String | \[Optional\] HTTPS URL of the Payment Provider configuration UI. |
| `support_url` | String | \[Optional\] Payment Provider support site HTTPS URL. |
| `rates` | Array(Object) | \[Optional\] List of rates definitions for merchants by payment method type. See [Rates](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#rates). |
| `rates_url` | String | \[Optional\] HTTPS URL of the Payment Provider's rate information site. |
| `features` | Array(String) | \[Optional\] List of features offered by the Payment Provider. See [Features](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#features). |
| `enabled` | Boolean | \[Optional\] Indicates whether the Payment Provider is activated or deactivated in the store. Defaults to `true`. |
| `authentication` | Object | \[Optional\] Object containing the authentication method type and the store credentials to use on payment processing requests. See [Authentication](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#authentication). |

> **_Note:_** All URLs must be secure URLs (https).

> **_Note:_** Read-only properties will only appear in our responses, which means that should not be part of the requests.

### Logos[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#logos "Direct link to Logos")

At the moment, our platform requires two versions of the Payment Provider logo. Each image must be sent as a `key:value` pair, being the key the dimension of the image and the value, the HTTPS URL of its content.

| Dimension | URL Content Description |
| --- | --- |
| `400x120` | PNG file with transparent background. Dimensions not greater than 400px (width) x 120px (height). _(As of 01/01/2019)_. |
| `160x100` | PNG file with white background. Dimensions must be 160px (width) x 100px (height). _(As of 01/01/2019)_. |

### Currency Codes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#currency-codes "Direct link to Currency Codes")

Every amount value needs to be complemented by a currency. Supported currency codes must be specified according to [ISO 4217](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html). The currencies currently supported on our platform are:

-   `ARS`: Argentine Peso
-   `AUD`: Australian Dollar
-   `BOB`: Bolivian Boliviano
-   `BRL`: Brazilian Real
-   `CAD`: Canadian Dollar
-   `CRC`: Costa Rican Colon
-   `CLP`: Chilean Peso
-   `CNY`: Chinese Yuan
-   `COP`: Colombian Peso
-   `EUR`: Euro
-   `GBP`: British Pound
-   `ILS`: Israeli New Shekel
-   `INR`: Indian Rupee
-   `JPY`: Japanese Yen
-   `MXN`: Mexican Peso
-   `PEN`: Peruvian Sol
-   `PYG`: Paraguayan Guarani
-   `RUB`: Russian Ruble
-   `SEK`: Swedish Krona
-   `USD`: US Dollar
-   `VEF`: Venezuelan Bolivar
-   `UYU`: Uruguayan Peso
-   `ZAR`: South African Rand

### Payment Method Types[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method-types "Direct link to Payment Method Types")

There are many companies providing payment methods of different types. Currently, our platform supports the following payment methods types.

| Payment Method Type | Description |
| --- | --- |
| `bank_debit` | Transaction in which the consumer uses bank debit as payment method. |
| `boleto` | Transaction in which the consumer uses a Boleto Bancário as payment method. Boleto is a Brazilian payment method based on cash. |
| `cash` | Transaction in which the consumer uses cash as payment method. |
| `credit_card` | Transaction in which the consumer uses a credit card as payment method (E.g. VISA, Mastercard, AMEX). |
| `debit_card` | Transaction in which the consumer uses a debit card as payment method (E.g. VISA Debit, Maestro). |
| `pix` | Transaction in which the consumer uses PIX as payment method. PIX is a Brazilian payment method based on transfers between financial institutions. |
| `ticket` | Transaction in which the consumer uses a ticket as payment method. This ticket can be paid through a non-bank collection channel (E.g. Rapipago, Pago Fácil, OXXO). |
| `wallet` | Transaction in which the consumer uses a wallet as payment method. A wallet is an application that allows you to transfer money. |
| `wire_transfer` | Transaction in which the consumer uses a wire transfer as payment method. |

### Payment Methods[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-methods "Direct link to Payment Methods")

Depending on the kind of Payment Provider (_Aggregator_, _Acquirer_, _Gateway_), they may integrate to our platform one or many payment methods for each payment method type.

If applicable, the installments data supported by the payment method type is detailed here.

| Field | Type | Description |
| --- | --- | --- |
| `payment_method_type` | String | One of the available [Payment Method Types](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method-types). |
| `payment_methods` | Array(String) | The list of supported payments method IDs by the given payment method type. See [Supported Payment Methods by Payment Method Type](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-payment-methods-by-payment-method-type). |
| `installments` | Object | \[Optional\] Object containing the installments available to consumers. See [Installments](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#installments). |

#### Installments[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#installments "Direct link to Installments")

Most Payment Providers provide different installment based payments options.

**_Note:_** At the moment, installments are only allowed for `credit_card` payment method type.

| Field | Type | Description |
| --- | --- | --- |
| `specification` | Array(Object) | Check [Specification](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#specification) section below for a description of this field. |
| `min_installment_value` | Array(Object) | \[Optional\] List of minimum installment values accepted by each currency. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money) for items format. |

> **_Note:_** An example for `min_installment_value` would be `"currency": "BRL` and `"amount": "5"` . For instance, if the total amount to be payed is `50 BRL`, then the consumer can choose to make the payment in up to 10 installments because the value of each of them would be `50 / 10 = 5`. However, the consumer won't be able to choose to spread the payment into 12 installments because `50 / 12 = 4.17` and `4.17 < 5`.

##### Specification[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#specification "Direct link to Specification")

The specification field allows the use of specific business rules. This specification is intended to support future business rules as well, so expect this feature to support more fields in the future. Therefore, feel free to discuss more functionalities with _Nuvemshop's Platform Team_.

| Field | Type | Description |
| --- | --- | --- |
| `installments` | Integer | Number of installments. E.g. `3`. |
| `interest_rate` | String | Rate to be applied to the total amount for this installments option. E.g. `"0.015"`. |
| `applies_to` | Array(String) | \[Optional\] List of [supported values (banks, card brands, etc.)](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-payment-methods-by-payment-method-type) to which this installments option applies. |
| `minimum_purchase_value` | Array(Object) | \[Optional\] List of minimum purchase values from which this installment option applies by each currency. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money) for items format. |

> **_Note:_** Interest rates are percentages expressed in fractions of 1 in `String` format for better decimal precision handling. For instance, an interest rate of `6.5%` would be expressed as `6.5 / 100 = 0.065`, which stringified would be "0.065".

> **_Note:_** An example for `minimum_purchase_value` would be `"currency": "ARS"` and `"value": "300.00"`. For instance, if the total amount to be paid is `400 ARS`, then the consumer can choose this installment option because `400 >= 300`. However, if the total amount is `250 ARS`, the consumer won't be able to choose this installment option because `250 < 300`.

### Rates[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#rates "Direct link to Rates")

Payment Providers may charge merchants with different rates per Transaction depending on the payment method type and the time the merchant chooses to withdraw the money. Hence, for each payment method type there would be a list of rates depending on the withdrawal time specified in days.

| Field | Type | Description |
| --- | --- | --- |
| `payment_method_type` | String | Payment method type to which the rates definition refer. See [Payment Method Types](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method-types). |
| `rates_definition` | Array(Object) | Object containing the rates details. See [Rates Definition](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#rates-definition) section bellow. |

#### Rates Definition[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#rates-definition "Direct link to Rates Definition")

| Field | Type | Description |
| --- | --- | --- |
| `percent_fee` | String | Percentage fee charged per payment. E.g. `"1.250"`. |
| `days_to_withdraw_money` | Integer | Days since Transaction creation until de merchant can withdraw the money. |
| `flat_fee` | Object | \[Optional\] Object containing the flat fee charged per payment. See [Money](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money). |
| `plus_tax` | Boolean | \[Optional\] Indicates whether VAT will be added to the specified rates. |

### Features[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#features "Direct link to Features")

Payment Providers can specify the list of functionalities of the service that they offer to the merchant. This will be displayed in the list of available payment applications together with the description of the Payment Provider in order to provide more detail about the application's features.

| Field | Type | Description |
| --- | --- | --- |
| `features` | Array(String) | List of payment provider's features. See [Supported Feature Values](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-feature-values) below. |

#### Supported Feature Values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-feature-values "Direct link to Supported Feature Values")

| Feature | Description |
| --- | --- |
| `special_rates` | The payment provider offers exclusive rates for Nuvemshop customers. |
| `transparent_checkout` | The payment provider offers transparent payment options (without leaving the store checkout). |
| `supports_international_payments` | The payment provider allows payments from foreign countries. |
| `gateway` | The payment provider offers gateway services. |

### Checkout Payment Options[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#checkout-payment-options "Direct link to Checkout Payment Options")

This object contains the data that the Checkout's frontend needs to render the available payment options for the consumer.

Payment Providers can implement multiple payment options to display at the store checkout. To do this, apps must specify the configuration of their Checkout Payment Options through our REST API. The event handlers for each Checkout Payment Option must be defined in the JavaScript file indicated in the `checkout_js_url` field (check out the [Checkout Resource](https://tiendanube.github.io/api-documentation/resources/checkout#payment-options-javascript-interface) for more details on implementing this script).

| Field | Type | Description |
| --- | --- | --- |
| `id` | String | Payment option UUID. It must be unique between payment providers of the same app and match the ID indicated in the `chechkout_js_url` file. |
| `name` | String | Payment option name to be displayed in the store checkout. |
| `description` | String | \[Optional\] Payment option description to be displayed in the store checkout. |
| `logo_url` | String | \[Optional\] HTTPS URL of the Payment Provider logo. |
| `supported_billing_countries` | Array(String) | List of [ISO\_3166-1](https://es.wikipedia.org/wiki/ISO_3166-1) country codes where the payment option will be available. |
| `supported_payment_method_types` | Array(String) | Payment method types supported by the payment option. See [Payment Method Types](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payment-method-types). |
| `integration_type` | String | The integration type of the payment option. One of these values: `redirect` or `transparent`. |

### Money[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money "Direct link to Money")

Sums of money will be represented by a value and its respective currency.

| Field | Type | Description |
| --- | --- | --- |
| `value` | String | Amount of money as a string. E.g. `"49.99"` |
| `currency` | String | ISO 4217 code for the currency, such as ARS, BRL, USD, etc. |

> **_Note:_** Decimal numbers will be represented as string format for better decimal precision handling. It must contain two decimal places and use a point as decimal separator.

### Authentication[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#authentication "Direct link to Authentication")

Authentication data related to the merchant's account to use in the payment requests to the Payment App's API. For more information about this feature, check out the [Secure App Payment Processing Flow](https://tiendanube.github.io/api-documentation/guides/payment-provider#step-5-implement-the-payment-processing-flow) section of our Payment Provider App Development Guide.

| Field | Type | Description |
| --- | --- | --- |
| `type` | String | Authentication method type. One of: `api_key`, `token`, `oauth` or `basic`. |
| `api_key` | String | \[Required for API Key authentication\] The value of the API key. |
| `access_token` | String | \[Required for OAuth and Token authentication\] The value of the merchant's access token. |
| `client_id` | String | \[Required for OAuth authentication\] The value of the merchant's client ID. |
| `client_secret` | String | \[Required for OAuth authentication\] The value of the merchant's client secret. |
| `refresh_token` | String | \[Required for OAuth authentication\] The value of the merchant's refresh token. |
| `expires_at` | String | \[Required for OAuth authentication\] The expiration date of the merchant's access token. Note that if the token does not expire, you must implement simple Token-type authentication instead. |
| `refresh_token_url` | String | \[Required for OAuth authentication\] App URL that we will use to refresh the merchant's access token before it expires. |
| `username` | String | \[Required for Basic authentication\] Merchant account user value. |
| `password` | String | \[Required for Basic authentication\] Merchant account password value. |

#### Refreshing of merchant access tokens under the OAuth scheme[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#refreshing-of-merchant-access-tokens-under-the-oauth-scheme "Direct link to Refreshing of merchant access tokens under the OAuth scheme")

Assuming that we have the following authentication configuration defined in the Payment Provider:

```
{   "authentication":{      "type":"oauth",      "access_token":"currentAcccessToken",      "client_id":"clientId",      "client_secret":"clientSecret",      "expires_at":"2023-10-25T12:30:15.000Z",      "refresh_token":"refreshToken",      "refresh_token_url":"https://acme.com/oauth"   }}
```

Then, we will attempt to perform the request for the merchant's access token refresh as following:

```
curl --location --request POST 'https://acme.com/oauth' \--header 'Content-Type: application/json' \--header 'Accept: application/json' \--data-raw '{    "grant_type": "refresh_token",    "client_id": "clientId",    "client_secret":"clientSecret",    "refresh_token":"refreshToken"}'
```

And we expect a response complying with the OAuth authentication standard:

```
{   "access_token":"newAccessToken",   "refresh_token":"newRefreshToken",   "expires_in": 10519200}
```

The refresh request response must define at least the fields `access_token` and `refresh_token`, with the values of the new merchant's tokens, and `expires_in`, indicating the time in seconds in which the new _access token_ expires. Optionally, new values of `client_id`, `client_secret` and `refresh_token_url` can be included. We will then update the values of the Payment Provider with the new values, calculating the new `expires_at` date from the `expires_in` value received in the response.

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### POST /payment\_providers[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-payment_providers "Direct link to POST /payment_providers")

Create a Payment Provider for a given store.

**Request** **Response**

### PUT /payment/providers/_{payment\_provider\_id}_[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-paymentproviderspayment_provider_id "Direct link to put-paymentproviderspayment_provider_id")

Update a Payment Provider for a given store. This is especially useful to update the installments specs.

**Request** **Response**

### GET /payment\_providers[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-payment_providers "Direct link to GET /payment_providers")

Get all Payment Providers for a given store.

**Request** **Response**

### GET /payment/providers/_{\_payment\_provider\_id}_[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-paymentproviders_payment_provider_id "Direct link to get-paymentproviders_payment_provider_id")

Get a specific Payment Provider for a given store.

**Request** **Response**

### DELETE /payment_providers/_{\_payment\_provider\_id}\*[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-paymentproviders_payment_provider_id "Direct link to delete-paymentproviders_payment_provider_id")

Delete a Payment Provider for a given store.

**Request** **Response**

## HTTP Errors List[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-errors-list "Direct link to HTTP Errors List")

-   **400 Bad Request** - the request could not be understood or was missing required parameters.
-   **401 Unauthorized** - authentication failed or user doesn't have permissions for requested operation.
-   **403 Forbidden** - access denied.
-   **404 Not Found** - resource was not found.
-   **405 Method Not Allowed** - requested method is not supported for resource.

## Appendix[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#appendix "Direct link to Appendix")

### Supported Payment Methods by Payment Method Type[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-payment-methods-by-payment-method-type "Direct link to Supported Payment Methods by Payment Method Type")

The following is the list of payment method IDs by payment method type currently supported by our platform.

| Payment Method Type | Payment Method ID |
| --- | --- |
| `bank_debit` | See the [Supported Bank list](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-banks). |
| `boleto` | See the [Supported Bank list](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-banks). Use the default value `boleto` if no issuer is specified. |
| `cash` | `cash` |
| `credit_card` | `amex`, `argencard`, `aura`, `cabal`, `cencosud`, `codensa`, `cordial`, `cordobesa`, `diners`, `discover`, `elo`, `falabella`, `hiper`, `hipercard`, `hsbc_access_now`, `magna`, `mastercard`, `nativa`, `oi_paggo`, `provencred`, `rebanking`, `sucredito`, `tarjeta_naranja`, `tarjeta_saenz`, `tarjeta_shopping`, `tarjeta_walmart`, `tuya`, `visa` |
| `debit_card` | `cabal_debit`, `maestro`, `visa_debit`, `mastercard_debit`, `vr-beneficios`, `sodexo`, `alelo` |
| `pix` | `pix` |
| `ticket` | `efecty`, `oxxo`, `pagofacil`, `rapipago`, `servipag`, `seven_eleven`, `via_baloto` |
| `wallet` | `daviplata`, `nequi`, `wallet` |
| `wire_transfer` | `banelco`, `link`, `provincia_net`, `pse`, `spei`, `transfiya` |

#### Supported Banks[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#supported-banks "Direct link to Supported Banks")

`banamex`, `banco_chaco`, `banco_chubut`, `banco_ciudad`, `banco_coinag`, `banco_columbia`, `banco_comafi`, `banco_comercio`, `banco_consorcio`, `banco_de_chile`, `banco_do_brasil`, `banco_do_nordeste`, `banco_entre_rios`, `banco_estado`, `banco_falabella`, `banco_hipotecario`, `banco_industrial`, `banco_internacional`, `banco_la_pampa`, `banco_municipal`, `banco_nacion`, `banco_paris`, `banco_patagonia`, `banco_provincia`, `banco_ripley`, `banco_san_juan`, `banco_santa_cruz`, `banco_santa_fe`, `banco_security`, `banco_tierra_del_fuego`, `banco_tucuman`, `banrisul`, `bbva`, `bci`, `bica`, `bice`, `binance`, `bitso`, `bradesco`, `brubank`, `caixa`, `citi`, `coopeuch`, `corpbanca`, `galicia`, `hsbc`, `icbc`, `itau`, `macro`, `rabobank`, `santander`, `scotiabank`, `sicoob`, `sicredi`, `supervielle`