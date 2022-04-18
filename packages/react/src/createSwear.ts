import { SwearId } from '@swear-js/core';
import { SwearMutateType, SwearType } from './types';

export const createSwear = <T, Y>(
  swearId: SwearId,
  defaultValue: T,
  actions: (mutate: SwearMutateType<T>) => Y,
): SwearType<T, Y> => [swearId, defaultValue, actions];
