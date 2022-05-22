import {
  SwearCreateStoreArgs, SwearMutateType,
  SwearStoreSubscribers,
  SwearStoreType,
  SwearSubscriberOnUpdate,
  SwearType,
} from './types';

export const createStore = (storeArgs: SwearCreateStoreArgs = {}) => {
  const store: SwearStoreType<any> = {};
  const subscribers: SwearStoreSubscribers = {};

  return {
    getStore: () => store,
    subscribe: <T, Y>(swear: SwearType<T, Y>, onUpdate: SwearSubscriberOnUpdate<T>) => {
      const [swearId, defaultState] = swear;
      if (!(swearId in store)) {
        store[swearId] = defaultState;
      }
      subscribers[swearId] = onUpdate;
    },
    unsubscribe: <T, Y>(swear: SwearType<T, Y>) => {
      const [swearId] = swear;
      delete subscribers[swearId];
    },
    getSwearState: <T, Y>(swear: SwearType<T, Y>): T => {
      const [swearId] = swear;
      return store[swearId];
    },
    getSwearActions: <T, Y>(swear: SwearType<T, Y>) => {
      const [swearId, defaultState, actions] = swear;

      const mutator: SwearMutateType<T> = (payload, tag) => {
        const finalPayload = payload instanceof Function ? payload(store[swearId]) : payload;
        const prev = store[swearId];

        store[swearId] = finalPayload;

        storeArgs.onPatch?.({
          swearId,
          tag: tag ?? null,
          prev,
          payload: finalPayload,
          next: store[swearId],
        });

        subscribers[swearId]?.(store[swearId]);
      };

      const defaultActions = (mutate: SwearMutateType<T>) => ({
        set: (payload: T | ((prev: T) => T)) => (mutate(payload instanceof Function ? payload(store[swearId]) : payload)),
        reset: () => mutate(defaultState),
      });

      return {
        ...defaultActions(mutator),
        ...actions(mutator),
      };
    },
  };
};
