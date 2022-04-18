import React, { useContext, useEffect, useState } from 'react';
import { SwearId } from '@swear-js/core';
import { swearContext } from './swearContext';
import { SwearMutateType, SwearStateReturnType } from './types';
import { defaultActions } from './defaultActions';

export const useSwearState = <T>(swearId: SwearId, defaultState: T): SwearStateReturnType<T> => {
  const store = useContext(swearContext);
  const [swearValue, setSwearValue] = useState<T>(store.getSwearValue(swearId) ?? defaultState);

  useEffect(() => {
    store?.subscribe<T>({
      swearId,
      defaultState,
      onUpdate: (newValue: React.SetStateAction<T>) => {
        setSwearValue(newValue);
      },
    });

    return () => store?.unsubscribe(swearId);
  }, []);

  const mutator: SwearMutateType<T> = (payload, tag?) => store?.setSwearValue(swearId, tag ?? null, payload instanceof Function ? payload(swearValue) : payload);
  return [swearValue, { ...defaultActions(defaultState, swearValue)(mutator) }];
};
