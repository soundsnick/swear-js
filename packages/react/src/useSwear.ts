import React from 'react';
import { createStore } from '@swear-js/core';
import { SwearMutateType, SwearReturnType, SwearType } from './types';

export const swearContext = React.createContext(createStore());

export const useSwear = <T, Y>([swearId, defaultState, actions]: SwearType<T, Y>): SwearReturnType<T, Y> => {
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

  const defaultActions = (mutate: SwearMutateType<T>) => ({
    set: (payload: T) => (mutate(payload)),
    reset: () => mutate(defaultState),
  });
  const mutator = (payload: T) => (store?.setSwearValue(swearId, 'someAction', payload));
  return [swearValue, { ...defaultActions(mutator), ...actions(mutator) }];
};
