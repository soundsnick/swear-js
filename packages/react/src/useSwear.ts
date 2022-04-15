import React from 'react';
import { createStore } from '@swear-js/core';
import { SwearReducerType, SwearType } from './types';

export const swearContext = React.createContext(createStore());

export const useSwear = <T>([swearId, defaultState, actions]: SwearType<T>): [T, Record<string, SwearReducerType>] => {
  const store = React.useContext(swearContext);

  const [swearValue, setSwearValue] = React.useState<T>(defaultState);

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
    [actionType]: reducer((payload) => (store?.setSwearValue<T>(swearId, actionType, <T>payload))),
  }), {});

  return [swearValue, actionsWrapped];
};
