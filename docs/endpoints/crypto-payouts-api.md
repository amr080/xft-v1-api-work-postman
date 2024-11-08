# Project: Crypto Payouts API
The Circle Crypto Payouts API allows you to programmatically make fast, global payouts to your customers, vendors, and suppliers. Make payouts on supported blockchains.

[Crypto Payouts API](https://developers.circle.com/circle-mint/docs/crypto-payouts)
# 📁 Collection: Payouts 


## End-point: Create a payout

Create a crypto payout.  

The following table includes the supported pairs of amount.currency and toAmount.currency for address book payouts:

| amount.currency  | toAmount.currency |
| ---------------- | ------------      |
| USD              | USD               |
| USD              | BTC               |
| USD              | ETH               |
| USD              | MTC               |
| EUR              | EUR               |
| BTC              | USD               |
| BTC              | BTC               |
| ETH              | USD               |
| ETH              | ETH               |

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**source** *object*
A source wallet location.

  * **type** *string* (REQUIRED)

  * **id** *string* (REQUIRED)
  The id of the wallet.

  * **identities** *array*

**destination** *object* (REQUIRED)
The destination.

  * **type** *string* (REQUIRED)
  The destination type.

  * **id** *string* (REQUIRED)
  Unique system generated identifier for the entity.

**amount** *object* (REQUIRED)

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code for the amount.

**toAmount** *object*

  * **currency** *string* (REQUIRED)
  Currency code for the amount.


### Method: POST
>```
>{{baseUrl}}/v1/payouts
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
    "type": "address_book",
    "id": "b8627ae8-732b-4d25-b947-1df8f4007a29"
  },
  "amount": {
    "amount": "3.14",
    "currency": "BTC"
  },
  "source": {
    "type": "wallet",
    "id": "12345",
    "identities": [
      {
        "type": "business",
        "name": "Satoshi Nakamoto",
        "addresses": [
          {
            "line1": "100 Money Street",
            "city": "Boston",
            "district": "MA",
            "postalCode": "01234",
            "country": "US",
            "line2": "Suite 1"
          },
          {
            "line1": "100 Money Street",
            "city": "Boston",
            "district": "MA",
            "postalCode": "01234",
            "country": "US",
            "line2": "Suite 1"
          }
        ]
      },
      {
        "type": "individual",
        "name": "Satoshi Nakamoto",
        "addresses": [
          {
            "line1": "100 Money Street",
            "city": "Boston",
            "district": "MA",
            "postalCode": "01234",
            "country": "US",
            "line2": "Suite 1"
          },
          {
            "line1": "100 Money Street",
            "city": "Boston",
            "district": "MA",
            "postalCode": "01234",
            "country": "US",
            "line2": "Suite 1"
          }
        ]
      }
    ]
  },
  "toAmount": {
    "currency": "ETH"
  }
}
```

### Response: 201
```json
{
    "data": {
        "id": "6e2e451e-a3f9-4856-a8e0-d60a990c754e",
        "destination": {
            "type": "address_book",
            "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259"
        },
        "amount": {
            "amount": "2.00",
            "currency": "USD"
        },
        "toAmount": {
            "currency": "ETH"
        },
        "createDate": "2024-01-17T21:40:41.425184Z",
        "updateDate": "2024-01-17T21:40:41.425184Z",
        "sourceWalletId": "1000594146",
        "status": "pending"
    }
}
```

### Response: 201
```json
{
    "data": {
        "id": "154e9724-2f07-42d7-87a6-7afbac92d06e",
        "destination": {
            "type": "address_book",
            "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259"
        },
        "amount": {
            "amount": "3001.00",
            "currency": "USD"
        },
        "toAmount": {
            "currency": "ETH"
        },
        "createDate": "2024-01-17T21:39:51.687286Z",
        "updateDate": "2024-01-17T21:39:51.687286Z",
        "sourceWalletId": "1000594146",
        "status": "pending"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all payouts
### Method: GET
>```
>{{baseUrl}}/v1/payouts
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|source|1000565227|
|destination|54c1cbab-c419-450f-ad23-906fa03af7f0|
|type|address_book|
|status|failed|
|status|complete|
|sourceCurrency|USD|
|destinationCurrency|USD|
|chain|ARB|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|cupidatat sint|
|pageAfter|cupidatat sint|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "6e2e451e-a3f9-4856-a8e0-d60a990c754e",
            "destination": {
                "type": "address_book",
                "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259"
            },
            "amount": {
                "amount": "2.00",
                "currency": "USD"
            },
            "toAmount": {
                "amount": "0.001072542798315455",
                "currency": "ETH"
            },
            "createDate": "2024-01-17T21:40:41.425184Z",
            "updateDate": "2024-01-17T21:43:54.407079Z",
            "sourceWalletId": "1000594146",
            "fees": {
                "amount": "0.01",
                "currency": "USD"
            },
            "status": "complete"
        },
        {
            "id": "154e9724-2f07-42d7-87a6-7afbac92d06e",
            "destination": {
                "type": "address_book",
                "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259"
            },
            "amount": {
                "amount": "3001.00",
                "currency": "USD"
            },
            "toAmount": {
                "currency": "ETH"
            },
            "createDate": "2024-01-17T21:39:51.687286Z",
            "updateDate": "2024-01-17T21:39:57.178871Z",
            "sourceWalletId": "1000594146",
            "status": "pending"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a payout
### Method: GET
>```
>{{baseUrl}}/v1/payouts/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "6e2e451e-a3f9-4856-a8e0-d60a990c754e",
        "destination": {
            "type": "address_book",
            "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259"
        },
        "amount": {
            "amount": "2.00",
            "currency": "USD"
        },
        "toAmount": {
            "amount": "0.001072542798315455",
            "currency": "ETH"
        },
        "createDate": "2024-01-17T21:40:41.425184Z",
        "updateDate": "2024-01-17T21:40:43.903187Z",
        "sourceWalletId": "1000594146",
        "status": "pending"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Crypto Address Book 


## End-point: Create a recipient

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**chain** *string* (REQUIRED)
A blockchain that a given currency is available on.

**address** *string* (REQUIRED)
An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.

**addressTag** *string*
The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.

**metadata** *object* (REQUIRED)

  * **nickname** *string*
  Nickname related to the address.

  * **email** *string*
  Email of the user.

  * **bns** *string*
  Blockchain Name Service (e.g. ENS) domain for the address.


### Method: POST
>```
>{{baseUrl}}/v1/addressBook/recipients
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
  "chain": "ETH",
  "address": "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
  "metadata": {
    "nickname": "sample nickname",
    "email": "satoshi@circle.com",
    "bns": "sample.circle"
  }
}
```

### Response: 201
```json
{
    "data": {
        "id": "a2e34bed-5490-5388-8d4c-5388c7674815",
        "chain": "ETH",
        "address": "0x8381470ed67c3802402dbbfa0058e8871f017a6f",
        "metadata": {
            "nickname": "sample nickname",
            "email": "satoshi@circle.com",
            "bns": "sample.circle"
        },
        "status": "pending",
        "createDate": "2024-01-17T21:47:19.805349Z",
        "updateDate": "2024-01-17T21:47:19.805349Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all recipients
### Method: GET
>```
>{{baseUrl}}/v1/addressBook/recipients
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|address|cupidatat sint|
|chain|cupidatat sint|
|email|cupidatat sint|
|status|pending|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|cupidatat sint|
|pageAfter|cupidatat sint|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259",
            "chain": "ETH",
            "address": "0x8381470ed67c3802402dbbfa0058e8871f017a6f",
            "metadata": {
                "nickname": "Min's Test"
            },
            "status": "active",
            "createDate": "2023-08-17T13:00:14.579175Z",
            "updateDate": "2023-08-17T13:00:14.579175Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a recipient
### Method: GET
>```
>{{baseUrl}}/v1/addressBook/recipients/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259",
        "chain": "ETH",
        "address": "0x8381470ed67c3802402dbbfa0058e8871f017a6f",
        "metadata": {
            "nickname": "Min's Test"
        },
        "status": "active",
        "createDate": "2023-08-17T13:00:14.579175Z",
        "updateDate": "2023-08-17T13:00:15.704097Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Modify a recipient

#### Body Params

**metadata** *object*

  * **nickname** *string*
  Nickname related to the address.

  * **email** *string*
  Email of the user.

  * **bns** *string*
  Blockchain Name Service (e.g. ENS) domain for the address.


### Method: PATCH
>```
>{{baseUrl}}/v1/addressBook/recipients/:id
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
  "metadata": {
    "nickname": "sample nickname",
    "email": "satoshi@circle.com",
    "bns": "sample.circle"
  }
}
```

### Response: 200
```json
{
    "data": {
        "id": "2b9f9ed9-ac9d-5f6e-954b-a29e03ee3259",
        "chain": "ETH",
        "address": "0x8381470ed67c3802402dbbfa0058e8871f017a6f",
        "metadata": {
            "nickname": "sample nickname test",
            "email": "satoshi@circle.com",
            "bns": "sample.circle"
        },
        "status": "pending",
        "createDate": "2023-08-17T13:00:14.579175Z",
        "updateDate": "2024-01-17T21:48:06.206438Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete a recipient
### Method: DELETE
>```
>{{baseUrl}}/v1/addressBook/recipients/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Crypto Exchange Rates 


## End-point: Get a exchange rate
Fetch the current rates for the specified trading pair. The trading pair is defined by a base currency followed by a quote currency. The response contains buy and sell rates denominated in the quote currency. **Exchange rate is an estimate only and is subject to change by the time you submit the actual request.**
### Method: GET
>```
>{{baseUrl}}/v1/exchange/rates/:trading-pair
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "buy": "29802.80030000000000000000000000000",
        "sell": "29491.7372750000000000000000000000000000000000000000000000000000000000000000000000000000",
        "createDate": "2024-01-17T21:47:46.803436259Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
