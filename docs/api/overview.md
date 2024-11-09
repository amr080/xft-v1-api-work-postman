# XFT API Overview
Common endpoints shared across all XFT APIs.

[API Reference](https://developers.circle.com/circle-mint/reference/ping)
# 📁 Collection: Health 


## End-point: Ping
Checks that the service is running.
### Method: GET
>```
>{{baseUrl}}/ping
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "message": "pong"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Management 


## End-point: Get configuration info
Retrieves general configuration information.
### Method: GET
>```
>{{baseUrl}}/v1/configuration
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "payments": {
            "masterWalletId": "1002753955"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Encryption 


## End-point: Get public key
Retrieves an RSA public key to be used in encrypting data sent to the API. Your public keys change infrequently, so we encourage you to cache this response value locally for a duration of 24 hours or more.
### Method: GET
>```
>{{baseUrl}}/v1/encryption/public
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {
        "keyId": "key1",
        "publicKey": "LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tCgptUUVOQkY0YzhWZ0JDQUM4QnN6WElCTytiZDZ4VnhLMUdlc3hLK2sybnlpamZ0NDdWa2xnbU80VmpTSmMzQS8yCkljeDNyWFR3S0ZIV282ckJBVUduSVhoK2ZYKzIwZGYwbld6WlNvN3ZNK0ZpMTMzVlpuTG0zalk4cVozdnR5WEMKenhqZnJ5UnlDSncrMlh6cnRGVklYT0RLSEd0RjhUSXZFNUdjdVMxclNmMGlsVUtzOWxUdXlOTEx1bXZJQ2RTeQpCMWQ3MUVCM3VDMUJpekRtaWplMHNFbjB0QXBGS3V0ZnB5aWtsbTZwWm9zWnVnYVUzL1Z3NWNkQTU5VlhHWnFpCjNTWGdzeHU1RE4zc21TU3ZVVkthMUtQd3hackZRZHQ2a3lOVUFuR0lRS3d4b3BjejAyY255R3JvZEdGU3c5TC8KbzlmeHo3Q3FpcnJvL3F6VjJzQmxFMkRvZWVLY09ZVTlzVHRCQUJFQkFBRzBCa05wY21Oc1pZa0JWQVFUQVFnQQpQaFloQlBTc3RXN3o4TkgrWVQ1MGE3S1dkbkdNTUlYQUJRSmVIUEZZQWhzREJRazRaQWtBQlFzSkNBY0NCaFVLCkNRZ0xBZ1FXQWdNQkFoNEJBaGVBQUFvSkVMS1dkbkdNTUlYQXhSQUgvM2xVL1hJbEkrZG5PR2pGRHJCTHMzcUYKN1grV0xsSU5YRmlaNWFuRC9ySnRUbGptb2R2dkhSSmlJTm1GcTRrNi90MURqcTJsdWpXTTFIUmJIaUtxTE56dQovWVJNNG5aL1lGUUd2YktqY3dNWHJDZ1Y1UFNESjZJdTE3MW4vdFFrYXFmRzd0M2ZXQzQzek10VFM4YnV6ZEtGCkQ1ai9yd0VkUjhhOXlsc0luWDdPZXlqekpUeENjQm1udmE1LzhZRFF4NFd4bk1WQWJ4ZnRRSjJzUXNJa0pNQ2MKV1d0TVZwZWlSSExlbWg1cnNhWnBnSkZ5cW1QODJXaDd0aGRkWHd3eVFGcHVUc2x6b1VKMmJaakZyMUxDSjBxRQp3MVJBOFVHaWhPUFB2SVprc2RvdFVDVDhoeXJPYU9GbUtDVUhhV0FQYzRDT3NzdVJpMU5VSGpJUVA0bVUyU0M1CkFRMEVYaHp4V0FFSUFMZFhXTUJaODlQZHFrSVRPWWZlL1pZZko4c2Nudk1PdlovQW1Vb3JpakM4M1VMdjVLbWsKSGpjVXJTR0pFYkpOdDl2NWVpc2RGOFRDNzVwZmhBLzZiOHZCUTVoMU0yT0FoUklYZGlJY1hLaTJyTXhINU9jWQo2YWFkWlVIRFIrYUZWRmtWdm53UnkxVFRDOFNleWs5UDRtd2lrTzl2RGlpMmU1SFl0R1pQcUVEWXVRN05pQnM2CktMRWpHclMwWFpieHg4WVk5enRRTUZKc2ZjdXRJd2lvTy9HcU1ZMFRKdkI0QnVJWTh2TjhPTnVubHZjb2JBYS8KcVRpYVFUcE93T3g2eElPbHB0TkFST1pncUNPZEk2R2NqMjRZRmcycEV4d0h0SjBXOFJpRDBpNEJJU0tEYkZEVAovWmlkMkptZW9vdG0vZXpaNUlDSUZNNk1wOEhDTjB6eWFSMEFFUUVBQVlrQlBBUVlBUWdBSmhZaEJQU3N0Vzd6CjhOSCtZVDUwYTdLV2RuR01NSVhBQlFKZUhQRllBaHNNQlFrNFpBa0FBQW9KRUxLV2RuR01NSVhBdmVJSC9BM1IKOTdlSENUOHdlOUFDUXkxcDJmNk41UFd6QWRaTUtQNm9QTXhpNFlCVUoyK1orNDVibnB2a0ZSdllMVjNwVFRIRApEY0N5cWh4Z0cxdEVGaVUyclZINlFzRStnWldYZkJPZU1lWHhqRkt0U0lzNktQUWViVlMrUHJhOHljK3RPakxOCkZsNlFCRjNGcGJ3YmE5L1pPbk1rbW9yTE1IV241RnJOVy9aZnVLdzhTMHFGQ29nUVNxUUVpbjZnQ0ZEd0gzK0QKQ2JzcDVKMm4xN1pncjBpcGRRYjk4MDJ1bXdDVG9aVGtwL0pwb2t4YzJTZlczaG0xUEc4M1NPUGdMUll0a3JuTApRbURYSmtDdEN6amN3eGQwdnJpVzM4Y29zQko1aVN4WHU5MEZHRWZaaGQ1Y0o4cFpKSkd2VGMrMyt6eE1sWU1HCnZmUjNvUFFoWmtwT2NyRUhlajA9Cj1BT0QzCi0tLS0tRU5EIFBHUCBQVUJMSUMgS0VZIEJMT0NLLS0tLS0K"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Subscriptions 


## End-point: Create a notification subscription
Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.

#### Body Params

**endpoint** *string* (REQUIRED)
URL of the subscriber endpoint. Must be publicly accessible and utilize HTTPS.


### Method: POST
>```
>{{baseUrl}}/v1/notifications/subscriptions
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
  "endpoint": "https://webhook.site/f0c4231b-50b4-4d3a-9239-e36d1e1e8a7b"
}
```

### Response: 200
```json
{
    "data": {
        "id": "02da464c-426b-40ca-aa2c-4a7899f5dcb5",
        "endpoint": "https://webhook.site/f0c4231b-50b4-4d3a-9239-e36d1e1e8a7b",
        "subscriptionDetails": [
            {
                "url": "arn:aws:sns:us-east-1:908968368384:sandbox_platform-notifications-topic:1b8c6ff7-f633-420e-a45b-4c8941960e33",
                "status": "pending"
            },
            {
                "url": "arn:aws:sns:us-west-2:908968368384:sandbox_platform-notifications-topic:f3bee00e-60d4-45ee-a7f2-d1824e5d3cec",
                "status": "pending"
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List all notification subscriptions
Retrieve a list of existing notification subscriptions with details.
### Method: GET
>```
>{{baseUrl}}/v1/notifications/subscriptions
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
            "id": "02da464c-426b-40ca-aa2c-4a7899f5dcb5",
            "endpoint": "https://webhook.site/f0c4231b-50b4-4d3a-9239-e36d1e1e8a7b",
            "subscriptionDetails": [
                {
                    "url": "arn:aws:sns:us-east-1:908968368384:sandbox_platform-notifications-topic:1b8c6ff7-f633-420e-a45b-4c8941960e33",
                    "status": "confirmed"
                },
                {
                    "url": "arn:aws:sns:us-west-2:908968368384:sandbox_platform-notifications-topic:f3bee00e-60d4-45ee-a7f2-d1824e5d3cec",
                    "status": "pending"
                }
            ]
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove a notification subscription
To remove a subscription, all its subscription requests' statuses must be either 'confirmed', 'deleted' or a combination of those. A subscription with at least one 'pending' subscription request cannot be removed.
### Method: DELETE
>```
>{{baseUrl}}/v1/notifications/subscriptions/:id
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Response: 200
```json
{
    "data": {}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Stablecoins 


## End-point: List all stablecoins
Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
### Method: GET
>```
>{{baseUrl}}/v1/stablecoins
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
            "name": "Euro Coin",
            "symbol": "EUROC",
            "chains": [
                {
                    "amount": "103791823.39",
                    "chain": "AVAX",
                    "updateDate": "2024-01-12T20:40:07.224906Z"
                },
                {
                    "amount": "605987765.72",
                    "chain": "ETH",
                    "updateDate": "2024-01-12T20:40:07.199584Z"
                },
                {
                    "amount": "102445144.7",
                    "chain": "SOL",
                    "updateDate": "2024-01-12T20:40:07.096560Z"
                },
                {
                    "amount": "51390218.72",
                    "chain": "XLM",
                    "updateDate": "2024-01-12T20:40:07.160499Z"
                }
            ],
            "totalAmount": "863614952.53"
        },
        {
            "name": "USD Coin",
            "symbol": "USDC",
            "chains": [
                {
                    "amount": "79604738486.590489",
                    "chain": "ALGO",
                    "updateDate": "2024-01-12T20:40:08.194818Z"
                },
                {
                    "amount": "113885612615.444011",
                    "chain": "ARB",
                    "updateDate": "2024-01-12T20:40:08.224161Z"
                },
                {
                    "amount": "11550572713.192507",
                    "chain": "AVAX",
                    "updateDate": "2024-01-12T20:40:08.259884Z"
                },
                {
                    "amount": "30233862221.837329",
                    "chain": "BASE",
                    "updateDate": "2024-01-12T20:40:08.303653Z"
                },
                {
                    "amount": "12751911350400.624488",
                    "chain": "ETH",
                    "updateDate": "2024-01-12T20:40:07.538518Z"
                },
                {
                    "amount": "1974948716.48",
                    "chain": "FLOW",
                    "updateDate": "2024-01-12T20:40:07.612545Z"
                },
                {
                    "amount": "2327566368.16",
                    "chain": "HBAR",
                    "updateDate": "2024-01-12T20:40:08.145318Z"
                },
                {
                    "amount": "566221389.3",
                    "chain": "NEAR",
                    "updateDate": "2024-01-12T20:40:07.042757Z"
                },
                {
                    "amount": "11968771925.586714",
                    "chain": "NOBLE",
                    "updateDate": "2024-01-12T20:40:07.140334Z"
                },
                {
                    "amount": "29715457753.802399",
                    "chain": "OP",
                    "updateDate": "2024-01-12T20:40:07.166522Z"
                },
                {
                    "amount": "33577871109.677139",
                    "chain": "POLY",
                    "updateDate": "2024-01-12T20:40:07.195240Z"
                },
                {
                    "amount": "55356513430.902",
                    "chain": "SOL",
                    "updateDate": "2024-01-12T20:40:07.477721Z"
                },
                {
                    "amount": "19076442370.4",
                    "chain": "PAH",
                    "updateDate": "2024-01-12T20:40:07.360872Z"
                },
                {
                    "amount": "45077826529.91",
                    "chain": "TRX",
                    "updateDate": "2024-01-12T20:40:07.226457Z"
                },
                {
                    "amount": "5552285581.61",
                    "chain": "XLM",
                    "updateDate": "2024-01-12T20:40:07.272909Z"
                }
            ],
            "totalAmount": "13192380041613.517076"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
