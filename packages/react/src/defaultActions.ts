import { SwearMutateType } from './types';

export const defaultActions = <T>(defaultState: T, swearValue: T) => (mutate: SwearMutateType<T>) => ({
  set: (payload: T | ((prev: T) => T)) => (mutate(payload instanceof Function ? payload(swearValue) : payload)),
  reset: () => mutate(defaultState),
});
