import {
  SwearCreateStoreArgs,
  SwearStoreSubscribers,
  SwearStoreType,
} from '../types';
import { subscribe } from './subscribe';
import { getSwearState } from './getSwearState';
import { ARGS } from '../constants';
import { getSwearActions } from './getSwearActions';
import { createSwearGetter } from './createSwearGetter';

export const createStore = (storeArgs: SwearCreateStoreArgs = {}) => {
  const store: SwearStoreType = new Map();
  const subscribers: SwearStoreSubscribers = new Map();

  store.set(ARGS, storeArgs);

  return {
    getStore: () => store,
    subscribe: subscribe(store, subscribers),
    getSwearState: getSwearState(store),
    getSwearActions: getSwearActions(store, subscribers),
    createSwearGetter: createSwearGetter(store),
  };
};
