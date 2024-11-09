# Project: Accounts API
The Accounts API allows you to easily create and host digital wallets for your customers, and manage transfers of funds across accounts within the Circle platform.

[Accounts API](https://developers.circle.com/circle-mint/docs/getting-started-with-the-circle-digital-dollar-accounts-api)
# 📁 Collection: Wallets 


## End-point: Create a wallet
Creates an end user wallet.

#### Body Params

**idempotencyKey** _string_ (REQUIRED)  
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**description** _string_  
A human-friendly, non-unique identifier for a wallet.
### Method: POST
>```
>{{baseUrl}}/v1/wallets
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
  "description": "Treasury Wallet"
}
```

### Response: 201
```json
{
    "data": {
        "walletId": "1016945744",
        "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
        "type": "end_user_wallet",
        "description": "Treasury Wallet",
        "balances": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all wallets
Retrieves a list of a user's wallets.
### Method: GET
>```
>{{baseUrl}}/v1/wallets
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
|pageBefore|esse sit|
|pageAfter|esse sit|
|pageSize|5|


### Response: 200
```json
{
    "data": [
        {
            "walletId": "1016884075",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Test wallet",
            "balances": [
                {
                    "amount": "4.00",
                    "currency": "USD"
                }
            ]
        },
        {
            "walletId": "1010400470",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Test Wallet for Xapo",
            "balances": [
                {
                    "amount": "1000.00",
                    "currency": "USD"
                }
            ]
        },
        {
            "walletId": "1001429912",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Min's",
            "balances": []
        },
        {
            "walletId": "1001429908",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Your payments end_user_wallet account",
            "balances": []
        },
        {
            "walletId": "1000927099",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Wallet for postman",
            "balances": []
        },
        {
            "walletId": "1000789094",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "end_user_wallet",
            "description": "Your payments end_user_wallet account",
            "balances": []
        },
        {
            "walletId": "1000594146",
            "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
            "type": "merchant",
            "balances": [
                {
                    "amount": "0.123330811621508032",
                    "currency": "ETH"
                },
                {
                    "amount": "4824522942.77",
                    "currency": "USD"
                }
            ]
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a wallet
### Method: GET
>```
>{{baseUrl}}/v1/wallets/:walletId
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "walletId": "1001429912",
        "entityId": "dfee2397-f3d6-4676-8405-4dda7e1b5b0d",
        "type": "end_user_wallet",
        "description": "Min's",
        "balances": []
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Transfers 


## End-point: Create a transfer
A transfer can be made from an existing funded wallet to another wallet. This transfer is internal-only, this call cannot be used for on-chain transfers.

#### Body Params

**idempotencyKey** _string_ (REQUIRED)  
Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.

**source** _object_ (REQUIRED)

- **type** _string_ (REQUIRED)
- **id** _string_ (REQUIRED)  
    The id of the wallet.
- **identities** _array_
    

**destination** (REQUIRED)  
Option 1

- **type** _string_ (REQUIRED)
- **address** _string_ (REQUIRED)  
    The blockchain address.
- **addressTag** _string_  
    The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
- **chain** _string_ (REQUIRED)  
    A blockchain that a given currency is available on.
    

Option 2

- **type** _string_ (REQUIRED)
- **id** _string_ (REQUIRED)  
    The id of the wallet.
    

**amount** _object_ (REQUIRED)

- **amount** _string_ (REQUIRED)  
    Magnitude of the amount, in units of the currency, with a `.`.
- **currency** _string_ (REQUIRED)  
    Currency code for the amount.
### Method: POST
>```
>{{baseUrl}}/v1/transfers
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
  "source": {
    "type": "wallet",
    "id": "12345"
  },
  "destination": {
    "type": "wallet",
    "address": "54321"
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
        "id": "06e24b32-e23a-4572-85c5-a275887fce60",
        "source": {
            "type": "wallet",
            "id": "1000594146"
        },
        "destination": {
            "type": "wallet",
            "id": "1001429912"
        },
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "pending",
        "createDate": "2024-01-17T17:52:22.185Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all transfers
Searches for transfers involving the provided wallets. If no wallet ids are provided, searches all wallets associated with your Circle API account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
### Method: GET
>```
>{{baseUrl}}/v1/transfers?pageSize=2
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|walletId|12345|
|sourceWalletId|12345|
|destinationWalletId|12345|
|returnIdentities|false|
|from|2020-04-10T02:13:30.000Z|
|to|2020-04-10T02:13:30.000Z|
|pageBefore|esse sit|
|pageAfter|esse sit|
|pageSize|2|


### Response: 200
```json
{
    "data": [
        {
            "id": "06e24b32-e23a-4572-85c5-a275887fce60",
            "source": {
                "type": "wallet",
                "id": "1000594146"
            },
            "destination": {
                "type": "wallet",
                "id": "1001429912"
            },
            "amount": {
                "amount": "3.14",
                "currency": "USD"
            },
            "status": "complete",
            "createDate": "2024-01-17T17:52:22.185Z"
        },
        {
            "id": "bb4bc9a5-d01c-4539-97cf-d58009d8e576",
            "source": {
                "type": "wallet",
                "id": "1000594146"
            },
            "destination": {
                "type": "blockchain",
                "address": "0x35ced7a9a8d31d68ad149049ccda3a6d832a2ef8",
                "chain": "ARB"
            },
            "amount": {
                "amount": "100.00",
                "currency": "USD"
            },
            "transactionHash": "0x75ed43d91ad693a79e8d18105f491391e92418d45ad3bb8c0ea08e2783906a81",
            "status": "complete",
            "createDate": "2024-01-11T19:10:53.002Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get a transfer
### Method: GET
>```
>{{baseUrl}}/v1/transfers/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Query Params

|Param|value|
|---|---|
|returnIdentities|false|


### Response: 200
```json
{
    "data": {
        "id": "06e24b32-e23a-4572-85c5-a275887fce60",
        "source": {
            "type": "wallet",
            "id": "1000594146"
        },
        "destination": {
            "type": "wallet",
            "id": "1001429912"
        },
        "amount": {
            "amount": "3.14",
            "currency": "USD"
        },
        "status": "complete",
        "createDate": "2024-01-17T17:52:22.185Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
