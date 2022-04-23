import React, { useEffect } from 'react';
import { SwearMutateType, SwearReturnType, SwearType } from './types';
import { swearContext } from './swearContext';
import { defaultActions } from './defaultActions';

export const useSwear = <T, Y>([swearId, defaultState, actions]: SwearType<T, Y>): SwearReturnType<T, Y> => {
  const store = React.useContext(swearContext);

  const [swearValue, setSwearValue] = React.useState<T>(store.getSwearValue(swearId) ?? defaultState);

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

  const mutator: SwearMutateType<T> = (payload, tag?) => store?.setSwearValue(swearId, tag ?? null, payload instanceof Function ? payload(store?.getSwearValue(swearId)) : payload);
  return [swearValue, { ...defaultActions(defaultState, swearValue)(mutator), ...actions(mutator) }];
};
