# 🍭 Swear JS
## @swear-js/react
___
React package of [SwearJS](https://github.com/soundsnick/swear-js) state manager

[![npm](https://img.shields.io/npm/v/@swear-js/react?style=flat-square)](https://www.npmjs.com/package/@swear-js/react)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/react?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/react?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/react)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

## Installation
```
$ npm install @swear-js/core @swear-js/react
```

or in case you are using Yarn:
```
$ yarn add @swear-js/core @swear-js/react
```

## Usage
___
Initialize your store and a provider.

```javascript
// App.jsx
import { createStore } from "@swear-js/core";
import { swearContext } from "@swear-js/react";

function App() {
  const store = createStore({ onPatch: swearLogger });
  return (
    <swearContext.Provider value={store}>
      // ...
    </swearContext.Provider>
  );
}

export default App;
```

Then you have to create a swear
```typescript
// countSwear.ts
import { createSwear } from '@swear-js/react';

const defaultState = 0;

export const countSwear = createSwear('counter', defaultState, {
  set: (mutate) => (payload: number) => {
    mutate(payload);
  },
  clear: (mutate) => () => {
    mutate(defaultState);
  },
});
```
