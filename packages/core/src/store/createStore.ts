import {
  CreateStoreArgs,
  RegisterSubscribeArgs,
  StoreReturnType,
  StoreSubscribers,
  StoreType,
  SwearId,
} from './types';

export const createStore = (storeArgs: CreateStoreArgs = {}): StoreReturnType => {
  const store: StoreType<any> = {};
  const subscribers: StoreSubscribers = {};
  return {
    getState: () => store,
    subscribe: <T>({ swearId, defaultState, onUpdate }: RegisterSubscribeArgs<T>) => {
      store[swearId] = defaultState;
      subscribers[swearId] = onUpdate;
    },
    unsubscribe: (swearId: SwearId) => {
      delete subscribers[swearId];
    },
    getSwearValue: <T>(swearId: SwearId): T => store[swearId],
    setSwearValue: <T>(swearId: SwearId, payload: T) => {
      const prev = store[swearId];
      store[swearId] = payload;
      subscribers[swearId] ? subscribers[swearId](payload) : void 0;
      storeArgs?.onPatch ? storeArgs.onPatch({ prev: prev, payload, next: store[swearId] }) : void 0;
    },
  };
};
