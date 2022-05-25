# @swear-js/logger
___
[![npm](https://img.shields.io/npm/v/@swear-js/logger?style=flat-square)](https://www.npmjs.com/package/@swear-js/logger)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/logger?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/logger?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/logger)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

Logger package for [SwearJS](https://github.com/soundsnick/swear-js) state manager

## Installation
```bash
$ npm install @swear-js/logger
```

or in case you are using Yarn:
```bash
$ yarn add @swear-js/logger
```

## Usage
___
You can pass your custom logger to the store, or use @swear-js/logger.
Swear-js logger usage:

```javascript
import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";

const store = createStore({ onPatch: swearLogger });
```

## Tagging
Architecture of SwearJs is built that way, patches know anything about action from where mutation was triggered. Didn't expect that, soon will be trying to fix it.
Instead you can use tagging while mutating.
Mutate function gets string tag as a second argument.
```javascript
export const countSwear = createSwear('counter', defaultState, (mutate) => ({
    decrease: () => {
        // You can also access previous value like this
        mutate((prev) => prev - 1, 'SOME TAG THAT WILL BE SHOWN IN LOGS');
    }
}));
```
