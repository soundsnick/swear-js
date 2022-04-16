import { SwearMutateType } from '../types';

export const set = (mutate: SwearMutateType<any>) => (payload: any) => {
  mutate(payload);
};
