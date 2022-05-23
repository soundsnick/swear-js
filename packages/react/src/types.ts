export type SwearDefaultActions<T> = {
  set: (payload: T | ((prev: T) => T)) => void;
  reset: () => void;
};

export type SwearReturnType<T, Y> = [state: T, actions: SwearDefaultActions<T> & Y];

export type SwearStateReturnType<T> = [state: T, actions: SwearDefaultActions<T>];
