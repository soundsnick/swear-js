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
