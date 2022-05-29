import {
  SwearMutateType, SwearStoreSubscribers, SwearStoreType, SwearType,
} from '../types';
import { ARGS } from '../constants';

export const getSwearActions = (store: SwearStoreType, subscribers: SwearStoreSubscribers) => <T, Y>(swear: SwearType<T, Y>) => {
  const [swearId, defaultState, actions] = swear;

  const mutator: SwearMutateType<T> = (payload, tag) => {
    const finalPayload = payload instanceof Function ? payload(store.get(swearId)) : payload;
    const prev = store.get(swearId);

    store.set(swearId, finalPayload);

    store.get(ARGS).onPatch?.({
      swearId,
      tag: tag ?? null,
      prev,
      payload: finalPayload,
      next: store.get(swearId),
    });

    if (subscribers.has(swearId)) {
      subscribers.get(swearId)!.forEach((subscriberCb) => {
        subscriberCb(store.get(swearId));
      });
    }
  };

  const defaultActions = (mutate: SwearMutateType<T>) => ({
    set: (payload: T | ((prev: T) => T)) => (mutate(payload instanceof Function ? payload(store.get(swearId)) : payload)),
    reset: () => mutate(defaultState),
  });

  return {
    ...defaultActions(mutator),
    ...actions(mutator),
  };
};
