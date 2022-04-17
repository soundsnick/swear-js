export type SwearMutateType<T> = ((payload: T) => void) | (() => void);

export type SwearReducerType<T> = ((payload: T) => void) | (() => void);

export type SwearActionType<T> = (mutate: (value: SwearMutateType<T>) => void) => SwearReducerType<T>;

export type SwearType<T> = [
  name: string,
  defaultValue: T,
  actions: Record<string, SwearActionType<T>>
];

export type SwearReturnType<T, Y> = [value: T, actions: Record<string, Y>];
