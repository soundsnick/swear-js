import React, { useEffect, useMemo } from 'react';
import { SwearType } from '@swear-js/core';
import { swearContext } from './swearContext';

export const useSwearGetter = <T, Y, S>(swear: SwearType<T, Y>, cb: (state: T) => S): S => {
  const store = React.useContext(swearContext);
  const [, defaultState] = swear;

  const [swearValue, setSwearValue] = React.useState<T>(store?.getSwearState(swear) ?? defaultState);

  useEffect(() => store?.subscribe(swear, (newValue: T) => {
    setSwearValue(newValue);
  }), []);

  return useMemo(() => cb(swearValue), [swearValue]);
};
