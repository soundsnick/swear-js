import { createSwear } from '@swear-js/react';

const defaultState = 0;

export const countSwear = createSwear('counter', defaultState, (mutate) => ({
  increase: () => mutate((prev) => prev + 1, 'increase'),
  decrease: () => mutate((prev) => prev - 1),
}));
