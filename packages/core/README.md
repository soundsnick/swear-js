## Swear JS
[![SwearJs](https://i.imgur.com/WLfyHix.png)](https://gitlab.com/soundsnick/swear-js)

Simple react state-manager

### Wrap your application with StoreContext

```typescript
import {createStore, StoreContext} from "swear-js";


function App() {
    const store = createStore();

    return (
        <StoreContext.Provider value={store}>
            ...
        </StoreContext.Provider>
    );
}
```

### Creating Swear

"Swear" is the name of your state particle.
1. Default swear that stores numeric value of counter.

```typescript
import {createSwear} from "swear-js";

// createSwear gets 3 arguments: name, defaultValue, actions
// Action is closure type function, which gets `mutate` argument, that is used for mutating state
const countSwear = createSwear('counter', 0, {
    set: (mutate) => (payload: number) => {
        mutate(payload);
    }
});
```

2. You can also pass function to `mutate` with previous value of your state.
```typescript
import {createSwear} from "swear-js";

// createSwear gets 3 arguments: name, defaultValue, actions
// Action is closure type function, which gets `mutate` argument, that is used for mutating state
const countSwear = createSwear('counter', 0, {
    set: (mutate) => (payload: number) => {
        mutate(prev => prev + payload);
    }
});
```

### Usage



```typescript
import {createSwear, useSwear} from "swear-js";

const countSwear = createSwear('counter', 0, {
  set: (mutate) => (payload: number) => {
    mutate(prev => prev + payload);
    return "Test string";
  }
});

// useSwear returns tuple of two elements: first is reactive value of your state, second is an object of your actions.
const [value, {set}] = useSwear(countSwear);
const foo = () => {
    set(10);
}

foo();
```

Operating with return values of actions

```typescript
import {createSwear, useSwear} from "swear-js";

const countSwear = createSwear('counter', 0, {
  set: (mutate) => (payload: number) => {
    mutate(prev => prev + payload);
    // Here you can return whatever you want
    return "Test string";
  }
});

const [value, {set}] = useSwear(countSwear);
const foo = () => {
    // And here get that returned value
    const response = set(10);
    console.log(response); // Will log "Test string"
}

foo();
```

## Contributing
Project repository: https://gitlab.com/soundsnick/swear-js
