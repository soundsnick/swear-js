import { SwearStoreType, SwearType } from '../types';

export const createSwearGetter = (store: SwearStoreType) => <T, Y, S>(swear: SwearType<T, Y>, cb: (state: T) => S) => {
  const [swearId] = swear;
  return cb(store.get(swearId));
};
