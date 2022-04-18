export type SwearMutateType<T> = ((payload: T) => void) | (() => void);

export type SwearType<T, Y> = [
  name: string,
  defaultValue: T,
  actions: ((mutate: SwearMutateType<T>) => Y)
];

export type SwearDefaultActions<T> = {
  set: (payload: T) => void;
  reset: () => void;
};

export type SwearReturnType<T, Y> = [state: T, actions: {
  set: (payload: T) => void;
  reset: () => void;
} & Y];
