# Project: Crypto Deposits API
The Circle Payments API allows you to take payments from your end users in USDC. It has been designed with any business or internet commerce in mind, not just crypto applications.

[Crypto Deposits API](https://developers.circle.com/circle-mint/docs/overview)
# 📁 Collection: Crypto Payment Intents 


## End-point: Create a payment intent
Create a transient or continuous payment intent
#### Body Params

Option 1

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**amount** *object* (REQUIRED)

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code.

**settlementCurrency** *string* (REQUIRED)
Desired currency for the payments to settle in.

**paymentMethods** *array* (REQUIRED)

**merchantWalletId** *string*
Unique system generated identifier for the wallet of the merchant.


Option 2

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**currency** *string* (REQUIRED)
Desired currency for the payment

**settlementCurrency** *string* (REQUIRED)
Desired currency for the payments to settle in.

**paymentMethods** *array* (REQUIRED)

**merchantWalletId** *string*
Unique system generated identifier for the wallet of the merchant.

**type** *string*



### Method: POST
>```
>{{baseUrl}}/v1/paymentIntents
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
  "amount": {
    "amount": "3.14",
    "currency": "BTC"
  },
  "settlementCurrency": "BTC",
  "paymentMethods": [
    {
      "type": "blockchain",
      "chain": "NOBLE",
      "address": "0x8381470ED67C3802402dbbFa0058E8871F017A6F"
    },
    {
      "type": "blockchain",
      "chain": "BASE",
      "address": "0x8381470ED67C3802402dbbFa0058E8871F017A6F"
    }
  ],
  "merchantWalletId": "212000"
}
```

### Response: 201
```json
{
    "data": {
        "type": "continuous",
        "id": "5c38ab9d-0858-4f2c-816c-bff50b87dc2b",
        "amountPaid": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amountRefunded": {
            "amount": "0.00",
            "currency": "USD"
        },
        "settlementCurrency": "USD",
        "paymentMethods": [
            {
                "type": "blockchain",
                "chain": "ETH"
            }
        ],
        "timeline": [
            {
                "status": "created",
                "time": "2024-01-17T18:14:55.875875Z"
            }
        ],
        "createDate": "2024-01-17T18:14:55.873663Z",
        "updateDate": "2024-01-17T18:14:55.873663Z",
        "merchantWalletId": "1000594146",
        "currency": "USD"
    }
}
```

### Response: 201
```json
{
    "data": {
        "id": "5e1d524b-79f7-420e-8437-c17c84a79c34",
        "amountPaid": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amountRefunded": {
            "amount": "0.00",
            "currency": "USD"
        },
        "settlementCurrency": "USD",
        "paymentMethods": [
            {
                "type": "blockchain",
                "chain": "ETH",
                "address": "0x35cEd7A9A8d31D68Ad149049cCDa3a6D832a2EF8"
            }
        ],
        "timeline": [
            {
                "status": "created",
                "time": "2024-01-17T17:59:03.247814Z"
            }
        ],
        "createDate": "2024-01-17T17:59:03.245Z",
        "updateDate": "2024-01-17T17:59:03.245Z",
        "merchantWalletId": "1000594146",
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "paymentIds": [],
        "refundIds": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all payment intents
### Method: GET
>```
>{{baseUrl}}/v1/paymentIntents
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|status|pending|
|context|paid|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|anim amet commodo|
|pageAfter|anim amet commodo|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "id": "513fee57-0557-448d-bee5-32e8e6518f25",
            "amountPaid": {
                "amount": "0.00",
                "currency": "USD"
            },
            "amountRefunded": {
                "amount": "0.00",
                "currency": "USD"
            },
            "settlementCurrency": "USD",
            "paymentMethods": [
                {
                    "type": "blockchain",
                    "chain": "ETH",
                    "address": "0xde982c93966731273f730b35967a36d5b9b1c01d"
                }
            ],
            "fees": [
                {
                    "type": "blockchainLeaseFee",
                    "amount": "0.00",
                    "currency": "USD"
                }
            ],
            "timeline": [
                {
                    "status": "pending",
                    "time": "2024-01-17T18:58:59.610789Z"
                },
                {
                    "status": "created",
                    "time": "2024-01-17T18:58:56.811398Z"
                }
            ],
            "createDate": "2024-01-17T18:58:56.810528Z",
            "updateDate": "2024-01-17T18:58:59.608404Z",
            "merchantWalletId": "1000594146",
            "amount": {
                "amount": "3.14",
                "currency": "USD"
            },
            "expiresOn": "2024-01-18T02:58:59.499965Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a payment intent
### Method: GET
>```
>{{baseUrl}}/v1/paymentIntents/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "type": "continuous",
        "id": "5c38ab9d-0858-4f2c-816c-bff50b87dc2b",
        "amountPaid": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amountRefunded": {
            "amount": "0.00",
            "currency": "USD"
        },
        "settlementCurrency": "USD",
        "paymentMethods": [
            {
                "type": "blockchain",
                "chain": "ETH",
                "address": "0x9f0ca4a0a77a3946ec1c8be2e5664e01ab4378e5"
            }
        ],
        "fees": [
            {
                "type": "blockchainLeaseFee",
                "amount": "0.00",
                "currency": "USD"
            }
        ],
        "timeline": [
            {
                "status": "active",
                "time": "2024-01-17T18:14:58.461352Z"
            },
            {
                "status": "created",
                "time": "2024-01-17T18:14:55.875875Z"
            }
        ],
        "createDate": "2024-01-17T18:14:55.873663Z",
        "updateDate": "2024-01-17T18:14:58.457863Z",
        "merchantWalletId": "1000594146",
        "currency": "USD"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Expire a payment intent

#### Body Params


### Method: POST
>```
>{{baseUrl}}/v1/paymentIntents/:id/expire
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
{}
```

### Response: 200
```json
{
    "data": {
        "id": "5e1d524b-79f7-420e-8437-c17c84a79c34",
        "amountPaid": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amountRefunded": {
            "amount": "0.00",
            "currency": "USD"
        },
        "settlementCurrency": "USD",
        "paymentMethods": [
            {
                "type": "blockchain",
                "chain": "ETH",
                "address": "0x35cEd7A9A8d31D68Ad149049cCDa3a6D832a2EF8"
            }
        ],
        "timeline": [
            {
                "status": "expired",
                "context": "underpaid",
                "reason": "requested_by_merchant",
                "time": "2024-01-17T21:13:30.301Z"
            },
            {
                "status": "created",
                "time": "2024-01-17T17:59:03.247814127Z"
            }
        ],
        "createDate": "2024-01-17T17:59:03.245Z",
        "updateDate": "2024-01-17T21:13:30.301Z",
        "merchantWalletId": "1000594146",
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "paymentIds": [],
        "refundIds": [],
        "expiresOn": "2024-01-17T21:13:30.298Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Refund a payment intent

#### Body Params

**idempotencyKey** *string* (REQUIRED)
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**destination** *object* (REQUIRED)
The destination of a crypto refund.

  * **address** *string* (REQUIRED)
  The blockchain address.

  * **addressTag** *string*
  The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.

  * **chain** *string* (REQUIRED)
  A blockchain that a given currency is available on.

**amount** (REQUIRED)
The source amount of the refund, it can be in either the original payment currency or the settlement currency.

  * **currency** *string* (REQUIRED)
  Currency code.

**toAmount** (REQUIRED)
The destination amount of the refund, it must be in the original payment currency.

  * **amount** *string* (REQUIRED)
  Magnitude of the amount, in units of the currency, with a `.`.

  * **currency** *string* (REQUIRED)
  Currency code.


### Method: POST
>```
>{{baseUrl}}/v1/paymentIntents/:id/refund
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
    "address": "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
    "chain": "POLY",
    "addressTag": "123456789"
  },
  "amount": {
    "currency": "USD"
  },
  "toAmount": {
    "amount": "3.14",
    "currency": "USD"
  }
}
```

### Response: 201
```json
{
    "data": {
        "id": "e02e0a19-823f-378b-a468-c713d669eb15",
        "type": "refund",
        "status": "pending",
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "createDate": "2024-01-17T21:37:14.685264Z",
        "updateDate": "2024-01-17T21:37:14.685264Z",
        "merchantId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
        "merchantWalletId": "1000594146",
        "paymentIntentId": "513fee57-0557-448d-bee5-32e8e6518f25",
        "settlementAmount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "depositAddress": {
            "chain": "POLY",
            "address": "0x8381470ED67C3802402dbbFa0058E8871F017A6F",
            "addressTag": "123456789"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Balances 


## End-point: List all balances
Retrieves the balance of merchant funds that have settled and also of funds that have been sent for processing but have not yet settled.
### Method: GET
>```
>{{baseUrl}}/v1/balances
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
                "amount": "0.123330811621508032",
                "currency": "ETH"
            },
            {
                "amount": "4824523946.77",
                "currency": "USD"
            }
        ],
        "unsettled": [
            {
                "amount": "884.95",
                "currency": "USD"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
