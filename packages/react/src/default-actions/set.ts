import { SwearMutateType } from '../types';

export const set = <T>(mutate: SwearMutateType<T>) => (payload: T) => {
  mutate(payload);
};
