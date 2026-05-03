An order can now have multiple shipments. Each shipment is described in a new entity called Fulfillment Order.

### Backward compatibility[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#backward-compatibility "Direct link to Backward compatibility")

Fulfillment Order keeps a backward compatibility with Order Shipping Information. Compare the atributes from orders shipping to fulfillment orders.

#### Orders V1 to Fulfillment Orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#orders-v1-to-fulfillment-orders "Direct link to Orders V1 to Fulfillment Orders")

| Order V1 | Fulfillment Orders |
| --- | --- |
| order.shipping\_name | fulfillment\_order.recipient.name |
| order.shipping\_phone | fulfillment\_order.recipient.phone |
| order.shipping\_address | fulfillment\_order.destination.street |
| order.shipping\_number | fulfillment\_order.destination.number |
| order.shipping\_floor | fulfillment\_order.destination.floor |
| order.shipping\_locality | fulfillment\_order.destination.locality |
| order.shipping\_zipcode | fulfillment\_order.destination.zipcode |
| order.shipping\_city | fulfillment\_order.destination.city |
| order.shipping\_province | fulfillment\_order.destination.province.name |
| order.shipping\_country | fulfillment\_order.destination.country.name |
| order.shipping\_min\_days | fulfillment\_order.shipping.min\_delivery\_date (non compatible type) |
| order.shipping\_max\_days | fulfillment\_order.shipping.max\_delivery\_date (non compatible type) |
| order.shipping\_cost\_owner | fulfillment\_order.shipping.owner\_cost.value |
| order.shipping\_cost\_customer | fulfillment\_order.shipping.owner\_customer.value |
| order.shipping | fulfillment\_order.shipping.carrier.carrier\_id |
| order.shipping\_option | fulfillment\_order.shipping.option\_name |
| order.shipping\_option\_code | fulfillment\_order.shipping.option\_code |
| order.shipping\_option\_reference | fulfillment\_order.shipping.option\_reference |
| order.shipping\_pickup\_details.\* | fulfillment\_order.shipping.pickup\_details |
| order.shipping\_pickup\_details.name | fulfillment\_order.shipping.pickup\_details.name |
| order.shipping\_pickup\_details.address | fulfillment\_order.shipping.pickup\_details.address |
| order.shipping\_pickup\_details.city | fulfillment\_order.shipping.pickup\_details.city |
| order.shipping\_pickup\_details.province | fulfillment\_order.shipping.pickup\_details.province.name |
| order.shipping\_pickup\_details.pickup\_hours | fulfillment\_order.shipping.pickup\_details.pickup\_hours |
| order.shipping\_tracking\_number | fulfillment\_order.tracking\_info.number |
| order.shipping\_tracking\_url | fulfillment\_order.tracking\_info.url |
| order.shipping\_store\_branch\_name | fulfillment\_order.shipping.pickup\_details.name |
| order.shipping\_pickup\_type | fulfillment\_order.shipping.type |
| order.shipping\_suboption | fulfillment\_order.shipping.pickup\_details |
| order.shipping\_suboption.id | fulfillment\_order.shipping.pickup\_details.location\_id |
| order.shipping\_carrier\_name | fulfillment\_order.shipping.carrier\_name |
| order.shipping\_address.name | fulfillment\_order.recipient.name |
| order.shipping\_address.phone | fulfillment\_order.recipient.phone |
| order.shipping\_address.address | fulfillment\_order.destination.street |
| order.shipping\_address.number | fulfillment\_order.destination.number |
| order.shipping\_address.floor | fulfillment\_order.destination.floor |
| order.shipping\_address.locality | fulfillment\_order.destination.locality |
| order.shipping\_address.zipcode | fulfillment\_order.destination.zipcode |
| order.shipping\_address.city | fulfillment\_order.destination.city |
| order.shipping\_address.province | fulfillment\_order.destination.province.name |
| order.shipping\_address.country | fulfillment\_order.destination.country.name |
| order.shipping\_address.customers.reference | fulfillment\_order.destination.reference |
| order.shipping\_address.customers.between\_streets | fulfillment\_order.destination.between\_streets |
| order.shipping\_tracking\_number | fulfillment\_order.tracking\_info.number |
| order.shipping\_tracking\_url | fulfillment\_order.tracking\_info.url |

#### Orders Fulfillment Events V1 to Fulfillment Orders Tracking Events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#orders-fulfillment-events-v1-to-fulfillment-orders-tracking-events "Direct link to Orders Fulfillment Events V1 to Fulfillment Orders Tracking Events")

| Order Fulfillment Events V1 | Fulfillment Order Tracking Events |
| --- | --- |
| fulfillment\_events.id | fulfillment\_order.tracking\_events.id |
| fulfillment\_events.status | fulfillment\_order.tracking\_events.status |
| fulfillment\_events.descritpion | fulfillment\_order.tracking\_events.description |
| fulfillment\_events.city | fulfillment\_order.tracking\_events.address (non compatible type) \* |
| fulfillment\_events.province | fulfillment\_order.tracking\_events.address (non compatible type) \* |
| fulfillment\_events.country | fulfillment\_order.tracking\_events.address (non compatible type) \* |
| created\_at | fulfillment\_order.tracking\_events.created\_at |
| updated\_at | fulfillment\_order.tracking\_events.updated\_at |
| happened\_at | fulfillment\_order.tracking\_events.happened\_at |
| estimated\_delivery\_at | fulfillment\_order.tracking\_events.estimated\_delivery\_at |
| non exists | fulfillment\_order.tracking\_events.geolocation |

**\*It's up to each application to define how the tracking address is represented as a string. The fulfillment event's city, province and country could be informed in fulfilment\_order.tracking\_events.address by concatenating all the information. Eg.: "Some street 31, Some City, Some State, Some Country".**\`\`\`

## Scopes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#scopes "Direct link to Scopes")

| Property | Explanation |
| --- | --- |
| read\_fulfillment\_orders | Allows you to read actions of one or more fulfillment orders for a merchant. |
| write\_fulfillment\_orders | Allows you to write actions of one or more fulfillment orders for a merchant. |

## Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#properties "Direct link to Properties")

### FulfillmentOrder[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorder "Direct link to FulfillmentOrder")

| Field Name | Field Type | Description |
| --- | --- | --- |
| id | ID | The unique fulfillment order. (ULID) identification |
| number | String | The unique fulfillment order nice number by store |
| total\_quantity | UnsignedInt | The Fulfillment order total line items quantity |
| total\_weight | Decimal | The fulfillment order total line items weight |
| total\_price | Money | The fulfillment order total line items price |
| assigned\_location | FulfillmentOrderAssignedLocation | The fulfillment order assigned location |
| line\_items | FulfillmentOrderLineItem\[\] | The fulfillment order line items |
| recipient | FulfillmentOrderRecipient | The fulfillment order recipient |
| shipping | FulfillmentOrderShipping | The fulfillment order shipping |
| destination | FulfillmentOrderDestination | The fulfillment order destination |
| discounts | FulfillmentOrderDiscount\[\] | The fulfillment order discounts |
| status | FulfillmentOrderStatus | The fulfillment order status |
| status\_history | FulfillmentOrderStatusHistory\[\] | The fulfillment order status history. Default: \[\]. |
| tracking\_info | FulfillmentOrderTrackingInfo | The fulfillment order tracking info |
| tracking\_info\_history | FulfillmentOrderTrackingInfoHistory\[\] | The fulfillment order tracking info history. Default: \[\] |
| tracking\_events | FulfillmentOrderTrackingEvent\[\] | The fulfillment order tracking events. Default: \[\]. |
| fulfilled\_at | DateTime | Date when the fulfillment order was sent in ISO 8601 format. Nullable. |
| created\_at | DateTime | Date when the fulfillment order was last created in ISO 8601 format. |
| updated\_at | DateTime | Date when the fulfillment order was last updated in ISO 8601 format. |

#### FulfillmentOrderAssignedLocation[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderassignedlocation "Direct link to FulfillmentOrderAssignedLocation")

| Field Name | Field Type | Description |
| --- | --- | --- |
| location\_id | ID | The fulfillment order assigned location identification |
| name | String | The fulfillment order assigned location name |
| address | Address | The fulfillment order assigned location address |

#### FulfillmentOrderLineItem[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderlineitem "Direct link to FulfillmentOrderLineItem")

| Field Name | Field Type | Description |
| --- | --- | --- |
| id | ID | The fulfillment order line item id |
| external\_id | ID | The order external id |
| quantity | UnsignedInt | The fulfillment order line item quantity |
| variant | FulfillmentOrderLineItemVariant | The fulfillment order line item variant |
| product | FulfillmentOrderLineItemProduct | The fulfillment order line item product |
| unit\_price | Money | The fulfillment order line item order line line unit price |
| unit\_dimension | FulfillmentOrderLineItemDimension | The fulfillment order line item order line line unit dimension. |
| created\_at | DateTime | Date when the fulfillment order line item was last created in ISO 8601 format. |
| updated\_at | DateTime | Date when the fulfillment order line item was last updated in ISO 8601 format. |
| custom\_fields | Key-Value Dictionary | Dictionary with key-value pairs of the line item custom fields. Returned only when `aggregates` includes `custom_fields`. The key is the custom field name and the value is the custom field value. |

##### FulfillmentOrderLineItemVariant[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderlineitemvariant "Direct link to FulfillmentOrderLineItemVariant")

| Field Name | Field Type | Description |
| --- | --- | --- |
| variant\_id | ID | The fulfillment order line item variant identification. |

##### FulfillmentOrderLineItemProduct[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderlineitemproduct "Direct link to FulfillmentOrderLineItemProduct")

| Field Name | Field Type | Description |
| --- | --- | --- |
| product\_id | ID | The fulfillment order line item product identification. |

##### FulfillmentOrderLineItemDimension[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderlineitemdimension "Direct link to FulfillmentOrderLineItemDimension")

| Field Name | Field Type | Description |
| --- | --- | --- |
| weight | Decimal | The fulfillment order line item dimension weight. |
| width | Decimal | The fulfillment order line item dimension width. |
| height | Decimal | The fulfillment order line item dimension height. |
| depth | Decimal | The fulfillment order line item dimension depth. |

#### FulfillmentOrderRecipient[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderrecipient "Direct link to FulfillmentOrderRecipient")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The fulfillment order recipient name. |
| phone | String | The fulfillment order recipient phone. Optional |
| identifier | String | The fulfillment order recipient identifier. Optional. |

#### FulfillmentOrderShipping[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershipping "Direct link to FulfillmentOrderShipping")

| Field Name | Field Type | Description |
| --- | --- | --- |
| type | FulfillmentOrderShippingType | The fulfillment order shipping type. |
| carrier | Carrier | The fulfillment order shipping carrier. |
| option | Option | The fulfillment order shipping option. |
| merchant\_cost | Money | The fulfillment merchant shipping option cost. |
| consumer\_cost | Money | The fulfillment consumer shipping option cost. |
| min\_delivery\_date | DateTime | The fulfillment minimum estimated delivery date. Nullable. |
| max\_delivery\_date | DateTime | The fulfillment maximum estimated delivery date. Nullable. |
| pickup\_details | FulfillmentOrderShippingPickupDetails | The fulfillment order shipping pickup details. Nullable. |
| extras | FulfillmentOrderShippingExtraProperty | The fulfillment order shipping extra properties. Eg. {"free\_shipping\_id": "123456"}. Nullable. |

##### FulfillmentOrderShippingType[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippingtype "Direct link to FulfillmentOrderShippingType")

| Type | Description |
| --- | --- |
| pickup | The fulfillment order shipping type for pickup point shipping options |
| ship | The fulfillment order shipping type for ship shipping options |
| non-shippable | The fulfillment order shipping type for non shippable |

##### FulfillmentOrderShippingPickupDetails[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippingpickupdetails "Direct link to FulfillmentOrderShippingPickupDetails")

| Field Name | Field Type | Description |
| --- | --- | --- |
| location\_id | String | The fulfillment order shipping pickup detail identification. Ex.: Location ID, IdCentroImposicion (OCA). |
| store\_branch\_id | String | The fulfillment order shipping pickup detail identification for store\_branch\_id. This field will be deprecated with store branch features in the future. |
| name | String | The fulfillment order shipping pickup details name |
| address | Address | The fulfillment order shipping pickup details pickup point address |
| pickup\_hours | FulfillmentOrderPickupHour\[\] | The fulfillment order shipping pickup details pickup hours. Default: \[\] |

###### FulfillmentOrderPickupHour[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderpickuphour "Direct link to FulfillmentOrderPickupHour")

| Field Name | Field Type | Description |
| --- | --- | --- |
| day | FulfillmentOrderPickupHourWeekday | The fulfillment order shipping pickup detail pickup the weekday. Eg.: MONDAY. |
| start | String | The fulfillment order shipping pickup detail pickup hour the start hour. Eg.: 0800 |
| end | String | The fulfillment order shipping pickup detail pickup hour the end hour. Eg.: 1800 |

| Field Name | Field Type | Description |
| --- | --- | --- |
| free\_shipping\_info | FreeShippingInfo | The shipping extra property for free shipping information. |
| phone\_required | Boolean | The shipping option requires a consumer phone number flag indicator. |
| id\_required | Boolean | The shipping option requires a consumer document number flag indicator. |
| accepts\_cod | Boolean | The shipping option accepts cash on delivery flag indicator. |
| show\_time | Boolean | The shipping option must show the estimated delivery time flag indicator. |
| shippable | Boolean | The shipping option is shippable, meaning the package will be sent to the consumer or to the pickup point. |

###### FreeShippingInfo[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#freeshippinginfo "Direct link to FreeShippingInfo")

| Field Name | Field Type | Description |
| --- | --- | --- |
| free\_shipping\_id | ID | The fulfillment order shipping free shipping info free shipping identification. |
| consumer\_original\_cost | Money | The fulfillment order shipping the consumer original cost, without applying the free shipping rules. |

###### FulfillmentOrderPickupHourWeekday[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderpickuphourweekday "Direct link to FulfillmentOrderPickupHourWeekday")

| Type | Description |
| --- | --- |
| MONDAY | The fulfillment order pickup hour weekday constant for monday. |
| TUESDAY | The fulfillment order pickup hour weekday constant for tuesday. |
| WEDNESDAY | The fulfillment order pickup hour weekday constant for wednesday. |
| THURSDAY | The fulfillment order pickup hour weekday constant for thursday. |
| FRIDAY | The fulfillment order pickup hour weekday constant for friday. |
| SATURDAY | The fulfillment order pickup hour weekday constant for saturday. |
| SUNDAY | The fulfillment order pickup hour weekday constant for sunday. |

#### FulfillmentOrderRecipient[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderrecipient-1 "Direct link to FulfillmentOrderRecipient")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The fulfillment order recipient name. |
| phone | String | The fulfillment order recipient phone. Optional |
| identifier | String | The fulfillment order recipient identifier. Optional. |

#### FulfillmentOrderDiscount[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderdiscount "Direct link to FulfillmentOrderDiscount")

| Field Name | Field Type | Description |
| --- | --- | --- |
| type | FulfillmentOrderDiscountType | The discount type. |
| amount | Money | The fulfillment order discount amount. |

###### FulfillmentOrderDiscountType[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderdiscounttype "Direct link to FulfillmentOrderDiscountType")

| Type | Description |
| --- | --- |
| SHIPPING | The fulfillment order discount by shipping. |
| PROMOTION | The fulfillment order discount by promotion. |
| PAYMENT\_METHOD | The fulfillment order discount by payment. |
| TOTAL\_OF\_DISCOUNTS | The fulfillment order total discounts. |

#### FulfillmentOrderDestination[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderdestination "Direct link to FulfillmentOrderDestination")

| Field Name | Field Type | Description |
| --- | --- | --- |
| zipcode | String | The address zipcode. Optional. |
| street | String | The address street. |
| number | String | The address number. Optional. |
| floor | String | The address floor. Brazil's complement. Optional. |
| locality | String | The address locality. Brazil's neighborhood. Optional. |
| city | String | The address city name. Optional. |
| reference | String | The address reference. Optional. |
| between\_streets | String | The address between streets. Optional. |
| province | Province | The address province. Optional. |
| region | Region | The address Region. Optional. |
| country | Country | The address Country. Optional. |

#### FulfillmentOrderStatus[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderstatus "Direct link to FulfillmentOrderStatus")

| Type | Description |
| --- | --- |
| UNPACKED | The fulfillment initial state, same as not started. |
| PACKED | The fulfillment order was packed, same as ready for sending. |
| DISPATCHED | The fulfillment order was sent. |
| READY\_FOR\_PICKUP | The fulfillment order was ready for pickup. |
| DELIVERED | The fulfillment order was fully fulfilled. |

##### Workflow[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#workflow "Direct link to Workflow")

The Fulfillment Order Status Workflow has some validations by Fulfillment Order Shipping Type.

Below are the diagrams indicating the expected flows.

-   _The solid lines indicate indicates the most common and expected workflow._
-   _The dotted lines indicate the alternative allowed workflows._
-   _Depending on the fulfillment order's shipping type, certain flows are not applicable. For example, the `READY_FOR_PICKUP` status applies only to the pickup Shipping Type, while `non-shippable` Shipping Types expect only the `DELIVERED` status._
-   _It is possible to go back to `UNPACKED` only from `PACKED` status._

> **Warning:** To update the fulfillment order status to `DELIVERED`, the preferred approach is through **creating or updating tracking events** with status `delivered`. When the system receives a tracking event with status `delivered` (via POST or PUT), it automatically updates the fulfillment order to `DELIVERED` and sets `fulfilled_at` to the `happened_at` date of that tracking event. Prefer this flow over setting status to `DELIVERED` directly via PATCH on the fulfillment order.

###### FulfillmentOrderShippingType as 'ship'[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippingtype-as-ship "Direct link to FulfillmentOrderShippingType as 'ship'")

![](https://tiendanube.github.io/api-documentation/assets/images/fulfillment-orders-status-shipping-type-ship-0b590ca5815abe92467893a540c254c4.png)

_Fulfillment Orders with Shipping Type `ship` are used for shipping physical products directly to the consumer's home. Ex.: Shipping a t-shirt._

###### FulfillmentOrderShippingType as 'pickup'[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippingtype-as-pickup "Direct link to FulfillmentOrderShippingType as 'pickup'")

![](https://tiendanube.github.io/api-documentation/assets/images/fulfillment-orders-status-shipping-type-pickup-4acd58e5ceb437a5f2e1c550c35030d5.png)

_Fulfillment Orders with Shipping Type `pickup` are used for shipping physical products directly to a pickup point. Ex.: Shipping a t-shirt._

###### FulfillmentOrderShippingType as 'non-shippable'[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippingtype-as-non-shippable "Direct link to FulfillmentOrderShippingType as 'non-shippable'")

![](data:image/png;base64,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)

_Fulfillment Orders with Shipping Type `non-shippable` are used for shipments of non-physical products to the consumer. Ex: classes sent to the consumer's email._

#### FulfillmentOrderStatusHistory[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderstatushistory "Direct link to FulfillmentOrderStatusHistory")

| Field Name | Field Type | Description |
| --- | --- | --- |
| from\_status | FulfillmentOrderStatus | The fulfillment order from status. Nullable. |
| to\_status | FulfillmentOrderStatus | The fulfillment order to status. Nullable. |
| happened\_at | DateTime | Date when the fulfillment order history was happened in ISO 8601 format. |
| created\_at | DateTime | Date when the fulfillment order history was created in ISO 8601 format. |

#### FulfillmentOrderTrackingInfo[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackinginfo "Direct link to FulfillmentOrderTrackingInfo")

| Field Name | Field Type | Description |
| --- | --- | --- |
| url | String | The fulfillment order tracking info url. Nullable. |
| code | String | The fulfillment order tracking info code. Nullable. |

#### FulfillmentOrderTrackingInfoHistory[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackinginfohistory "Direct link to FulfillmentOrderTrackingInfoHistory")

| Field Name | Field Type | Description |
| --- | --- | --- |
| from\_tracking\_info | FulfillmentOrderTrackingInfo | The fulfillment order from tracking info. Nullable. |
| to\_tracking\_info | FulfillmentOrderTrackingInfo | The fulfillment order to tracking info. Nullable. |
| happened\_at | DateTime | Date when the fulfillment order history was happened in ISO 8601 format. |
| created\_at | DateTime | Date when the fulfillment order history was created in ISO 8601 format. |
| app\_id | String | App ID of the app who made this change. |
| user\_id | String | User ID of the person who made this change. |

#### FulfillmentOrderTrackingEvent[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingevent "Direct link to FulfillmentOrderTrackingEvent")

| Field Name | Field Type | Description |
| --- | --- | --- |
| id | ID | The fulfillment order tracking event identification. (ULID) |
| status | FulfillmentOrderTrackingEventStatus | The fulfillment order tracking event status. |
| description | String | The fulfillment order tracking event description. |
| address | String | The fulfillment order tracking event address information. Eg.: "St. Paul 123 - Ciudad - AR 1298". Nullable. |
| geolocation | FulfillmentOrderTrackingEventGeolocation | The fulfillment order tracking event geolocation. Nullable. |
| happened\_at | DateTime | Date when the fulfillment order tracking event happened in ISO 8601 format. If **Null** Assumed **NOW** |
| estimated\_delivery\_at | DateTime | Date when the fulfillment order tracking event estimated delivery at in ISO 8601 format. Nullable. |
| created\_at | DateTime | Date when the fulfillment order tracking event was created in ISO 8601 format. |
| updated\_at | DateTime | Date when the fulfillment order tracking event was updated in ISO 8601 format. |

##### FulfillmentOrderTrackingEventStatus[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventstatus "Direct link to FulfillmentOrderTrackingEventStatus")

| Type | Description |
| --- | --- |
| dispatched | Package has been posted by the merchant. |
| received\_by\_post\_office | Package has been received by the Shipping Carrier. |
| in\_transit | Package is in transit. |
| out\_for\_delivery | Package is out for delivery. |
| delivery\_attempt\_failed | Package could not be delivered. |
| delayed | Package delayed. |
| ready\_for\_pickup | Package is ready for pickup. |
| delivered | Package was delivered. |
| returned\_to\_sender | Package was returned to the sender. |
| lost | Package lost. |
| failure | Package delivery failed. |
| custom\_**{status}** | Package any custom status informed by a shipping partner. |

##### FulfillmentOrderTrackingEventGeolocation[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventgeolocation "Direct link to FulfillmentOrderTrackingEventGeolocation")

| Field Name | Field Type | Description |
| --- | --- | --- |
| longitude | Decimal | The fulfillment order tracking event geolocation longitude. |
| latitude | Decimal | The fulfillment order tracking event geolocation latitude. |

##### Money[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#money "Direct link to Money")

| Field Name | Field Type | Description |
| --- | --- | --- |
| value | Decimal | The amount value |
| currency | String | The isocode currency code |

##### Carrier[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#carrier "Direct link to Carrier")

| Field Name | Field Type | Description |
| --- | --- | --- |
| carrier\_id | String | The carrier identification. It could be alphanumeric identification like current shipping native methods or shipping carrier id identification. |
| code | CarrierCodeType | The carrier code type. |
| name | String | The carrier name. |
| app\_id | String | The carrier application identification. Default: `null`. |

###### CarrierCodeType[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#carriercodetype "Direct link to CarrierCodeType")

| Type | Description |
| --- | --- |
| api | The shipping carrier is a shipping method from carriers API. |
| custom | The shipping carrier is a shipping method from customs configured by merchant. |
| locale | The shipping carrier is a shipping method from locales (branchs) configured by merchant. |
| international | The shipping carrier is a shipping from international customs configured by merchant. |
| native | The shipping carrier is a shipping from a internal integration created by Nuvemshop/Tiendanube and configured by merchant. |
| draft | The shipping carrier is a shipping from draft orders. |
| default | The shipping carrier is a shipping from default orders. |

##### Option[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#option "Direct link to Option")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The option name. |
| code | String | The option code. |
| reference | String | The option reference. |
| allow\_free\_shipping | Boolean | The option allows a free shipping flag indicator. Default: null. |

##### Address[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#address "Direct link to Address")

| Field Name | Field Type | Description |
| --- | --- | --- |
| zipcode | String | The address zipcode. Optional. |
| street | String | The address street. |
| number | String | The address number. Optional. |
| floor | String | The address floor. Brazil's complement. Optional. |
| locality | String | The address locality. Brazil's neighborhood. Optional. |
| city | String | The address city name. Optional. |
| reference | String | The address reference. Optional. |
| between\_streets | String | The address between streets. Optional. |
| province | Province | The address province. Optional. |
| region | Region | The address Region. Optional. |
| country | Country | The address Country. Optional. |

###### Provice[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#provice "Direct link to Provice")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The province name. |
| code | String | The province code. |

###### Region[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#region "Direct link to Region")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The region name. |
| code | String | The region code. |

###### Country[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#country "Direct link to Country")

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | String | The country name. |
| code | String | The country code. |

### FulfillmentOrderPaginated[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderpaginated "Direct link to FulfillmentOrderPaginated")

| Field Name | Field Type | Description |
| --- | --- | --- |
| total | UnsignedInt | Total of FulfillmentOrder. |
| page | UnsignedInt | Current page. |
| per\_page | UnsignedInt | Quantity of FulfillmentOrder per page. |
| results | FulfillmentOrder\[\] | List of fulfillment orders. |

### Error[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#error "Direct link to Error")

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | String | Http status description. |
| message | String | Error Message. |

### Validation[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#validation "Direct link to Validation")

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | String | Http status description. |
| messages | Message\[\] | List of inputs validation messages. |

#### Message[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#message "Direct link to Message")

| Type | Description |
| --- | --- |
| String\[\] | The error message input. This value is dynamic. Eg.: "shipping.carrier.carrier\_id": \["should not be empty", "must be a string"\]. |

## Input Request Properties[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#input-request-properties "Direct link to Input Request Properties")

### FulfillmentOrderInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderinput "Direct link to FulfillmentOrderInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| assigned\_location | FulfillmentOrderAssignedLocationInput | ✅ | ❌ | The fulfillment order assigned location. |
| line\_items | FulfillmentOrderLineItemInput\[\] | ✅ | ❌ | The fulfillment order line item input list. |
| recipient | FulfillmentOrderRecipientInput | ✅ | ❌ | The fulfillment order recipient input. |
| destination | FulfillmentOrderDestinationInput | ✅ | ✅ | The fulfillment order destination input. |
| shipping | FulfillmentOrderShippingInput | ✅ | ✅ | The fulfillment order shipping input. |

#### FulfillmentOrderAssignedLocationInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderassignedlocationinput "Direct link to FulfillmentOrderAssignedLocationInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| id | ID | ✅ | ❌ | The fulfillment order assigned location input identification. (ULID) |

#### FulfillmentOrderLineItemInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderlineiteminput "Direct link to FulfillmentOrderLineItemInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| quantity | UnsignedInt | ✅ | ❌ | The fulfillment order line item input quantity. |
| order\_line\_item\_id | ID | ✅ | ❌ | The order line item identification reference. |

#### FulfillmentOrderRecipientInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderrecipientinput "Direct link to FulfillmentOrderRecipientInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| name | String | ✅ | ❌ | The fulfillment order recipient input name. |
| phone | String | ✅ | ✅ | The fulfillment order recipient input phone. |
| identifier | String | ✅ | ✅ | The fulfillment order recipient input identifier. |

#### FulfillmentOrderShippingInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordershippinginput "Direct link to FulfillmentOrderShippingInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| type | FulfillmentOrderShippingType | ✅ | ❌ | The fulfillment order shipping type. Eg.: pickup, ship. |
| carrier | CarrierInput | ✅ | ✅ | The fulfillment order shipping carrier input. |
| option | OptionInput | ✅ | ✅ | The fulfillment order shipping option input. |
| merchant\_cost | MoneyInput | ✅ | ❌ | The fulfillment order merchant shipping cost. |
| consumer\_cost | MoneyInput | ✅ | ❌ | The fulfillment order consumer shipping cost. |
| min\_delivery\_date | DateTime | ✅ | ✅ | The fulfillment order shipping min delivery date. |
| max\_delivery\_date | DateTime | ✅ | ✅ | The fulfillment order shipping max delivery date. |
| pickup\_details | PickupDetailsInput | ✅ | ✅ | The fulfillment order shipping pickup details. |

##### CarrierInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#carrierinput "Direct link to CarrierInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| id | String | ✅ | ❌ | The shipping carrier input identification. Eg.: "1234", "correios", "oca". |
| code | CarrierCodeTypeInput | ✅ | ❌ | The shipping carrier input type. |
| app\_id | String | ❌ | ✅ | The shipping carrier application identification. Default: `null` |

###### CarrierCodeTypeInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#carriercodetypeinput "Direct link to CarrierCodeTypeInput")

| Type | Description |
| --- | --- |
| api | The shipping carrier is a shipping method from carriers API. |
| custom | The shipping carrier is a shipping method from customs configured by merchant. |
| locale | The shipping carrier is a shipping method from locales (branchs) configured by merchant. |
| international | The shipping carrier is a shipping from international customs configured by merchant. |
| native | The shipping carrier is a shipping from a internal integration created by Nuvemshop/Tiendanube and configured by merchant. |
| draft | The shipping carrier is a shipping from draft orders. |
| default | The shipping carrier is a shipping from default orders. |

##### OptionInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#optioninput "Direct link to OptionInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| code | String | ✅ | ❌ | The shipping option input code. Eg.: "pac", "sedex". |
| reference | String | ✅ | ✅ | The shipping option input reference. |
| allow\_free\_shipping | String | ❌ | ✅ | The shipping option input allows free shipping flag indicator. Default: false. |

##### PickupDetailsInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#pickupdetailsinput "Direct link to PickupDetailsInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| location\_id | String | ✅ | ❌ | The shipping pickup details input identification. |
| name | String | ✅ | ❌ | The shipping pickup details input name. |
| address | AddreeInput | ✅ | ❌ | The shipping pickup details input address. |
| pickup\_hours | PickupHourInput\[\] | ❌ | ❌ | The shipping pickup details input pickup hours. Default: \[\]. |

###### PickupHourInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#pickuphourinput "Direct link to PickupHourInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| day | FulfillmentOrderPickupHourWeekday | ✅ | ❌ | The fulfillment order shipping pickup details the weekday. Eg.: MONDAY |
| start | String | ✅ | ❌ | The fulfillment order shipping pickup detail pickup hour the start hour. Eg.: 0800 |
| end | String | ✅ | ❌ | The fulfillment order shipping pickup detail pickup hour the end hour. Eg.: 1800 |

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| free\_shipping\_info | FreeShippingInput | ❌ | ❌ | The shipping extra property input for free shipping information. |
| phone\_required | Boolean | ❌ | ❌ | The shipping option requires a consumer phone number flag indicator. |
| id\_required | Boolean | ❌ | ❌ | The shipping option requires a consumer document number flag indicator. |
| accepts\_cod | Boolean | ❌ | ❌ | The shipping option accepts cash on delivery flag indicator. |
| show\_time | Boolean | ❌ | ❌ | The shipping option must show the estimated delivery time flag indicator. |
| shippable | Boolean | ❌ | ❌ | The shipping option is shippable, meaning the package will be sent to the consumer or to the pickup point. |

###### FreeShippingInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#freeshippinginput "Direct link to FreeShippingInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| free\_shipping\_id | ID | ✅ | ❌ | The shipping free shipping info input free shipping identification input. |
| consumer\_original\_cost | Money | ✅ | ❌ | The shipping free shipping info input the consumer original shipping cost. |

#### FulfillmentOrderDestinationInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderdestinationinput "Direct link to FulfillmentOrderDestinationInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| zipcode | String | ✅ | ✅ | The fulfillment order destination input zipcode. |
| street | String | ✅ | ❌ | The fulfillment order destination input street. |
| number | String | ✅ | ✅ | The fulfillment order destination input number. |
| floor | String | ✅ | ✅ | The fulfillment order destination input floor. |
| locality | String | ✅ | ✅ | The fulfillment order destination input locality. |
| city | String | ✅ | ✅ | The fulfillment order destination input city name. |
| reference | String | ✅ | ✅ | The fulfillment order destination input reference. |
| between\_streets | String | ✅ | ✅ | The fulfillment order destination input between streets. |
| province | ProvinceInput | ✅ | ✅ | The fulfillment order destination input province. |
| region | RegionInput | ✅ | ✅ | The fulfillment order destination input region. |
| country | CountryInput | ✅ | ❌ | The fulfillment order destination input country. |

#### FulfillmentOrderStatusInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderstatusinput "Direct link to FulfillmentOrderStatusInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| status | FulfillmentOrderStatus | ✅ | ❌ | The fulfillment order status input status. |

#### FulfillmentOrderTrackingInfoInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackinginfoinput "Direct link to FulfillmentOrderTrackingInfoInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| code | String | ✅ | ✅ | The fulfillment order tracking info input tracking number. |
| url | String | ✅ | ✅ | The fulfillment order tracking info input tracking number. |
| notify\_customer | Boolean | ✅ | ❌ | Notify the customer about the fulfillment (the default value is false) |

#### FulfillmentOrderTrackingEventInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventinput "Direct link to FulfillmentOrderTrackingEventInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| status | FulfillmentOrderTrackingEventStatus | ✅ | ❌ | The fulfillment order tracking event input status. |
| description | String | ✅ | ❌ | The fulfillment order tracking event input description. |
| address | String | ✅ | ✅ | The fulfillment order tracking event input address as one liner address. Ex: St. Julio 123, Ciudad, Argentina. |
| geolocation | FulfillmentOrderTrackingEventGeolocationInput | ✅ | ✅ | The fulfillment order tracking event geolocation input. |
| happened\_at | DateTime | ✅ | ✅ | The fulfillment order tracking event input happened at the event. If null, the event was taken as now. |
| estimated\_delivery\_at | DateTime | ✅ | ✅ | The fulfillment order tracking event input estimated delivery date time to arrive. |

##### FulfillmentOrderTrackingEventGeolocationInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventgeolocationinput "Direct link to FulfillmentOrderTrackingEventGeolocationInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| latitude | Decimal | ✅ | ❌ | The fulfillment order tracking event geolocation latitude input. |
| longitude | Decimal | ✅ | ❌ | The fulfillment order tracking event geolocation longitude input. |

##### MoneyInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#moneyinput "Direct link to MoneyInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| value | Decimal | ✅ | ❌ | The money input value. |
| currency | String | ✅ | ❌ | The money input currency isocode. Eg.: ARS, BRL. |

##### AddressInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#addressinput "Direct link to AddressInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| zipcode | String | ✅ | ✅ | The fulfillment order address input zipcode. |
| street | String | ✅ | ✅ | The fulfillment order address input street. |
| number | String | ✅ | ✅ | The fulfillment order address input number. |
| floor | String | ✅ | ✅ | The fulfillment order address input floor. |
| locality | String | ✅ | ✅ | The fulfillment order address input locality. |
| city | String | ✅ | ✅ | The fulfillment order address input city name. |
| reference | String | ✅ | ✅ | The fulfillment order address input reference. |
| between\_streets | String | ✅ | ✅ | The fulfillment order address input between streets. |
| province | ProvinceInput | ✅ | ✅ | The fulfillment order address input province. |
| region | RegionInput | ✅ | ✅ | The fulfillment order address input region. |
| country | CountryInput | ✅ | ✅ | The fulfillment order address input country. |

###### ProvinceInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#provinceinput "Direct link to ProvinceInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| name | String | ✅ | ❌ | The province input name. |
| code | String | ✅ | ❌ | The province input code. |

###### RegionInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#regioninput "Direct link to RegionInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| name | String | ✅ | ❌ | The region input name. |
| code | String | ✅ | ❌ | The region input code. |

###### CountryInput[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#countryinput "Direct link to CountryInput")

| Field Name | Field Type | Mandatory | Nullable | Description |
| --- | --- | --- | --- | --- |
| name | String | ✅ | ❌ | The country input name. |
| code | String | ✅ | ❌ | The country input code. |

## Endpoints[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#endpoints "Direct link to Endpoints")

### GET /orders/{order\_id}/fulfillment-orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idfulfillment-orders "Direct link to GET /orders/{order_id}/fulfillment-orders")

Retrive all Order Fulfillments from a specific Order.

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Parameters[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#parameters "Direct link to Parameters")

| Parameter | Explanation |
| --- | --- |
| aggregates | One possible value: `custom_fields`. Enables a `custom_fields` dictionary inside each FulfillmentOrder line item with the line item custom fields information. |

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrder\[\] | The List of Fulfillment Orders Response. |

###### GET /orders/123456/fulfillment-orders[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders123456fulfillment-orders "Direct link to GET /orders/123456/fulfillment-orders")

```
[   {      "id": "01FHZXHK8PTP9FVK99Z66GXKKK",      "number": "123456",      "total_quantity": 12,      "total_weight": 12.12,      "total_price": {         "value": 123.45,         "currency": "BRL"      },      "assigned_location": {         "location_id": "01FHZXHK8PTP9FVK99Z66GXQTX",         "name": "Location name",         "address": {            "zipcode": "12910802",            "street": "Some Street",            "number": "100",            "floor": "Some Floor",            "locality": "Some Locality",            "city": "Some City",            "reference": "Some Reference",            "between_streets": "Some Between Streets",            "province": {               "code": "SP",               "name": "São Paulo"               },               "region": {                  "code": "SE",                  "name": "Sudeste"               },               "country": {                  "code": "BR",                  "name": "Brasil"               }         }      },      "line_items": [         {            "id": "01J1QCWJXGNX56JP0NCBS0G711",            "external_id": "123",            "quantity": 1,            "variant": {               "variant_id": "12345678"            },            "product": {               "product_id": "12345678"            },            "unit_price": {               "value": 123.45,               "currency": "BRL"            },            "unit_dimension": {               "weight": 1.23456,               "width": 12.34567,               "height": 12.34567,               "depth": 12.34567            },            "created_at": "2022-11-24T10:20:19+00:00",            "updated_at": "2022-11-24T10:20:19+00:00"                   }      ],      "recipient": {         "name": "Recipient name",         "phone": "11988864311",         "identifier": "11223344B"      },      "shipping": {         "type": "pickup|ship",         "carrier": {            "name": "Some Carrier Name",            "carrier_id": "12345",            "code": "api",            "app_id": "12345"         },         "option": {               "name": "Some Option Name",               "code": "some-option-code",               "reference": "some-option-ref",               "allow_free_shipping": true         },         "merchant_cost": {               "value": 123.14,               "currency": "BRL"         },         "consumer_cost": {               "value": 123.14,               "currency": "BRL"         },         "min_delivery_date": "2022-11-24T10:20:19+00:00",         "max_delivery_date": "2022-11-25T10:20:19+00:00",         "pickup_details": {            "location_id": "pickup-option-id",            "name": "Some option pickup detail name",            "address": {               "zipcode": "12910802",               "street": "Some Street",               "number": "100",               "floor": "Some Floor",               "locality": "Some Locality",               "city": "Some City",               "reference": "Some Reference",               "between_streets": "Some Between Streets",               "province": {                  "name": "São Paulo",                  "code": "SP"               },               "region": {                  "name": "Sudeste",                  "code": "SE"               },               "country": {                  "name": "Brasil",                  "code": "BR"               }            },            "pickup_hours": [               {                  "day": "MONDAY",                  "start": "0800",                  "end": "1800"               }            ]         },         "extras": {            "free_shipping_info": {               "free_shipping_id": "1234567",               "consumer_original_cost": {                     "value": 12.34,                     "currency": "BRL"               }            },            "phone_required": true,            "id_required": true,            "accepts_cod": true,            "show_time": true,            "shippable": true         }      },      "discounts": [         {            "type": "TOTAL_OF_DISCOUNTS",            "amount": {               "value": 20,               "currency": "BRL"            }         }      ],      "destination": {         "zipcode": "12910802",         "street": "Some Street",         "number": "100",         "floor": "Some Floor",         "locality": "Some Locality",         "city": "Some City",         "reference": "Some Reference",         "between_streets": "Some Between Streets",         "province": {               "name": "São Paulo",               "code": "SP"            },            "region": {               "name": "Sudeste",               "code": "SE"            },            "country": {               "name": "Brasil",               "code": "BR"            }      },      "status": "PACKED",      "status_history": [         {            "from_status": "UNPACKED",            "to_status": "PACKED",            "happened_at": "2022-11-24T10:20:19+00:00",            "created_at": "2022-11-24T10:20:19+00:00"         }      ],      "tracking_info": {         "url": "https://tracking-url.com",         "code": "BDJ9999"      },      "tracking_info_history": [        {            "from_tracking_info": {                "url": null,                "code": null            },            "to_tracking_info": {                "url": "https://tracking-url.com",                "code": "BDJ9999"            },            "happened_at": "2022-11-24T10:20:19+00:00",            "created_at": "2022-11-24T11:29:57.742Z",            "app_id": "1",            "user_id": "1"        }      ],      "tracking_events": [         {            "id": "01FHZXHK8PTP9FVK99Z66GXJIO",            "status": "dispatched",            "description": "The package was dispatched",            "address": "St. Poul 123, Ciudad - Argentina 1290",            "geolocation": {               "longitude": 73.856077,               "latitude": 40.848447            },            "happened_at": "2022-11-24T10:20:19+00:00",                              "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                              "created_at": "2022-11-24T10:20:19+00:00",            "updated_at": "2022-11-24T10:20:19+00:00"         }      ],      "fulfilled_at": null,      "created_at": "2022-11-24T10:20:19+00:00",      "updated_at": "2022-11-24T10:20:19+00:00"   }]
```

###### GET /orders/123456/fulfillment-orders?aggregates=custom\_fields[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders123456fulfillment-ordersaggregatescustom_fields "Direct link to GET /orders/123456/fulfillment-orders?aggregates=custom_fields")

```
[   {      "id": "01FHZXHK8PTP9FVK99Z66GXKKK",      "number": "123456",      "total_quantity": 12,      "total_weight": 12.12,      "total_price": {         "value": 123.45,         "currency": "BRL"      },      "assigned_location": {         "location_id": "01FHZXHK8PTP9FVK99Z66GXQTX",         "name": "Location name",         "address": {            "zipcode": "12910802",            "street": "Some Street",            "number": "100",            "floor": "Some Floor",            "locality": "Some Locality",            "city": "Some City",            "reference": "Some Reference",            "between_streets": "Some Between Streets",            "province": {               "code": "SP",               "name": "São Paulo"               },               "region": {                  "code": "SE",                  "name": "Sudeste"               },               "country": {                  "code": "BR",                  "name": "Brasil"               }         }      },      "line_items": [         {            "id": "01J1QCWJXGNX56JP0NCBS0G711",            "external_id": "123",            "quantity": 1,            "variant": {               "variant_id": "12345678"            },            "product": {               "product_id": "12345678"            },            "unit_price": {               "value": 123.45,               "currency": "BRL"            },            "unit_dimension": {               "weight": 1.23456,               "width": 12.34567,               "height": 12.34567,               "depth": 12.34567            },            "created_at": "2022-11-24T10:20:19+00:00",            "updated_at": "2022-11-24T10:20:19+00:00",            "custom_fields": {               "nombre": "John Doe",               "my_custom_field": "my_custom_value"            }         }      ],      "recipient": {         "name": "Recipient name",         "phone": "11988864311",         "identifier": "11223344B"      },      "shipping": {         "type": "pickup|ship",         "carrier": {            "name": "Some Carrier Name",            "carrier_id": "12345",            "code": "api",            "app_id": "12345"         },         "option": {               "name": "Some Option Name",               "code": "some-option-code",               "reference": "some-option-ref",               "allow_free_shipping": true         },         "merchant_cost": {               "value": 123.14,               "currency": "BRL"         },         "consumer_cost": {               "value": 123.14,               "currency": "BRL"         },         "min_delivery_date": "2022-11-24T10:20:19+00:00",         "max_delivery_date": "2022-11-25T10:20:19+00:00",         "pickup_details": {            "location_id": "pickup-option-id",            "name": "Some option pickup detail name",            "address": {               "zipcode": "12910802",               "street": "Some Street",               "number": "100",               "floor": "Some Floor",               "locality": "Some Locality",               "city": "Some City",               "reference": "Some Reference",               "between_streets": "Some Between Streets",               "province": {                  "name": "São Paulo",                  "code": "SP"               },               "region": {                  "name": "Sudeste",                  "code": "SE"               },               "country": {                  "name": "Brasil",                  "code": "BR"               }            },            "pickup_hours": [               {                  "day": "MONDAY",                  "start": "0800",                  "end": "1800"               }            ]         },         "extras": {            "free_shipping_info": {               "free_shipping_id": "1234567",               "consumer_original_cost": {                     "value": 12.34,                     "currency": "BRL"               }            },            "phone_required": true,            "id_required": true,            "accepts_cod": true,            "show_time": true,            "shippable": true         }      },      "discounts": [         {            "type": "TOTAL_OF_DISCOUNTS",            "amount": {               "value": 20,               "currency": "BRL"            }         }      ],      "destination": {         "zipcode": "12910802",         "street": "Some Street",         "number": "100",         "floor": "Some Floor",         "locality": "Some Locality",         "city": "Some City",         "reference": "Some Reference",         "between_streets": "Some Between Streets",         "province": {               "name": "São Paulo",               "code": "SP"            },            "region": {               "name": "Sudeste",               "code": "SE"            },            "country": {               "name": "Brasil",               "code": "BR"            }      },      "status": "PACKED",      "status_history": [         {            "from_status": "UNPACKED",            "to_status": "PACKED",            "happened_at": "2022-11-24T10:20:19+00:00",            "created_at": "2022-11-24T10:20:19+00:00"         }      ],      "tracking_info": {         "url": "https://tracking-url.com",         "code": "BDJ9999"      },      "tracking_info_history": [        {            "from_tracking_info": {                "url": null,                "code": null            },            "to_tracking_info": {                "url": "https://tracking-url.com",                "code": "BDJ9999"            },            "happened_at": "2022-11-24T10:20:19+00:00",            "created_at": "2022-11-24T11:29:57.742Z",            "app_id": "1",            "user_id": "1"        }      ],      "tracking_events": [         {            "id": "01FHZXHK8PTP9FVK99Z66GXJIO",            "status": "dispatched",            "description": "The package was dispatched",            "address": "St. Poul 123, Ciudad - Argentina 1290",            "geolocation": {               "longitude": 73.856077,               "latitude": 40.848447            },            "happened_at": "2022-11-24T10:20:19+00:00",                              "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                              "created_at": "2022-11-24T10:20:19+00:00",            "updated_at": "2022-11-24T10:20:19+00:00"         }      ],      "fulfilled_at": null,      "created_at": "2022-11-24T10:20:19+00:00",      "updated_at": "2022-11-24T10:20:19+00:00"   }]
```

| Type | Description |
| --- | --- |
| Error | The Unauthorized Error Response |

### GET /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idfulfillment-ordersfulfillment_order_id "Direct link to GET /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}")

Get a Fulfillment Order By Identifier

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-1 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-1 "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok-1 "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrder | The Fulfillment Order Response. |

###### GET /orders/123456/fulfillment-orders/01FHZXHK8PTP9FVK99Z66GXASS[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders123456fulfillment-orders01fhzxhk8ptp9fvk99z66gxass "Direct link to GET /orders/123456/fulfillment-orders/01FHZXHK8PTP9FVK99Z66GXASS")

```
{   "id": "01FHZXHK8PTP9FVK99Z66GXASS",   "number": "123456",   "total_quantity": 12,   "total_weight": 12.12,   "total_price": {       "value": 123.45,       "currency": "BRL"   },   "assigned_location": {      "location_id": "01FHZXHK8PTP9FVK99Z66GXQTX",      "name": "Location name",      "address": {         "zipcode": "12910802",         "street": "Some Street",         "number": "100",         "floor": "Some Floor",         "locality": "Some Locality",         "city": "Some City",         "reference": "Some Reference",         "between_streets": "Some Between Streets",         "province": {            "code": "SP",            "name": "São Paulo"         },         "region": {            "code": "SE",            "name": "Sudeste"         },         "country": {            "code": "BR",            "name": "Brasil"         }      }  },  "line_items": [      {         "quantity": 1,         "variant": {            "variant_id": "12345678"         },         "product": {            "product_id": "12345678"         },          "unit_price": {             "value": 123.45,             "currency": "BRL"          },          "unit_dimension": {             "weight": 1.23456,             "width": 12.34567,             "height": 12.34567,             "depth": 12.34567          },          "created_at": "2022-11-24T10:20:19+00:00",          "updated_at": "2022-11-24T10:20:19+00:00"                }  ],  "recipient": {     "name": "Recipient name",     "phone": "11988864311",     "identifier": "11223344B",     "allow_free_shipping": false  },  "shipping": {      "type": "pickup|ship",      "carrier": {         "name": "Some Carrier Name",         "code": "api",         "carrier_id": "12345",         "app_id": "12345"      },      "option": {         "name": "Some Option Name",         "code": "some-option-code",         "reference": "some-option-ref"      },      "merchant_cost": {         "value": 123.14,         "currency": "BRL"      },     "consumer_cost": {         "value": 123.14,         "currency": "BRL"     },     "min_delivery_date": "2022-11-24T10:20:19+00:00",     "max_delivery_date": "2022-11-25T10:20:19+00:00",     "pickup_details": {         "location_id": "pickup-option-id",         "name": "Some option pickup detail name",         "address": {             "zipcode": "12910802",             "street": "Some Street",             "number": "100",             "floor": "Some Floor",             "locality": "Some Locality",             "city": "Some City",             "reference": "Some Reference",             "between_streets": "Some Between Streets",             "province": {                "name": "São Paulo",                "code": "SP"             },             "region": {                "name": "Sudeste",                "code": "SE"             },             "country": {                "name": "Brasil",                "code": "BR"             }         },         "pickup_hours": [             {                "day": "MONDAY",                "start": "0800",                "end": "1800"             }         ],         "extras": {            "free_shipping_info": {               "free_shipping_id": "1234567",               "consumer_original_cost": {                     "value": 12.34,                     "currency": "BRL"               }            },            "phone_required": true,            "id_required": true,            "accepts_cod": true,            "show_time": true,            "shippable": true         }      }   },   "destination": {      "zipcode": "12910802",      "street": "Some Street",      "number": "100",      "floor": "Some Floor",      "locality": "Some Locality",      "city": "Some City",      "reference": "Some Reference",      "between_streets": "Some Between Streets",      "province": {          "name": "São Paulo",          "code": "SP"      },      "region": {          "name": "Sudeste",          "code": "SE"      },      "country": {          "name": "Brasil",          "code": "BR"      }   },   "status": "PACKED",   "status_history": [      {         "from_status": "UNPACKED",         "to_status": "PACKED",         "happened_at": "2022-11-24T10:20:19+00:00",         "created_at": "2022-11-24T10:20:19+00:00"      }   ],   "tracking_info": {         "url": "https://tracking-url.com",         "code": "BDJ9999"      },   "tracking_info_history": [      {         "from_tracking_info": {               "url": null,               "code": null         },         "to_tracking_info": {               "url": "https://tracking-url.com",               "code": "BDJ9999"         },         "happened_at": "2022-11-24T10:20:19+00:00",         "created_at": "2022-11-24T11:29:57.742Z",         "app_id": "1",         "user_id": "1"      }   ],   "tracking_events": [      {         "id": "01FHZXHK8PTP9FVK99Z66GXJIO",         "status": "dispatched",         "description": "The package was dispatched",         "address": "St. Paul 123, Ciudad - Argentina 1290",         "geolocation": {             "longitude": 73.856077,            "latitude": 40.848447         },         "happened_at": "2022-11-24T10:20:19+00:00",                           "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                           "created_at": "2022-11-24T10:20:19+00:00",         "updated_at": "2022-11-24T10:20:19+00:00"      }   ],   "fulfilled_at": "2022-11-24T10:20:19+00:00",   "created_at": "2022-11-24T10:20:19+00:00",   "updated_at": "2022-11-24T10:20:19+00:00"}
```

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-1 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Error Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order Error Response |

### DELETE /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-ordersorder_idfulfillment-ordersfulfillment_order_id "Direct link to DELETE /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}")

Delete Fulfillment Order By Identifier

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-2 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-2 "Direct link to Responses")

##### HTTP 204 - No Content[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-204---no-content "Direct link to HTTP 204 - No Content")

###### DELETE /orders/123456/fulfillment-orders/01FHZXHK8PTP9FVK99Z66GXASS[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-orders123456fulfillment-orders01fhzxhk8ptp9fvk99z66gxass "Direct link to DELETE /orders/123456/fulfillment-orders/01FHZXHK8PTP9FVK99Z66GXASS")

##### HTTP 400 - Bad Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-400---bad-request "Direct link to HTTP 400 - Bad Request")

| Type | Description |
| --- | --- |
| Error | The Fulfillment Order Delete Error Response |

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-2 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Error Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found-1 "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order Error Response |

### PATCH /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-ordersorder_idfulfillment-ordersfulfillment_order_id "Direct link to PATCH /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}")

Update Fulfillment Order Status, Tracking Info, Destination, Recipient, Shipping, Assigned Location

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-3 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#notes "Direct link to Notes")

-   Parameters are sent in body, JSON format
-   FulfillmentOrderStatusInput or and FulfillmentOrderTrackingInfoInput or and FulfillmentOrderDestinationInput or and FulfillmentOrderShippingInput or and FulfillmentOrderRecipientInput or and FulfillmentOrderAssignedLocationInput
-   Fulfillment Order Already sent Cannot be Update Destination Information
-   Fulfillment Order Already sent Cannot be Update Shipping Information
-   Fulfillment Order Already sent Cannot be Update Recipient Information
-   Fulfillment Order Already packed or sent Cannot be Update Assigned Location Information
-   If the status is DELIVERED, the fulfillment order will be marked as fulfilled. This means the fulfilled\_at field will be filled with the current date and time.

#### Request Payload[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#request-payload "Direct link to Request Payload")

| Type | Description |
| --- | --- |
| FulfillmentOrderInput | The Fulfillment Order Input. |

```
{  "status": "PACKED",  "tracking_info": {     "code": "BR123123123AA",     "url": "https://www.correios.com.br/BB123123123AA",     "notify_customer": true  },  "destination": {     "zipcode": "12910802",     "street": "Some Street",     "number": "100",     "floor": "Some Floor",     "locality": "Some Locality",     "city": "Some City",     "reference": "Some Reference",     "between_streets": "Some Between Streets",     "province": {        "code": "SP"     },     "region": {        "code": "SP"     },     "country": {        "code": "BR"     }  },  "shipping": {     "type": "pickup|ship",     "carrier": {        "carrier_id": "12345",        "code": "api",        "app_id": "12345"     },     "option": {        "code": "some-option-code",        "reference": "some-option-ref",        "allow_free_shipping": true     },     "merchant_cost": {        "value": 123.14,        "currency": "BRL"     },     "consumer_cost": {        "value": 123.14,        "currency": "BRL"     },     "min_delivery_date": "2022-11-24T10:20:19+00:00",     "max_delivery_date": "2022-11-25T10:20:19+00:00",     "pickup_details": {        "location_id": "pickup-option-id",        "name": "Some option pickup detail name",        "address": {           "zipcode": "12910802",           "street": "Some Street",           "number": "100",           "floor": "Some Floor",           "locality": "Some Locality",           "city": "Some City",           "reference": "Some Reference",           "between_streets": "Some Between Streets",           "province": {              "code": "SP"           },           "region": {              "code": "SE"           },           "country": {              "code": "BR"           }        },        "pickup_hours": [            {               "day": "MONDAY",               "start": "0800",               "end": "1800"            }        ]     },     "extras": {        "free_shipping_info": {           "free_shipping_id": "1234567",           "consumer_original_cost": {              "value": 12.34,              "currency": "BRL"           }        },        "phone_required": true,        "id_required": true,        "accepts_cod": true,        "show_time": true,        "shippable": true     }  },  "recipient": {     "name": "Some Name",     "phone": "11988864311",     "identifier": "44112233"  },  "assigned_location": {     "location_id": "01ARZ3NDEKTSV4RRFFQ69G5DAD"  }}
```

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-3 "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok-2 "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrder | The Fulfillment Order Response. |

###### PATCH /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#patch-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5fav "Direct link to PATCH /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV")

```
{  "id": "01ARZ3NDEKTSV4RRFFQ69G5FAV",  "number": "123456",  "status": "PACKED",  "status_history": [      {         "from_status": "UNPACKED",         "to_status": "PACKED",         "happened_at": "2022-11-24T10:20:19+00:00",         "created_at": "2022-11-24T10:20:19+00:00"      }  ],  "fulfilled_at": "2022-11-24T10:20:19+00:00",  "tracking_info": {     "code": "BR123123123AA",     "url": "https://www.correios.com.br/BB123123123AA",     "notify_customer": true  },  "tracking_info_history": [      {         "from_tracking_info": {            "url": null,            "code": null         },         "to_tracking_info": {            "code": "BR123123123AA",            "url": "https://www.correios.com.br/BB123123123AA",         },         "happened_at": "2022-11-24T10:20:19+00:00",         "created_at": "2022-11-24T11:29:57.742Z",         "app_id": "1",         "user_id": "1"      }  ],  "destination": {     "zipcode": "12910802",     "street": "Some Street",     "number": "100",     "floor": "Some Floor",     "locality": "Some Locality",     "city": "Some City",     "reference": "Some Reference",     "between_streets": "Some Between Streets",     "province": {        "name": "São Paulo",        "code": "SP"     },     "region": {        "name": "Sudeste",        "code": "SE"     },     "country": {        "name": "Brasil",        "code": "BR"     },  },  "shipping": {     "type": "pickup|ship",     "carrier": {        "carrier_id": "12345",        "code": "api",        "name": "Same Carrier Name",        "app_id": "12345"     },     "option": {        "code": "some-option-code",        "reference": "some-option-ref",        "name": "Same Option Name",        "allow_free_shipping": true     },     "merchant_cost": {        "value": 123.14,        "currency": "BRL"     },     "consumer_cost": {        "value": 123.14,        "currency": "BRL"     },     "min_delivery_date": "2022-11-24T10:20:19+00:00",     "max_delivery_date": "2022-11-25T10:20:19+00:00",     "pickup_details": {        "location_id": "pickup-option-id",        "name": "Some option pickup detail name",        "address": {           "zipcode": "12910802",           "street": "Some Street",           "number": "100",           "floor": "Some Floor",           "locality": "Some Locality",           "city": "Some City",           "reference": "Some Reference",           "between_streets": "Some Between Streets",           "province": {              "code": "SP",              "name": "São Paulo"           },           "region": {              "code": "SE",              "name": "Sudeste"           },           "country": {              "code": "BR",              "name": "Brasil"           }        },        "pickup_hours": [           {              "day": "MONDAY",              "start": "0800",              "end": "1800"           }        ]     },     "extras": {        "free_shipping_info": {           "free_shipping_id": "1234567",           "consumer_original_cost": {              "value": 12.34,              "currency": "BRL"           }        },        "phone_required": true,        "id_required": true,        "accepts_cod": true,        "show_time": true,        "shippable": true     }  },  "recipient": {     "name": "Some Name",     "phone": "11988864311",     "identifier": "44112233"  },  "assigned_location": {     "location_id": "01ARZ3NDEKTSV4RRFFQ69G5DAD",     "name": "Location name",     "address": {        "zipcode": "12910802",        "street": "Some Street",        "number": "100",        "floor": "Some Floor",        "locality": "Some Locality",        "city": "Some City",        "reference": "Some Reference",        "between_streets": "Some Between Streets",        "province": {          "code": "SP",          "name": "São o"        },        "region": {          "code": "SE",          "name": "Sudeste"        },        "country": {          "code": "BR",          "name": "Brasil"        }     }  },  "created_at": "2022-11-24T10:20:19+00:00",  "updated_at": "2022-11-24T10:20:19+00:00"}
```

##### HTTP 400 - Bad Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-400---bad-request-1 "Direct link to HTTP 400 - Bad Request")

| Type | Description |
| --- | --- |
| Error | The Fulfillment Order Update Error Response |

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-3 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

### POST /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}/tracking-events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-ordersorder_idfulfillment-ordersfulfillment_order_idtracking-events "Direct link to POST /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events")

Create Fulfillment Order Tracking Event

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-4 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#notes-1 "Direct link to Notes")

-   Parameters are sent in body, JSON format.
-   FulfillmentOrdeTrackingEventInput.
-   Fulfillment Order Must be Already DISPATCHED.
-   If the status is DELIVERED, the fulfillment order will be marked as DELIVERED and fulfilled. This means the fulfilled\_at field will be filled with the current date and time.
-   Tracking event will be limited to a maximum of 100 events. An additional 101st event may be delivered.
-   Tracking event must differ from the previous one.

#### Request Payload[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#request-payload-1 "Direct link to Request Payload")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEventInput | The Fulfillment Order Tracking Event Input. |

```
{   "status": "dispatched",   "description": "The package was dispatched",   "address": "St. Paul 123, São Paulo - Brazil 02910802",   "geolocation": {      "longitude": 73.856077,      "latitude": 40.848447   },   "happened_at": "2022-11-24T10:20:19+00:00",                     "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  }
```

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-4 "Direct link to Responses")

##### HTTP 201 - Created[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-201---created "Direct link to HTTP 201 - Created")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEvent | The Fulfillment Order Tracking Event Response. |

###### POST /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#post-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5favtracking-events "Direct link to POST /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events")

```
{   "id": "01FHZXHK8PTP9FVK99Z66GXJIO",   "status": "dispatched",   "description": "The package was dispatched",   "address": "St. Paul 123, São Paulo - Brazil 02910802",   "geolocation": {      "longitude": 73.856077,      "latitude": 40.848447   },   "happened_at": "2022-11-24T10:20:19+00:00",                     "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                     "created_at": "2022-11-24T10:20:19+00:00",   "updated_at": "2022-11-24T10:20:19+00:00"}
```

##### HTTP 400 - Bad Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-400---bad-request-2 "Direct link to HTTP 400 - Bad Request")

| Type | Description |
| --- | --- |
| Error | The Fulfillment Order Tracking Event Create Error Response |
| Error | The tracking event must not be identical to an existing tracking event |
| Error | Tracking events has reached the limit |

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-4 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

#### Duplicate tracking event rules[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#duplicate-tracking-event-rules "Direct link to Duplicate tracking event rules")

The API enforces specific rules to detect and reject duplicate tracking events.

A tracking event is considered identical when it has the same:

-   status
-   description
-   address
-   geolocation (latitude and longitude)
-   happened\_at (if provided)
-   estimated\_delivery\_at (if provided)

##### Time window logic[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#time-window-logic "Direct link to Time window logic")

-   When `happened_at` is provided: identical events with a time difference of 60 seconds or less are treated as duplicates and rejected.  
    If the time difference is greater than 60 seconds, the new event is accepted as distinct.
-   When `happened_at` is not provided: any identical event is rejected immediately, without a time window.

##### Error message[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#error-message "Direct link to Error message")

Duplicate tracking events are rejected with HTTP 400 and the message:

```
The tracking event must not be identical to an existing tracking event
```

### PUT /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}/tracking-events/{fulfillment\_order\_tracking\_event\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-ordersorder_idfulfillment-ordersfulfillment_order_idtracking-eventsfulfillment_order_tracking_event_id "Direct link to PUT /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}")

Update Fulfillment Order Tracking Event

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-5 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |
| fulfillment\_order\_tracking\_event\_id | String | ✅ | Fulfillment Order Tracking Event Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#notes-2 "Direct link to Notes")

-   Parameters are sent in body, JSON format
-   FulfillmentOrdeTrackingEventInput
-   Fulfillment Order Must be Already DISPATCHED and not DELIVERED
-   If the status is DELIVERED, the fulfillment order will be marked as DELIVERED and fulfilled. This means the fulfilled\_at field will be filled with the current date and time.

#### Request Payload[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#request-payload-2 "Direct link to Request Payload")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEventInput | The Fulfillment Order Tracking Event Input. |

```
{   "status": "in_transit",   "description": "The package was sent to cd address.",   "address": "St. Paul 123, São Paulo - Brazil 02910802",   "geolocation": {      "longitude": 73.856077,      "latitude": 40.848447   },   "happened_at": "2022-11-24T10:20:19+00:00",                     "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  }
```

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-5 "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok-3 "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEvent | The Fulfillment Order Tracking Event Response. |

###### PUT /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#put-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5favtracking-events01fhzxhk8ptp9fvk99z66gxjio "Direct link to PUT /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO")

```
{   "id": "01FHZXHK8PTP9FVK99Z66GXJIO",   "status": "in_transit",   "description": "The package was sent to cd address.",   "address": "St. Paul 123, São Paulo - Brazil 02910802",   "geolocation": {      "longitude": 73.856077,      "latitude": 40.848447   },   "happened_at": "2022-11-24T10:20:19+00:00",                     "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                     "created_at": "2022-11-24T10:20:19+00:00",   "updated_at": "2022-11-24T10:20:19+00:00"}
```

##### HTTP 400 - Bad Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-400---bad-request-3 "Direct link to HTTP 400 - Bad Request")

| Type | Description |
| --- | --- |
| Error | The Fulfillment Order Tracking Event Update Error Response |

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-5 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found-2 "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order or Fulfillment Order Tracking Event Error Response |

### DELETE /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}/tracking-events/{fulfillment\_order\_tracking\_event\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-ordersorder_idfulfillment-ordersfulfillment_order_idtracking-eventsfulfillment_order_tracking_event_id "Direct link to DELETE /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}")

DELETE Fulfillment Order Tracking Event

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-6 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |
| fulfillment\_order\_tracking\_event\_id | String | ✅ | Fulfillment Order Tracking Event Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Notes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#notes-3 "Direct link to Notes")

-   Fulfillment Order Must be Already DISPATCHED and not DELIVERED

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-6 "Direct link to Responses")

##### HTTP 204 - Not Content[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-204---not-content "Direct link to HTTP 204 - Not Content")

###### DELETE /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#delete-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5favtracking-events01fhzxhk8ptp9fvk99z66gxjio "Direct link to DELETE /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO")

##### HTTP 400 - Bad Request[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-400---bad-request-4 "Direct link to HTTP 400 - Bad Request")

| Type | Description |
| --- | --- |
| Error | The Fulfillment Order Tracking Event Delete Error Response |

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-6 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found-3 "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order or Fulfillment Order Tracking Event Error Response |

### GET /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}/tracking-events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idfulfillment-ordersfulfillment_order_idtracking-events "Direct link to GET /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events")

GET All Fulfillment Order Tracking Events By Fulfillment Order

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-7 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-7 "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok-4 "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEvent\[\] | List of Fulfillment Order Tracking Events Response. |

###### GET /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5favtracking-events "Direct link to GET /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events")

```
[   {      "id": "01FHZXHK8PTP9FVK99Z66GXJIO",      "status": "dispatched",      "description": "The package was dispatched",      "address": "St. Paul 123, São Paulo - Brazil 02910802",      "geolocation": {         "longitude": 73.856077,         "latitude": 40.848447      },      "happened_at": "2022-11-24T10:20:19+00:00",                        "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                        "created_at": "2022-11-24T10:20:19+00:00",      "updated_at": "2022-11-24T10:20:19+00:00"   }]
```

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-7 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found-4 "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order Error Response |

### GET /orders/{order\_id}/fulfillment-orders/{fulfillment\_order\_id}/tracking-events/{fulfillment\_order\_tracking\_event\_id}[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-ordersorder_idfulfillment-ordersfulfillment_order_idtracking-eventsfulfillment_order_tracking_event_id "Direct link to GET /orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}")

GET Fulfillment Order Tracking Event

#### URL values[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#url-values-8 "Direct link to URL values")

| Field name | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| store\_id | String | ✅ | Store identifier |
| order\_id | String | ✅ | Order identifier |
| fulfillment\_order\_id | String | ✅ | Fulfillment Order Identifier |
| fulfillment\_order\_tracking\_event\_id | String | ✅ | Fulfillment Order Tracking Event Identifier |

| Header | Field Type | Mandatory | Description |
| --- | --- | --- | --- |
| Authentication | String | ✅ | Bearer App token. Eg.: bearer {app\_token} |
| Content-type | String | ✅ | The request content-type "application/json" |

#### Responses[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#responses-8 "Direct link to Responses")

##### HTTP 200 - Ok[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-200---ok-5 "Direct link to HTTP 200 - Ok")

| Type | Description |
| --- | --- |
| FulfillmentOrderTrackingEvent | List of Fulfillment Order Tracking Events Response. |

###### GET /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#get-orders123456fulfillment-orders01arz3ndektsv4rrffq69g5favtracking-events01fhzxhk8ptp9fvk99z66gxjio "Direct link to GET /orders/123456/fulfillment-orders/01ARZ3NDEKTSV4RRFFQ69G5FAV/tracking-events/01FHZXHK8PTP9FVK99Z66GXJIO")

```
{   "id": "01FHZXHK8PTP9FVK99Z66GXJIO",   "status": "dispatched",   "description": "The package was dispatched",   "address": "St. Paul 123, São Paulo - Brazil 02910802",   "geolocation": {      "longitude": 73.856077,      "latitude": 40.848447   },   "happened_at": "2022-11-24T10:20:19+00:00",                     "estimated_delivery_at": "2022-11-24T10:20:19+00:00",                     "created_at": "2022-11-24T10:20:19+00:00",   "updated_at": "2022-11-24T10:20:19+00:00"}
```

##### HTTP 401 - Unauthorized[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-401---unauthorized-8 "Direct link to HTTP 401 - Unauthorized")

| Type | Description |
| --- | --- |
| Error | The Unauthorized Response |

##### HTTP 404 - Not Found[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#http-404---not-found-5 "Direct link to HTTP 404 - Not Found")

| Type | Description |
| --- | --- |
| Error | The Not Found Fulfillment Order or Fulfillment Order Tracking Event Error Response |

## Webhooks[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhooks "Direct link to Webhooks")

Fulfillment Order Webhooks allow applications to receive automatic notifications whenever relevant events occur in the lifecycle of a Fulfillment Order.

### Available Events[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#available-events "Direct link to Available Events")

| Event | Description | When it is triggered |
| --- | --- | --- |
| `fulfillment_order/status_updated` | Notifies about macro status changes of the Fulfillment Order | When the Fulfillment Order status changes (e.g., `PACKED`, `DISPATCHED`, `DELIVERED`) |
| `fulfillment_order/tracking_event_created` | Notifies when a new tracking event is created for a Fulfillment Order | When a new tracking event of the Fulfillment Order is created |
| `fulfillment_order/tracking_event_updated` | Notifies when a tracking event of a Fulfillment Order is updated | When a tracking event of the Fulfillment Order is updated |
| `fulfillment_order/tracking_event_deleted` | Notifies when a tracking event is removed from a Fulfillment Order | When a tracking event of the Fulfillment Order is deleted |

### Payload Structure[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#payload-structure "Direct link to Payload Structure")

Webhook `fulfillment_order/status_updated` sends:

-   **store\_id**: ID of the store where the event occurred
-   **event**: Name of the triggered event
-   **order\_id**: ID of the order associated with the Fulfillment Order
-   **fulfillment\_id**: Unique ID of the Fulfillment Order (ULID)
-   **status**: Fulfillment Order status

Webhooks `fulfillment_order/tracking_event_created`, `fulfillment_order/tracking_event_updated` and `fulfillment_order/tracking_event_deleted` send:

-   **store\_id**: ID of the store where the event occurred
-   **event**: Name of the triggered event
-   **order\_id**: ID of the order associated with the Fulfillment Order
-   **fulfillment\_id**: Unique ID of the Fulfillment Order (ULID)
-   **tracking\_event\_id**: Unique ID of the Fulfillment Order tracking event (ULID)
-   **status**: Tracking event status (see [FulfillmentOrderTrackingEventStatus](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventstatus))

#### fulfillment\_order/status\_updated[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillment_orderstatus_updated "Direct link to fulfillment_order/status_updated")

Triggered when a Fulfillment Order status is updated.

```
{  "store_id": "5145204",  "event": "fulfillment_order/status_updated",  "order_id": "1822717346",  "fulfillment_id": "01K9QFMHKYRJGQV5Y289WBYMFZ",  "status": "DISPATCHED"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`fulfillment_order/status_updated`)
-   `order_id`: Order ID
-   `fulfillment_id`: Unique Fulfillment Order ID (ULID)
-   `status`: Fulfillment Order status (see [FulfillmentOrderStatus](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentorderstatus))

#### fulfillment\_order/tracking\_event\_created[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillment_ordertracking_event_created "Direct link to fulfillment_order/tracking_event_created")

Triggered when a new tracking event is created for a Fulfillment Order.

```
{  "store_id": "5145204",  "event": "fulfillment_order/tracking_event_created",  "order_id": "1822717346",  "fulfillment_id": "01K9QFMHKYRJGQV5Y289WBYMFZ",  "tracking_event_id": "01K9QQ16GPYVDHZPAEGK3SFZAD",  "status": "in_transit"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`fulfillment_order/tracking_event_created`)
-   `order_id`: Order ID
-   `fulfillment_id`: Unique Fulfillment Order ID (ULID)
-   `tracking_event_id`: Unique Fulfillment Order tracking event ID (ULID)
-   `status`: Tracking event status (see [FulfillmentOrderTrackingEventStatus](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventstatus))

#### fulfillment\_order/tracking\_event\_updated[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillment_ordertracking_event_updated "Direct link to fulfillment_order/tracking_event_updated")

Triggered when a tracking event of a Fulfillment Order is updated.

```
{  "store_id": "5145204",  "event": "fulfillment_order/tracking_event_updated",  "order_id": "1822717346",  "fulfillment_id": "01K9QFMHKYRJGQV5Y289WBYMFZ",  "tracking_event_id": "01K9QQ16GPYVDHZPAEGK3SFZAD",  "status": "delivered"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`fulfillment_order/tracking_event_updated`)
-   `order_id`: Order ID
-   `fulfillment_id`: Unique Fulfillment Order ID (ULID)
-   `tracking_event_id`: Unique Fulfillment Order tracking event ID (ULID)
-   `status`: Tracking event status (see [FulfillmentOrderTrackingEventStatus](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventstatus))

#### fulfillment\_order/tracking\_event\_deleted[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillment_ordertracking_event_deleted "Direct link to fulfillment_order/tracking_event_deleted")

Triggered when a tracking event of a Fulfillment Order is deleted.

```
{  "store_id": "5145204",  "event": "fulfillment_order/tracking_event_deleted",  "order_id": "1822717346",  "fulfillment_id": "01K9QFMHKYRJGQV5Y289WBYMFZ",  "tracking_event_id": "01K9QQ16GPYVDHZPAEGK3SFZAD",  "status": "delivered"}
```

**Payload fields:**

-   `store_id`: Store ID
-   `event`: Event name (`fulfillment_order/tracking_event_deleted`)
-   `order_id`: Order ID
-   `fulfillment_id`: Unique Fulfillment Order ID (ULID)
-   `tracking_event_id`: Unique Fulfillment Order tracking event ID (ULID)
-   `status`: Tracking event status (see [FulfillmentOrderTrackingEventStatus](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#fulfillmentordertrackingeventstatus))

### Webhook Registration[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#webhook-registration "Direct link to Webhook Registration")

To receive notifications for these events, you must register webhooks through the Webhooks API.

See the [complete Webhooks documentation](https://tiendanube.github.io/api-documentation/resources/webhook) for detailed information on how to create, update, and manage your webhooks.

**Registration example:**

```
{  "event": "fulfillment_order/tracking_event_created",  "url": "https://api.partner.com/webhooks/fulfillment"}
```

### Required Scopes[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#required-scopes "Direct link to Required Scopes")

To receive Fulfillment Order webhooks, your application must have the following scopes:

| Scope | Description |
| --- | --- |
| `read_fulfillment_orders` | Allows receiving notifications about Fulfillment Orders |
| `write_fulfillment_orders` | Required for write operations on Fulfillment Orders |

### Important Considerations[](https://tiendanube.github.io/api-documentation/resources/abandoned-checkout#important-considerations "Direct link to Important Considerations")

-   **Idempotency**: Webhooks should be implemented in an idempotent way, as the same event may be sent multiple times
-   **Timeout**: Your application must respond within 10 seconds with an HTTP 2xx status code
-   **Delivery Order**: Events are sent in order of emission, but may be processed asynchronously
-   **Security**: It is recommended to validate the origin of requests using the `x-linkedstore-hmac-sha256` header (see [Webhook Verification](https://tiendanube.github.io/api-documentation/resources/webhook#verifying-a-webhook))
-   **Format**: The request body will always be `application/json` and will contain the `event` field
-   **Retries**: In case of failure, the system will perform automatic retries according to the [retry policy](https://tiendanube.github.io/api-documentation/resources/webhook#retry-policies)