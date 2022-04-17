import { SwearMutateType } from '../types';

export const reset = <T>(defaultState: T) => (mutate: SwearMutateType<T>) => () => {
  mutate(defaultState);
};
