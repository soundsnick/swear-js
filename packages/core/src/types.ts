export type SwearStoreType = Map<string, any>;

export type SwearId = string;

export type SwearPatch = {
  swearId: SwearId;
  tag: string | null;
  prev: any;
  payload: any;
  next: any;
};

export type SwearCreateStoreArgs = {
  onPatch?: (patch: SwearPatch) => void;
};

export type SwearSubscriberOnUpdate<T> = (newValue: T) => void;

export type SwearStoreSubscribers = Map<SwearId, Map<string, SwearSubscriberOnUpdate<any>>>;

export type SwearMutateType<T> = ((payload: T | ((prev: T) => T), tag?: string) => void) | (() => void);

export type SwearType<T, Y> = [
  name: string,
  defaultValue: T,
  actions: ((mutate: SwearMutateType<T>) => Y)
];
