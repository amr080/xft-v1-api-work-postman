# Project: Core Functionality
All of Circle's APIs share a common set of core functionality that lets you manage your Circle Account in a programmatic way.

With a Circle Account your business can deposit traditional money from 80+ countries and seamlessly convert them into "digital currency dollars": USDC. You can then use USDC for everyday payments and treasury flows.

[Core Functionality API](https://developers.circle.com/circle-mint/docs/getting-started-with-the-circle-core-api)
# 📁 Collection: Balances 


## End-point: List all balances
Retrieves the balance of funds that are available for use.
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/balances
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "available": [
            {
                "amount": "0.01540290",
                "currency": "BTC"
            },
            {
                "amount": "0.030000000000000000",
                "currency": "ETH"
            },
            {
                "amount": "221158440.75",
                "currency": "USD"
            }
        ],
        "unsettled": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Payouts 


## End-point: Create a payout

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**destination** *object* (REQUIRED)
The destination bank account.

  * **type** *string* (REQUIRED)

  * **id** *string* (REQUIRED)
  Unique system generated identifier for the entity.

**amount** *object* (REQUIRED)

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code.


### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/payouts
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
    "idempotencyKey": "{{$guid}}",
    "destination": {
        "type": "wire",
        "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e"
    },
    "amount": {
        "amount": "3.14",
        "currency": "USD"
    }
}
```

### Response: 201
```json
{
    "data": {
        "id": "a1cbd881-ee22-43ec-91cf-dfecabaea3eb",
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "pending",
        "sourceWalletId": "1002753955",
        "destination": {
            "type": "wire",
            "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e",
            "name": "Banco Nacional de México ****7771"
        },
        "createDate": "2024-01-16T21:55:02.452Z",
        "updateDate": "2024-01-16T21:55:02.452Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all payouts
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/payouts
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|destination|e3d0a838-d732-49d0-bf44-73a668e38973|
|type|cbit|
|status|failed|
|status|complete|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|in ea eu|
|pageAfter|in ea eu|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "a1cbd881-ee22-43ec-91cf-dfecabaea3eb",
            "amount": {
                "amount": "3.14",
                "currency": "USD"
            },
            "status": "complete",
            "sourceWalletId": "1002753955",
            "destination": {
                "type": "wire",
                "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e",
                "name": "Banco Nacional de México ****7771"
            },
            "createDate": "2024-01-16T21:55:02.452Z",
            "updateDate": "2024-01-16T22:00:01.598Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a payout
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/payouts/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "a1cbd881-ee22-43ec-91cf-dfecabaea3eb",
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "complete",
        "sourceWalletId": "1002753955",
        "destination": {
            "type": "wire",
            "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e",
            "name": "Banco Nacional de México ****7771"
        },
        "trackingRef": "CIRAUWWI4I",
        "createDate": "2024-01-16T21:55:02.452Z",
        "updateDate": "2024-01-16T22:00:01.598Z",
        "externalRef": "2024-01-161574507880"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Wires 


## End-point: Create a Wire bank account

#### Body Params

Option 1

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**accountNumber** *string* (REQUIRED)
Account number that identifies the bank account.

**routingNumber** *string* (REQUIRED)
ABA routing number for the bank account. Note this has to be specific for bank wire transfers.

**billingDetails** *object* (REQUIRED)

  * **name** *string* (REQUIRED)
  Full name of the card or bank account holder.

  * **city** *string* (REQUIRED)
  City portion of the address.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string* (REQUIRED)
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.

  * **postalCode** *string* (REQUIRED)
  Postal / ZIP code of the address.

**bankAddress** *object* (REQUIRED)
The address details for the bank, as provided during bank account creation.

  * **bankName** *string*
  Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN'

  * **city** *string*
  City portion of the address. This property is required for bank accounts outside of the US.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string*
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.


Option 2

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**iban** *string* (REQUIRED)
International Bank Account Number (IBAN) for the bank account.

**billingDetails** *object* (REQUIRED)

  * **name** *string* (REQUIRED)
  Full name of the card or bank account holder.

  * **city** *string* (REQUIRED)
  City portion of the address.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string* (REQUIRED)
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.

  * **postalCode** *string* (REQUIRED)
  Postal / ZIP code of the address.

**bankAddress** *object* (REQUIRED)
The address of the bank. City and country fields are required.

  * **bankName** *string*
  Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN'

  * **city** *string* (REQUIRED)
  City portion of the address. This property is required for bank accounts outside of the US.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string*
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.


Option 3

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**accountNumber** *string* (REQUIRED)
Account number that identifies the bank account.

**routingNumber** *string* (REQUIRED)
The bank's SWIFT / BIC code.

**billingDetails** *object* (REQUIRED)

  * **name** *string* (REQUIRED)
  Full name of the card or bank account holder.

  * **city** *string* (REQUIRED)
  City portion of the address.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string* (REQUIRED)
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.

  * **postalCode** *string* (REQUIRED)
  Postal / ZIP code of the address.

**bankAddress** *object* (REQUIRED)
The address of the bank. BankName, City and Country fields are required.

  * **bankName** *string* (REQUIRED)
  Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN'

  * **city** *string* (REQUIRED)
  City portion of the address. This property is required for bank accounts outside of the US.

  * **country** *string* (REQUIRED)
  Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.

  * **line1** *string*
  Line one of the street address.

  * **line2** *string*
  Line two of the street address.

  * **district** *string*
  State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.



### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/banks/wires
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
    "idempotencyKey": "{{$guid}}",
    "accountNumber": "12340010",
    "routingNumber": "121000248",
    "billingDetails": {
        "name": "Satoshi Nakamoto",
        "city": "Boston",
        "country": "US",
        "line1": "100 Money Street",
        "postalCode": "01234",
        "line2": "Suite 1",
        "district": "MA"
    },
    "bankAddress": {
        "country": "US",
        "bankName": "SAN FRANCISCO",
        "city": "SAN FRANCISCO",
        "line1": "100 Money Street",
        "line2": "Suite 1",
        "district": "CA"
    }
}
```

### Response: 200
```json
{
    "data": {
        "id": "d1c00791-d207-40a1-b265-663293fbdbba",
        "status": "pending",
        "description": "WELLS FARGO BANK, NA ****0010",
        "trackingRef": "CIR3Y6S73L",
        "fingerprint": "a9a71b77-d83d-4fbc-997f-41a33550c594",
        "virtualAccountEnabled": true,
        "billingDetails": {
            "name": "Satoshi Nakamoto",
            "line1": "100 Money Street",
            "line2": "Suite 1",
            "city": "Boston",
            "postalCode": "01234",
            "district": "MA",
            "country": "US"
        },
        "bankAddress": {
            "bankName": "WELLS FARGO BANK, NA",
            "city": "SAN FRANCISCO",
            "district": "CA",
            "country": "US"
        },
        "createDate": "2024-01-16T21:52:28.824Z",
        "updateDate": "2024-01-16T21:52:28.824Z"
    }
}
```

### Response: 200
```json
{
    "data": {
        "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e",
        "status": "pending",
        "description": "Banco Nacional de México ****7771",
        "trackingRef": "CIR3GH9U94",
        "fingerprint": "faf6b92c-4e76-426c-9741-95aed1415715",
        "virtualAccountEnabled": true,
        "billingDetails": {
            "name": "Satoshi Nakamoto",
            "line1": "100 Money Street",
            "line2": "Suite 1",
            "city": "Boston",
            "postalCode": "01234",
            "district": "MA",
            "country": "US"
        },
        "bankAddress": {
            "bankName": "Banco Nacional de México",
            "city": "México DF",
            "country": "MX"
        },
        "createDate": "2024-01-16T21:52:54.561Z",
        "updateDate": "2024-01-16T21:52:54.561Z"
    }
}
```

### Response: 200
```json
{
    "data": {
        "id": "8af774bb-a726-40a2-9e33-bd75f0b02fbe",
        "status": "pending",
        "description": "Commerzbank GF-B48 ****3000",
        "trackingRef": "CIR2AZYEHT",
        "fingerprint": "bcd8d325-6229-4594-a89b-0790143e0489",
        "virtualAccountEnabled": true,
        "billingDetails": {
            "name": "Satoshi Nakamoto",
            "line1": "100 Money Street",
            "line2": "Suite 1",
            "city": "Boston",
            "postalCode": "01234",
            "district": "MA",
            "country": "US"
        },
        "bankAddress": {
            "bankName": "Commerzbank GF-B48",
            "city": "Kassel",
            "country": "DE"
        },
        "createDate": "2024-01-16T21:53:08.104Z",
        "updateDate": "2024-01-16T21:53:08.104Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all Wire bank accounts
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/wires
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": [
        {
            "id": "8af774bb-a726-40a2-9e33-bd75f0b02fbe",
            "type": "wire",
            "status": "complete",
            "description": "Commerzbank GF-B48 ****3000",
            "trackingRef": "CIR2AZYEHT",
            "virtualAccountEnabled": true,
            "fingerprint": "bcd8d325-6229-4594-a89b-0790143e0489",
            "billingDetails": {
                "name": "Satoshi Nakamoto",
                "line1": "100 Money Street",
                "line2": "Suite 1",
                "city": "Boston",
                "postalCode": "01234",
                "district": "MA",
                "country": "US",
                "valid": true
            },
            "bankAddress": {
                "bankName": "Commerzbank GF-B48",
                "city": "Kassel",
                "country": "DE"
            },
            "createDate": "2024-01-16T21:53:08.104Z",
            "updateDate": "2024-01-16T21:53:08.964Z",
            "supportedRails": [
                "wire"
            ]
        },
        {
            "id": "3016a9ca-fe2a-48f4-80d7-16ecfec1de6e",
            "type": "wire",
            "status": "complete",
            "description": "Banco Nacional de México ****7771",
            "trackingRef": "CIR3GH9U94",
            "virtualAccountEnabled": true,
            "fingerprint": "faf6b92c-4e76-426c-9741-95aed1415715",
            "billingDetails": {
                "name": "Satoshi Nakamoto",
                "line1": "100 Money Street",
                "line2": "Suite 1",
                "city": "Boston",
                "postalCode": "01234",
                "district": "MA",
                "country": "US",
                "valid": true
            },
            "bankAddress": {
                "bankName": "Banco Nacional de México",
                "city": "México DF",
                "country": "MX"
            },
            "createDate": "2024-01-16T21:52:54.561Z",
            "updateDate": "2024-01-16T21:55:14.774Z",
            "supportedRails": [
                "wire"
            ]
        },
        {
            "id": "d1c00791-d207-40a1-b265-663293fbdbba",
            "type": "wire",
            "status": "complete",
            "description": "WELLS FARGO BANK, NA ****0010",
            "trackingRef": "CIR3Y6S73L",
            "virtualAccountEnabled": true,
            "fingerprint": "a9a71b77-d83d-4fbc-997f-41a33550c594",
            "billingDetails": {
                "name": "Satoshi Nakamoto",
                "line1": "100 Money Street",
                "line2": "Suite 1",
                "city": "Boston",
                "postalCode": "01234",
                "district": "MA",
                "country": "US",
                "valid": true
            },
            "bankAddress": {
                "bankName": "WELLS FARGO BANK, NA",
                "city": "SAN FRANCISCO",
                "district": "CA",
                "country": "US"
            },
            "createDate": "2024-01-16T21:52:28.824Z",
            "updateDate": "2024-01-16T21:52:29.754Z",
            "supportedRails": [
                "wire"
            ]
        },
        {
            "id": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "type": "wire",
            "status": "complete",
            "description": "WELLS FARGO BANK, NA ****0010",
            "trackingRef": "CIR2GSKVGC",
            "virtualAccountEnabled": true,
            "fingerprint": "a9a71b77-d83d-4fbc-997f-41a33550c594",
            "billingDetails": {
                "name": "Satoshi Nakamoto",
                "line1": "100 Money Street",
                "line2": "Suite 1",
                "city": "Boston",
                "postalCode": "01234",
                "district": "MA",
                "country": "US",
                "valid": true
            },
            "bankAddress": {
                "bankName": "WELLS FARGO BANK, NA",
                "line1": "100 Money Street",
                "line2": "Suite 1",
                "city": "SAN FRANCISCO",
                "district": "CA",
                "country": "US"
            },
            "createDate": "2022-11-28T22:19:05.066Z",
            "updateDate": "2022-11-28T22:19:05.733Z",
            "supportedRails": [
                "wire"
            ]
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a Wire bank account
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/wires/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "8af774bb-a726-40a2-9e33-bd75f0b02fbe",
        "type": "wire",
        "status": "complete",
        "description": "Commerzbank GF-B48 ****3000",
        "trackingRef": "CIR2AZYEHT",
        "virtualAccountEnabled": true,
        "fingerprint": "bcd8d325-6229-4594-a89b-0790143e0489",
        "billingDetails": {
            "name": "Satoshi Nakamoto",
            "line1": "100 Money Street",
            "line2": "Suite 1",
            "city": "Boston",
            "postalCode": "01234",
            "district": "MA",
            "country": "US",
            "valid": true
        },
        "bankAddress": {
            "bankName": "Commerzbank GF-B48",
            "city": "Kassel",
            "country": "DE"
        },
        "createDate": "2024-01-16T21:53:08.104Z",
        "updateDate": "2024-01-16T21:53:08.964Z",
        "supportedRails": [
            "wire"
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Wire instructions
Get the wire transfer instructions into the Circle bank account given your bank account id.
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/wires/:id/instructions
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|currency|USD|


### Response: 200
```json
{
    "data": {
        "trackingRef": "CIR2AZYEHT",
        "beneficiary": {
            "name": "CIRCLE INTERNET FINANCIAL INC",
            "address1": "1 MAIN STREET",
            "address2": "SUITE 1"
        },
        "virtualAccountEnabled": true,
        "beneficiaryBank": {
            "name": "CRYPTO BANK",
            "address": "1 MONEY STREET",
            "city": "NEW YORK",
            "postalCode": "1001",
            "country": "US",
            "swiftCode": "CRYPTO99",
            "routingNumber": "999999999",
            "accountNumber": "123180387879",
            "currency": "USD"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: CBIT 


## End-point: Create a CBIT bank account

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**walletAddress** *string* (REQUIRED)
CBIT wallet address.


### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/banks/cbit
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
    "idempotencyKey": "{{$guid}}",
    "walletAddress": "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e"
}
```

### Response: 200
```json
{
    "data": {
        "id": "007019b8-4c6c-4887-bc78-668b64eea51b",
        "status": "pending",
        "trackingRef": "CIR23X5U26",
        "walletAddress": "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
        "createDate": "2024-01-16T22:27:07.617651709Z",
        "updateDate": "2024-01-16T22:27:07.617651709Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all CBIT bank accounts
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/cbit
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": [
        {
            "id": "007019b8-4c6c-4887-bc78-668b64eea51b",
            "status": "complete",
            "trackingRef": "CIR23X5U26",
            "walletAddress": "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
            "createDate": "2024-01-16T22:27:07.618Z",
            "updateDate": "2024-01-16T22:27:07.795Z"
        },
        {
            "id": "b523561a-1574-47c5-ac03-8f17c063da85",
            "status": "complete",
            "trackingRef": "CIR2M5TJ4P",
            "walletAddress": "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
            "createDate": "2023-04-11T13:27:38.474Z",
            "updateDate": "2023-04-11T13:27:38.804Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a CBIT bank account
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/cbit/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "007019b8-4c6c-4887-bc78-668b64eea51b",
        "status": "complete",
        "trackingRef": "CIR23X5U26",
        "walletAddress": "0x7d8da35e03ef3a5ec5d5edbb961ef399dfb42d1e",
        "createDate": "2024-01-16T22:27:07.618Z",
        "updateDate": "2024-01-16T22:27:07.795Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get CBIT instructions
Get the CBIT transfer instructions into the Circle bank account given your bank account id.
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/banks/cbit/:id/instructions
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "trackingRef": "CIR23X5U26",
        "walletAddress": "0x96375da098a72c33d00f06ab072eb44d2c00711c"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Transfers 


## End-point: Create a transfer
A transfer can be made from an existing business account to a blockchain location.
#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**destination** *object* (REQUIRED)

  * **type** *string* (REQUIRED)

  * **addressId** *string* (REQUIRED)
  The ID of the verified blockchain recipient address.

**amount** *object* (REQUIRED)

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code for the amount.


### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/transfers
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
  "idempotencyKey": "{{$guid}}",
  "destination": {
    "type": "verified_blockchain",
    "addressId": "990f9293-1f62-54ac-9438-29e359f96324"
  },
  "amount": {
    "amount": "3.14",
    "currency": "USD"
  }
}
```

### Response: 201
```json
{
    "data": {
        "id": "4b05a889-631f-4803-9540-a16ec0ff2e25",
        "source": {
            "type": "wallet",
            "id": "1002753955"
        },
        "destination": {
            "type": "blockchain",
            "address": "DnX6KhBqUK1sHUBxh3vqAL63BLhaiUBDHhLHfRsGggEH",
            "chain": "SOL"
        },
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "pending",
        "createDate": "2024-01-16T22:39:44.240Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all transfers
Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/transfers
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|in ea eu|
|pageAfter|in ea eu|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "4b05a889-631f-4803-9540-a16ec0ff2e25",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "DnX6KhBqUK1sHUBxh3vqAL63BLhaiUBDHhLHfRsGggEH",
                "chain": "SOL"
            },
            "amount": {
                "amount": "3.14",
                "currency": "USD"
            },
            "status": "pending",
            "createDate": "2024-01-16T22:39:44.240Z"
        },
        {
            "id": "a15920e5-5693-4cf5-9e60-ae05d2d500f8",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0xcb02d61f5057366078ca56d7297f5694f445dfc4",
                "chain": "MATIC"
            },
            "amount": {
                "amount": "1000000.00",
                "currency": "USD"
            },
            "transactionHash": "0x2d63062d2c26385298b078fd87215c84db3d79152c6fce0dbeb1abb68d67baf0",
            "status": "complete",
            "createDate": "2023-09-20T22:39:54.954Z"
        },
        {
            "id": "777614bf-d081-4d5c-a027-f2edb9e7f6dc",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x9c39ad35d48b954aeb13ca7fcbc7a334ada80699",
                "chain": "ETH"
            },
            "amount": {
                "amount": "10000.00",
                "currency": "USD"
            },
            "transactionHash": "0xd9cdcb6318d01ad5319989382c87647d4a0cdf51a08067f7f3603236b2ff0660",
            "status": "complete",
            "createDate": "2023-07-26T19:15:39.890Z"
        },
        {
            "id": "dfcb7aed-c9f6-4dde-818b-2c6dadc02582",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x9c39ad35d48b954aeb13ca7fcbc7a334ada80699",
                "chain": "ETH"
            },
            "amount": {
                "amount": "100000.00",
                "currency": "USD"
            },
            "status": "pending",
            "createDate": "2023-07-25T22:07:16.283Z"
        },
        {
            "id": "e161d615-27f8-45b2-8ae1-0fae39bcccef",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x9c39ad35d48b954aeb13ca7fcbc7a334ada80699",
                "chain": "ETH"
            },
            "amount": {
                "amount": "1000000.00",
                "currency": "USD"
            },
            "status": "pending",
            "createDate": "2023-07-25T22:01:08.383Z"
        },
        {
            "id": "f59dd98a-bbcd-40a9-b53b-a9a57da93a0e",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268538"
            },
            "amount": {
                "amount": "97.02",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:34:10.937Z"
        },
        {
            "id": "de260e6b-c23a-4d3e-b5c3-2156307ba1d6",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268535"
            },
            "amount": {
                "amount": "43.45",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:34:06.635Z"
        },
        {
            "id": "5e750823-3930-47d4-a792-e79c2f1943f7",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268527"
            },
            "amount": {
                "amount": "9.87",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:34:02.323Z"
        },
        {
            "id": "2fb94635-82b1-4f46-b500-42aae4adafb6",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268514"
            },
            "amount": {
                "amount": "5.86",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:56.717Z"
        },
        {
            "id": "0d6998c8-fd53-4056-89af-7a93dab46e0c",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268513"
            },
            "amount": {
                "amount": "24.33",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:52.428Z"
        },
        {
            "id": "73558cef-5b72-458c-9995-bace4464d8b6",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268502"
            },
            "amount": {
                "amount": "105.64",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:48.141Z"
        },
        {
            "id": "c1013948-bd43-405b-91bc-9d3cb30d0ca5",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268498"
            },
            "amount": {
                "amount": "59.08",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:43.855Z"
        },
        {
            "id": "694ea19d-3400-45f2-b1ba-36138df4b308",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268495"
            },
            "amount": {
                "amount": "2.65",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:39.565Z"
        },
        {
            "id": "bc51d883-8699-45e0-badd-cf61e16a156a",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268471"
            },
            "amount": {
                "amount": "34.97",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:35.252Z"
        },
        {
            "id": "2966bfcf-4164-4a3d-8ce5-a2a563704163",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268449"
            },
            "amount": {
                "amount": "4.98",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:30.973Z"
        },
        {
            "id": "9070eef6-a790-4322-909b-518a968ae8e3",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268440"
            },
            "amount": {
                "amount": "3.15",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:33:26.600Z"
        },
        {
            "id": "ebb53c7a-caea-4020-a258-cfee67e16fda",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268422"
            },
            "amount": {
                "amount": "3.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:28:10.224Z"
        },
        {
            "id": "5f9c9adc-3003-424a-9945-e78049302d9e",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268393"
            },
            "amount": {
                "amount": "97.02",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:15:12.088Z"
        },
        {
            "id": "0727ecc8-79ea-4686-b503-e679eb6b19e6",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268379"
            },
            "amount": {
                "amount": "43.45",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:15:07.808Z"
        },
        {
            "id": "f618f06f-372e-4f28-89c8-2840f8897d25",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268373"
            },
            "amount": {
                "amount": "9.87",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:15:03.543Z"
        },
        {
            "id": "c5e17def-a062-4116-b093-cfa65c70f5a4",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268368"
            },
            "amount": {
                "amount": "5.86",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:59.253Z"
        },
        {
            "id": "10236c3f-5572-4f28-95bc-47a1c2311980",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268350"
            },
            "amount": {
                "amount": "24.33",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:54.965Z"
        },
        {
            "id": "c3746c23-a37b-4b05-b1ec-91c4d37fc46c",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268344"
            },
            "amount": {
                "amount": "105.64",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:50.681Z"
        },
        {
            "id": "3462001e-7234-4c07-bfad-16290e4c027c",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268328"
            },
            "amount": {
                "amount": "59.08",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:46.369Z"
        },
        {
            "id": "d23b71ea-6735-4fc7-9b6f-df0e5ca23f4f",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268320"
            },
            "amount": {
                "amount": "2.65",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:42.095Z"
        },
        {
            "id": "06d527c4-b604-4e76-8eb3-6092d08e5814",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268298"
            },
            "amount": {
                "amount": "34.97",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:37.800Z"
        },
        {
            "id": "1b22091f-2cbf-4712-a01d-31bde5a4569d",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268273"
            },
            "amount": {
                "amount": "4.98",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:33.507Z"
        },
        {
            "id": "56661a02-a69a-472a-9fcd-bf29ff594d86",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "wallet",
                "id": "1016268266"
            },
            "amount": {
                "amount": "3.15",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-05-24T21:14:29.184Z"
        },
        {
            "id": "6c257ff4-6fdc-4e73-aafd-be9e669240a5",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0xd089f4cf864423c7f0fe71dbe0a70d3c251bbf87",
                "chain": "ETH"
            },
            "amount": {
                "amount": "10000.00",
                "currency": "USD"
            },
            "transactionHash": "0x61546c2ab7c353edffe77ef0790ce21f545f53a28d84a0da7a45b0eb209a2631",
            "status": "complete",
            "createDate": "2023-04-06T20:36:39.054Z"
        },
        {
            "id": "0d6c3b64-e5e5-471e-9dbd-965b5ab42dee",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x4cf74a30fedf2a5a33b28070daf999c58761619c",
                "chain": "ETH"
            },
            "amount": {
                "amount": "10000.00",
                "currency": "USD"
            },
            "transactionHash": "0x2d692b055324669418560369b26ce251e4dcc3621b27ccca827597d23859c3bc",
            "status": "complete",
            "createDate": "2023-04-05T20:31:39.793Z"
        },
        {
            "id": "57654ab9-1409-4636-a3e6-cda6774ade91",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "DnX6KhBqUK1sHUBxh3vqAL63BLhaiUBDHhLHfRsGggEH",
                "chain": "SOL"
            },
            "amount": {
                "amount": "5000.00",
                "currency": "USD"
            },
            "transactionHash": "Dk3rCXV4Puk37DJmc6kWNJFzBJG1htGje1BJWrZptftAn35aVfhZsvcGoL2AeAK8SVgp3qhTuXdgJHik9r7JEqg",
            "status": "complete",
            "createDate": "2023-04-05T20:21:58.752Z"
        },
        {
            "id": "d95aa965-8cb9-32fa-8c3f-ce306f74d357",
            "source": {
                "type": "blockchain",
                "chain": "ETH"
            },
            "destination": {
                "type": "wallet",
                "id": "1002753955",
                "address": "0x8f34ae757f6062017a918af6af377d80fd57aee2"
            },
            "amount": {
                "amount": "100.00",
                "currency": "USD"
            },
            "transactionHash": "0x539ecc29fd2524ce8b0fe9b54b0f7165c1c08c49c9af8fb2dd3e10baf746b162",
            "status": "complete",
            "createDate": "2023-04-03T20:38:39.954Z"
        },
        {
            "id": "c6e96508-6d2c-4303-9008-61585382bf42",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x5b36fbbd0899c0a050627f610a80bcada4a4dfc3",
                "chain": "ETH"
            },
            "amount": {
                "amount": "1250.00",
                "currency": "USD"
            },
            "transactionHash": "0xe0faa0bb45de24b21feb2f5996b2f73a5d1941ce77b01920d26285f89c88b36c",
            "status": "complete",
            "createDate": "2023-02-02T21:24:25.085Z"
        },
        {
            "id": "3a02a8c8-f5d8-407f-a9e9-9e7d53317fe1",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x5b36fBbD0899c0a050627f610A80bCaDa4A4dFc3",
                "chain": "ETH"
            },
            "amount": {
                "amount": "1000.00",
                "currency": "USD"
            },
            "transactionHash": "0x18726f4a719b165b6915ae6a6dc5bfa746da5cd9a5c05cfa93a663d42ef3405c",
            "status": "complete",
            "createDate": "2022-12-20T03:12:42.635Z"
        },
        {
            "id": "815d276a-40b8-337c-89ec-9105eff401bb",
            "source": {
                "type": "blockchain",
                "chain": "ETH"
            },
            "destination": {
                "type": "wallet",
                "id": "1002753955",
                "address": "0x8f34ae757f6062017a918af6af377d80fd57aee2"
            },
            "amount": {
                "amount": "4.00",
                "currency": "USD"
            },
            "transactionHash": "0xfeae202aa9ced3bae0af57691ce33534d18dc8a0f2d433aeb425f1a77150820d",
            "status": "complete",
            "createDate": "2022-12-08T13:51:05.701Z"
        },
        {
            "id": "05d77039-e221-4108-9a4a-46877bbff4ea",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x5b36fbbd0899c0a050627f610a80bcada4a4dfc3",
                "chain": "ETH"
            },
            "amount": {
                "amount": "50.00",
                "currency": "USD"
            },
            "transactionHash": "0x44f6720d55da18911727a203b5a652506ecffd4e594e3f0a8bcdde66226671f2",
            "status": "complete",
            "createDate": "2022-11-28T22:54:53.251Z"
        },
        {
            "id": "92f7301e-d2df-441d-8c25-3dfebd6b77a4",
            "source": {
                "type": "wallet",
                "id": "1002753955"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x5b36fbbd0899c0a050627f610a80bcada4a4dfc3",
                "chain": "ETH"
            },
            "amount": {
                "amount": "5000.00",
                "currency": "USD"
            },
            "status": "failed",
            "errorCode": "insufficient_funds",
            "createDate": "2022-11-28T22:53:34.043Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a transfer
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/transfers/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "777614bf-d081-4d5c-a027-f2edb9e7f6dc",
        "source": {
            "type": "wallet",
            "id": "1002753955"
        },
        "destination": {
            "type": "blockchain",
            "address": "0x9c39ad35d48b954aeb13ca7fcbc7a334ada80699",
            "chain": "ETH"
        },
        "amount": {
            "amount": "10000.00",
            "currency": "USD"
        },
        "transactionHash": "0xd9cdcb6318d01ad5319989382c87647d4a0cdf51a08067f7f3603236b2ff0660",
        "status": "complete",
        "createDate": "2023-07-26T19:15:39.890Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Addresses 


## End-point: Create a deposit address
Generates a new blockchain address for a wallet for a given currency/chain pair. Circle may reuse addresses on blockchains that support reuse. For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, you may see the same Ethereum address returned. Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status. 

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**currency** *string* (REQUIRED)
A currency associated with a balance or address.

**chain** *string* (REQUIRED)
A blockchain that a given currency is available on.


### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/wallets/addresses/deposit
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
  "idempotencyKey": "{{$guid}}",
  "currency": "USD",
  "chain": "BASE"
}
```

### Response: 201
```json
{
    "data": {
        "id": "22829df5-d3cd-5788-96dc-ee739c365007",
        "address": "0x2adfe37f3645529815f786f0f24b870d563ea4f0",
        "currency": "USD",
        "chain": "BASE"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all deposit addresses
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/wallets/addresses/deposit
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": [
        {
            "id": "22829df5-d3cd-5788-96dc-ee739c365007",
            "address": "0x2adfe37f3645529815f786f0f24b870d563ea4f0",
            "currency": "USD",
            "chain": "BASE"
        },
        {
            "id": "98e4fdb8-7999-595d-a6b3-ec43adc71862",
            "address": "TPdb368YEeFVjr1E1zprAu2gsC9sSfXvRo",
            "currency": "USD",
            "chain": "TRX"
        },
        {
            "id": "077ccaa1-f37d-50c6-9d3f-831578ac2b69",
            "address": "4vytwKAQPDee8JVJkxwKMmB9upnfvBdTQna1s8cSJrKd",
            "currency": "USD",
            "chain": "SOL"
        },
        {
            "id": "5de85ab0-17fc-5a7a-b825-a15f0e97296e",
            "address": "0x8f34ae757f6062017a918af6af377d80fd57aee2",
            "currency": "USD",
            "chain": "ETH"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create a recipient address
Stores an external blockchain address. Once added, the recipient address must be verified to ensure that you know and trust each new address. Note: Circle Mint Singapore customers must verify all transfer recipients using the UI in the Circle Console, as transfers from unverified addresses will be held in `pending` status.

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**address** *string* (REQUIRED)
An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.

**addressTag** *string*
The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.

**chain** *string* (REQUIRED)
A blockchain that a given currency is available on.

**currency** *string*
A currency associated with a balance or address.

**description** *string* (REQUIRED)
An identifier or sentence that describes the recipient.


### Method: POST
>```
>{{baseUrl}}/v1/businessAccount/wallets/addresses/recipient
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
  "idempotencyKey": "{{$guid}}",
  "address": "0x5b36fBbD0899c0a050626f610A80bCaDa4A4dFc3",
  "chain": "ETH",
  "description": "My USDC address at a cryptocurrency exchange",
  "currency": "ETH"
}
```

### Response: 200
```json
{
    "data": {
        "id": "d5264546-f364-57d4-9d56-2ceb5efbd86c",
        "address": "0x5b36fbbd0899c0a050626f610a80bcada4a4dfc3",
        "chain": "ETH",
        "currency": "ETH",
        "description": "My USDC address at a cryptocurrency exchange"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all recipient addresses
Returns a list of recipient addresses that have each been verified and are eligible for transfers. Any recipient addresses pending verification are not included in the response.

### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/wallets/addresses/recipient
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|in ea eu|
|pageAfter|in ea eu|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "d5264546-f364-57d4-9d56-2ceb5efbd86c",
            "address": "0x5b36fbbd0899c0a050626f610a80bcada4a4dfc3",
            "chain": "ETH",
            "currency": "ETH",
            "description": "My USDC address at a cryptocurrency exchange"
        },
        {
            "id": "c250d9a1-686e-5df1-9d51-a0a2bf197c54",
            "address": "0xcb02d61f5057366078ca56d7297f5694f445dfc4",
            "chain": "MATIC",
            "currency": "USD",
            "description": "Coinpro Sandbox"
        },
        {
            "id": "3d8268d0-4982-5f1c-997c-1aa1119be252",
            "address": "0x9c39ad35d48b954aeb13ca7fcbc7a334ada80699",
            "chain": "ETH",
            "currency": "USD",
            "description": "Leo's CYBAVO Vault"
        },
        {
            "id": "6a07948d-e002-5f24-ab18-0c3c42308ffc",
            "address": "0xd089f4cf864423c7f0fe71dbe0a70d3c251bbf87",
            "chain": "ETH",
            "currency": "USD",
            "description": "Barb's Metamask"
        },
        {
            "id": "14ef6dda-2d99-57cb-8526-580ebd39df10",
            "address": "0x4cf74a30fedf2a5a33b28070daf999c58761619c",
            "chain": "ETH",
            "currency": "USD",
            "description": "Brian's ETH Address"
        },
        {
            "id": "990f9293-1f62-54ac-9438-29e359f96324",
            "address": "DnX6KhBqUK1sHUBxh3vqAL63BLhaiUBDHhLHfRsGggEH",
            "chain": "SOL",
            "currency": "USD",
            "description": "Leo's Phantom Wallet"
        },
        {
            "id": "b546a5c0-3455-5ac0-9a0d-209a628beed7",
            "address": "0x8381470ed67c3802402dbbfa0058e8871f017a6f",
            "chain": "ETH",
            "currency": "USD",
            "description": "My USDC address at a cryptocurrency exchange"
        },
        {
            "id": "33fcde31-7237-511c-8efa-45f77b315cb2",
            "address": "0x5b36fbbd0899c0a050627f610a80bcada4a4dfc3",
            "chain": "ETH",
            "currency": "USD",
            "description": "MetaMask"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Deposits 


## End-point: List all deposits
Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
### Method: GET
>```
>{{baseUrl}}/v1/businessAccount/deposits
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|type|wire|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|in ea eu|
|pageAfter|in ea eu|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "dc230f0b-e11f-43e2-b535-a6d61f95998e",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "100000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-11T13:40:01.395Z",
            "updateDate": "2023-04-11T13:40:23.753Z"
        },
        {
            "id": "4c87cbe7-c434-475e-ba29-6da3e6ae4c7d",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "100000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-05T20:40:01.252Z",
            "updateDate": "2023-04-05T20:44:01.460Z"
        },
        {
            "id": "192eff0a-3ae5-45bb-8838-e7563b992e86",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "10000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-05T17:00:01.274Z",
            "updateDate": "2023-04-05T17:02:41.218Z"
        },
        {
            "id": "9dbe8d64-24be-4b28-97ec-eb2a03a68960",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "10000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-04T16:40:01.141Z",
            "updateDate": "2023-04-04T16:43:30.908Z"
        },
        {
            "id": "3cfcbb0b-615c-45e5-849f-a76315454b83",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "1000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-04T15:50:01.154Z",
            "updateDate": "2023-04-04T15:53:05.182Z"
        },
        {
            "id": "54e7a0e0-d35f-48de-9364-273a7c39000e",
            "sourceWalletId": "750d8831-05d5-4fea-88c8-d35d0480bb92",
            "destination": {
                "type": "wallet",
                "id": "1002753955"
            },
            "amount": {
                "amount": "1000000.00",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2023-04-03T21:50:10.271Z",
            "updateDate": "2023-04-03T21:54:19.873Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Payments 


## End-point: Create a mock Wire payment
In the sandbox environment, initiate a mock wire payment that mimics the behavior of funds sent through the bank (wire) account linked to master wallet.
#### Body Params

**trackingRef** *string* (REQUIRED)
Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.

**amount** *object* (REQUIRED)

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code.

**beneficiaryBank** *object* (REQUIRED)

  * **accountNumber** *string* (REQUIRED)
  Virtual account number or Circle corporate Silvergate Wire account number that needs to be set as destination.


### Method: POST
>```
>{{baseUrl}}/v1/mocks/payments/wire
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body (**raw**)

```json
{
  "trackingRef": "CIR2AZYEHT",
  "amount": {
    "amount": "3.14",
    "currency": "USD"
  },
  "beneficiaryBank": {
    "accountNumber": "123180387879"
  }
}
```

### Response: 201
```json
{
    "data": {
        "trackingRef": "CIR2AZYEHT",
        "beneficiaryBank": {
            "accountNumber": "123180387879"
        },
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "pending"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
