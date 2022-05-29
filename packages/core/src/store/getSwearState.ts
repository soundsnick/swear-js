import { SwearStoreType, SwearType } from '../types';

export const getSwearState = (store: SwearStoreType) => <T, Y>(swear: SwearType<T, Y>): T => {
  const [swearId] = swear;
  return store.get(swearId);
};
