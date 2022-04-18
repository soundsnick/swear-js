# 🍭 Swear JS
## @swear-js/react
___
React package of [SwearJS](https://github.com/soundsnick/swear-js) state manager

[![npm](https://img.shields.io/npm/v/@swear-js/react?style=flat-square)](https://www.npmjs.com/package/@swear-js/react)
![npm type definitions](https://img.shields.io/npm/types/@swear-js/react?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@swear-js/react?style=flat-square)](https://bundlephobia.com/result?p=@swear-js/react)
![GitHub](https://img.shields.io/github/license/soundsnick/swear-js?style=flat-square)

### Demo
Demo application is runnable via npx:
- [React] `$ npx swear-demo-react`
> Don't forget to remove created project directory after


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

// mutate is a function that changes your state in store
export const countSwear = createSwear('counter', defaultState, (mutate) => ({
  decrease: () => {
      // You can also access previous value like this
      mutate((prev) => prev - 1);
  }
}));
```

Use your swear via hook
```javascript
// YourComponent.jsx
import React from 'react';
import { countSwear } from './countSwear';

export const YourComponent = () => {
  // set and reset actions are here by default
  const [count, { set, decrease, reset }] = useSwear(countSwear);

  return (
      <>
        <span>{count}</span>
        // Prev is a special action which can get callback with previous value
        <Button onClick={() => set((prev) => prev + 1)}>Increase</Button>
        <Button onClick={decrease}>Increase</Button>
        <Button onClick={reset}>Reset</Button>
      </>
  );
}
```

Primitive mode
```javascript
export const YourComponent = () => {
    import React from 'react';
    import { useSwearState } from '@swear-js/react';

    // You can use a primitive swear without creation, with only default `set` and `reset` actions
    const [count, { set, reset }] = useSwearState('counter', 0);

    return (
        <>
          <span>{count}</span>
          // Prev is a special action which can get callback with previous value
          <Button onClick={() => set((prev) => prev + 1)}>Increase</Button>
          <Button onClick={() => set((prev) => prev - 1)}>Decrease</Button>
          <Button onClick={reset}>Reset</Button>
        </>
    );
}
```
