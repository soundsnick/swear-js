import { createSwear } from '@swear-js/react';

const defaultState = 0;

export const countSwear = createSwear('counter', defaultState, {
  // There are default `set` and `reset` actions
});
