import React from 'react';
import { SwearReducerType, SwearType } from './types';
export declare const swearContext: React.Context<import("@swear-js/core").SwearStoreReturnType>;
export declare const useSwear: <T>([swearId, defaultState, actions]: SwearType<T>) => [T, Record<string, SwearReducerType>];
