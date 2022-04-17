import React from 'react';
import { createStore } from '@swear-js/core';
import { SwearType } from './types';
import { reset, set } from './default-actions';

export const swearContext = React.createContext(createStore());

export const useSwear = <T>([swearId, defaultState, actions]: SwearType<T>) => {
  const store = React.useContext(swearContext);

  const [swearValue, setSwearValue] = React.useState<T>(store.getSwearValue(swearId) ?? defaultState);

  React.useEffect(() => {
    store?.subscribe<T>({
      swearId,
      defaultState,
      onUpdate: (newValue: React.SetStateAction<T>) => {
        setSwearValue(newValue);
      },
    });

    return () => store?.unsubscribe(swearId);
  }, []);

  const actionsWrapped = Object.entries(actions).reduce((acc, [actionType, reducer]) => ({
    ...acc,
    [actionType]: reducer((payload) => (store?.setSwearValue(swearId, actionType, payload))),
  }), {
    set: set((payload: T) => (store?.setSwearValue<T>(swearId, 'set', <T>payload))),
    reset: reset(defaultState)(() => (store?.setSwearValue<T>(swearId, 'reset', defaultState))),
    _tag: 'actions',
  });

  return [swearValue, actionsWrapped] as const;
};
