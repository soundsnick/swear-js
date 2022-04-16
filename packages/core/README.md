# 🍭 Swear JS
## @swear-js/core
___
[![npm](https://img.shields.io/npm/v/@swear-js/core?style=flat-square)](https://www.npmjs.com/package/@swear-js/core)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/core?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/core?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/core)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

Core package of [SwearJS](https://github.com/soundsnick/swear-js) state manager


### Frameworks:
- [Framework agnostic (@swear-js/core)](https://npmjs.org/@swear-js/core)
- [React (@swear-js/react)](https://npmjs.org/@swear-js/react)

### Demo
Demo application is runnable via npx:
- [Framework agnostic] `$ npx swear-demo-agnostic`
> Don't forget to remove created project directory after


## Installation
```
$ npm install @swear-js/core
```

or in case you are using Yarn:
```
$ yarn add @swear-js/core
```

## Usage
___
First you have to initialize your store.

```typescript
import { createStore } from "@swear-js/core";

const store = createStore();
```

Then you have to create
```javascript
import { createStore } from "@swear-js/core";

const store = createStore();

// This will create swear, and triggers onUpdate everytime it changes
store.subscribe({
  swearId: 'count',
  defaultState: 0,
  onUpdate: (newValue) => {
      // You can here trigger things when it updates. You can trigger here your render function, or something
  }
});

const decreaseHandler = () => {
  store.setSwearValue('count', 'decrease', store.getSwearValue('count') - 1);
};
const increaseHandler = () => {
  store.setSwearValue('count', 'increase', store.getSwearValue('count') + 1);
};
```

## Logging
___
You can pass your custom logger to the store, or use @swear-js/logger.
Swear-js logger usage:

```typescript
import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";

const store = createStore({ onPatch: swearLogger });
```

In order to implement your own logger solution, you just have to keep in mind an API of `onPatch` argument of the store.
`onPatch` is any callback that get `SwearPatch`(you can find it in package) type as an argument.
Simply SwearPatch is:
```typescript
{
  swearId, // String value which gets a name of patched swear state
  actionType, // String value which gets a name of a dispatched action
  prev, // Previous store state (object)
  payload, // Payload passed
  next // Current store state
}
```
Example very-simple implementation of logger:

```typescript
import { SwearPatch, createStore } from "@swear-js/core";

const logger = ({ swearId, actionType, prev, payload, next }: SwearPatch) => {
    console.log(`Swear: ${swearId}, Action: ${actionType}, Payload: ${payload}`);
    console.log(`Previous state: ${prev}`, `Current state: ${next}`);
};

const store = createStore({ onPatch: logger });
```
