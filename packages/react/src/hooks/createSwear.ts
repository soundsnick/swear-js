import { SwearId } from '@swear-js/core';
import { ActionType, SwearType } from '../types';

export const createSwear = <T>(
  swearId: SwearId,
  defaultValue: T,
  actions: Record<
    string,
    ActionType<T>>,
): SwearType<T> => [swearId, defaultValue, actions];
