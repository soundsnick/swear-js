# @swear-js/core
___
[![npm](https://img.shields.io/npm/v/@swear-js/core?style=flat-square)](https://www.npmjs.com/package/@swear-js/core)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/core?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/core?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/core)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

Core package of [SwearJS](https://github.com/soundsnick/swear-js) state manager

### Demo
Use npx to run local version of demo application with swear-js:
```bash
$ npx swear-demo-agnostic
```
> Don't forget to remove created project directory after

## Installation
```bash
$ npm install @swear-js/core
```

or in case you are using Yarn:
```bash
$ yarn add @swear-js/core
```

## Usage
___
First you have to initialize your store.

```javascript
import { createStore, createSwear } from "@swear-js/core";

const store = createStore();

// Create swear
const countSwear = createSwear('count', 0, (mutate) => ({
    increase: () => mutate(prev => prev + 1),
    decrease: () => mutate(prev => prev - 1),
}));

// Callback is triggered on every swear update
store.subscribe(countSwear, (newValue) => {
    // Handle updates of countSwear
    console.log(newValue);
});

// This will return object of actions with default actions: set() and reset(), and your own defined actions.
const actions = store.getSwearActions(countSwear);
const { set, reset, increase, decrease } = actions; // set() and reset() are default actions

increase(); // When you dispatch an action, swear value is mutated, and subscribtion callback is triggered.
```

## Default actions
`store.getSwearActions()` returns an object of combined default actions and your actions.
> `set()` action implements the same usage interface as React's useState setter. It means you can pass both a payload, and callback with previous value.
> Example: `set((prev) => prev + 10);`

## Logging
___
You can pass your custom logger to the store, or use @swear-js/logger.
Swear-js logger usage:

```javascript
import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";

const store = createStore({ onPatch: swearLogger });
```

In order to implement your own logger solution, you just have to keep in mind an API of `onPatch` argument of the store.
`onPatch` is any callback that get `SwearPatch`(you can find it in package) type as an argument.
Simply SwearPatch is:
```javascript
{
    swearId, // String value which gets a name of patched swear state
    tag, // String value which gets an optional tag, you want to set
    prev, // Previous store state (object)
    payload, // Payload passed
    next // Current store state
}
```
Example very-simple implementation of logger:

```javascript
import { SwearPatch, createStore } from "@swear-js/core";

const logger = ({ swearId, tag, prev, payload, next }: SwearPatch) => {
    console.log(`Swear: ${swearId}, Tag: ${tag}, Payload: ${payload}`);
    console.log(`Previous state: ${prev}`, `Current state: ${next}`);
};

const store = createStore({ onPatch: logger });
```
