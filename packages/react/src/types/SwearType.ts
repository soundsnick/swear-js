import { ActionType } from './ActionType';

export type SwearType<T> = [
  name: string,
  defaultValue: T,
  actions: Record<string, ActionType<T>>
];

export type SwearReturnType<T> = [value: T, actions: Record<string, unknown>];
