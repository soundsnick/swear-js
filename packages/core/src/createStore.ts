import {
  SwearCreateStoreArgs,
  SwearRegisterSubscribeArgs,
  SwearStoreReturnType,
  SwearStoreSubscribers,
  SwearStoreType,
  SwearId,
} from './types';

export const createStore = (storeArgs: SwearCreateStoreArgs = {}): SwearStoreReturnType => {
  const store: SwearStoreType<any> = {};
  const subscribers: SwearStoreSubscribers = {};
  return {
    getState: () => store,
    subscribe: <T>({ swearId, defaultState, onUpdate }: SwearRegisterSubscribeArgs<T>) => {
      store[swearId] = defaultState;
      subscribers[swearId] = onUpdate;
    },
    unsubscribe: (swearId: SwearId) => {
      delete subscribers[swearId];
    },
    getSwearValue: <T>(swearId: SwearId): T => store[swearId],
    setSwearValue: <T>(swearId: SwearId, actionType: string, payload: T) => {
      if (store[swearId] !== payload) {
        const prev = { ...store };
        store[swearId] = payload;
        if (subscribers[swearId]) {
          subscribers[swearId](payload);
        }
        if (storeArgs?.onPatch) {
          storeArgs.onPatch({
            swearId,
            actionType,
            prev,
            payload,
            next: store,
          });
        }
      }
    },
  };
};
