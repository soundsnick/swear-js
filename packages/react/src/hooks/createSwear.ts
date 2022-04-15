import { ActionType, SwearType } from '../types';
import { SwearId } from '@swear-js/core';

export const createSwear = <T>(
  swearId: SwearId,
  defaultValue: T,
  actions: Record<
    string,
    ActionType<T>>
): SwearType<T> => {
  return [swearId, defaultValue, actions];
}

