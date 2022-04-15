export type SwearMutateType<T> = T | ((prev: T) => T);

export type SwearReducerType = (payload?: any | null) => any;

export type SwearActionType<T> = (mutate: (value: SwearMutateType<T>) => void) => SwearReducerType;

export type SwearType<T> = [
  name: string,
  defaultValue: T,
  actions: Record<string, SwearActionType<T>>
];

export type SwearReturnType<T> = [value: T, actions: Record<string, unknown>];
