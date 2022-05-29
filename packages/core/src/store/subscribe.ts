import { v4 as uuid } from 'uuid';
import {
  SwearStoreSubscribers,
  SwearStoreType,
  SwearSubscriberOnUpdate,
  SwearType,
} from '../types';

export const subscribe = (store: SwearStoreType, subscribers: SwearStoreSubscribers) => <T, Y>(swear: SwearType<T, Y>, onUpdate: SwearSubscriberOnUpdate<T>) => {
  const [swearId, defaultState] = swear;
  const id = uuid();
  if (!(store.has(swearId))) {
    store.set(swearId, defaultState);
  }
  if (subscribers.has(swearId)) {
    subscribers.get(swearId)!.set(id, onUpdate);
  } else {
    subscribers.set(swearId, new Map());
    subscribers.get(swearId)!.set(id, onUpdate);
  }

  return () => {
    if (subscribers.has(swearId)) {
      subscribers.get(swearId)!.delete(id);
    }
  };
};
