import { SwearId } from '@swear-js/core';
import { SwearActionType, SwearType } from './types';

export const createSwear = <T>(
  swearId: SwearId,
  defaultValue: T,
  actions: Record<
    string,
    SwearActionType<T>>,
): SwearType<T> => [swearId, defaultValue, actions];