import React, { useEffect } from 'react';
import { SwearType } from '@swear-js/core';
import { swearContext } from './swearContext';
import { SwearReturnType } from './types';

export const useSwear = <T, Y>(swear: SwearType<T, Y>): SwearReturnType<T, Y> => {
  const store = React.useContext(swearContext);
  const [, defaultState] = swear;

  const [swearValue, setSwearValue] = React.useState<T>(store?.getSwearState(swear) ?? defaultState);

  useEffect(() => {
    store?.subscribe(swear, (newValue: T) => {
      setSwearValue(newValue);
    });

    return () => store?.unsubscribe<T, Y>(swear);
  }, []);

  return [swearValue, store?.getSwearActions(swear)];
};
