# node-vk-sdk

Typescript SDK for VK API

## Installation

To install the stable version:

```bash
npm install --save node-vk-sdk
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.
If you don’t, you can access these files on [unpkg](https://unpkg.com/node-vk-sdk/), download them, or point your package manager to them.


## Usage

```js
import {VKApi, ConsoleLogger} from 'node-vk-sdk'

let api = new VKApi({
    logger: new ConsoleLogger()
})

api.usersGet({ userIds: ['1'] })
    .then(response => {
        console.log(response)
    })
```

## VKApi constructor options

```js
interface VKApiOptions {
    lang?: string|number,
    testMode?: number,
    logger?: BaseLogger,
    token?: string,
    timeout?: number,
    requestsPerSecond?: number,
    useQueue?: boolean
}
```

* lang?

Determines the language for the data to be displayed on. For example country and city names.
If you use a non-cyrillic language, cyrillic symbols will be transtiterated automatically  
`en – English, ru – Russian, ua – Ukrainian, be – Belorussian, es – Spanish, fi – finnish, de – German, it – Italian.`  
Numeric format from `account.getInfo` is supported as well.


* test_mode?

1 – allows to send requests from a native app without switching it on for all users.

* logger?

Logger class that implements `BaseLogger`
No logging will be used logger is not passed

* token?

Access token

* timeout?

Network timeout in ms

* requestsPerSecond

Maximum requests per second, default is 3

* useQueue

If useQueue is true, then SDK will limit number of requests per second at `requestsPerSecond`

## Calling methods

All api methods returning Promise, so you can use them as Promise or as async functions.
Methods arguments are described in interfaces, so you need to pass object implementing that interface, for example `users.get` props interface:

```js
export interface UsersGetParams {
    /**
     * User IDs or screen names ('screen_name'). By default, current user ID.
     */
    userIds?: string[],
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities';
     */
    fields?: string[],
    /**
     * Case for declension of user name and surname:; 'nom' — nominative (default); 'gen' — genitive ; 'dat' — dative; 'acc' — accusative ; 'ins' — instrumental ; 'abl' — prepositional
     */
    nameCase?: string,
    /**
     * access token
     */
    accessToken?: string
}
```

All props interfaces have `accessToken` property, that token will be used instead of token passed to `VKApi`

Calling example:


```js
api.usersGet({ userIds: ['1'] })
    .then(response => {
        console.log(response)
    })


// or we can call it as async function

let response = await api.usersGet({ userIds: ['1'] })
```
