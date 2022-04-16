import { SwearMutateType } from '../types';

export const reset = (defaultState: any) => (mutate: SwearMutateType<any>) => () => {
  mutate(defaultState);
};
