import { createSwear } from '@swear-js/react';

export const countSwear = createSwear('counter', 0, {
  set: (mutate) => (payload: number) => {
    mutate(payload);
  },
});
