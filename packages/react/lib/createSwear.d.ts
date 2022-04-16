import { SwearId } from '@swear-js/core';
import { SwearActionType, SwearType } from './types';
export declare const createSwear: <T>(swearId: SwearId, defaultValue: T, actions: Record<string, SwearActionType<T>>) => SwearType<T>;
