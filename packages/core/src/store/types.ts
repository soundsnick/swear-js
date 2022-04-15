export type StoreType<T> = Record<string, T>;

export type SwearId = string;

export type Patch = {
  prev: any;
  payload: any;
  next: any;
};

export type CreateStoreArgs = {
  onPatch?: (patch: Patch) => void;
};

export type SubscriberOnUpdate<T> = (newValue: T) => void;

export type StoreSubscribers = Record<SwearId, SubscriberOnUpdate<any>>;

export type RegisterSubscribeArgs<T> = {
  swearId: SwearId;
  defaultState: T;
  onUpdate: SubscriberOnUpdate<T>;
};

export type StoreReturnType = {
  getState: () => StoreType<any>;
  getSwearValue: <T>(key: string) => T;
  setSwearValue: <T>(key: string, payload: T) => void;
  subscribe: <T>(swear: RegisterSubscribeArgs<T>) => void;
  unsubscribe: (swearId: SwearId) => void;
};
