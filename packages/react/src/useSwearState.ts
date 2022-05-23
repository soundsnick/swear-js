import React, { useContext, useEffect, useState } from 'react';
import { createSwear, SwearId } from '@swear-js/core';
import { swearContext } from './swearContext';
import { SwearStateReturnType } from './types';

export const useSwearState = <T>(swearId: SwearId, defaultState: T): SwearStateReturnType<T> => {
  const store = useContext(swearContext);
  const swear = createSwear(swearId, defaultState, () => {});
  const [swearValue, setSwearValue] = useState<T>(store?.getSwearState(swear) ?? defaultState);

  useEffect(() => {
    store?.subscribe(swear, (newValue: React.SetStateAction<T>) => {
      setSwearValue(newValue);
    });

    return () => store?.unsubscribe(swear);
  }, []);

  return [swearValue, store?.getSwearActions(swear)];
};
