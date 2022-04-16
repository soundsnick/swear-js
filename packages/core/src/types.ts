export type SwearStoreType<T> = Record<string, T>;

export type SwearId = string;

export type SwearPatch = {
  swearId: SwearId;
  actionType: string;
  prev: any;
  payload: any;
  next: any;
};

export type SwearCreateStoreArgs = {
  onPatch?: (patch: SwearPatch) => void;
};

export type SwearSubscriberOnUpdate<T> = (newValue: T) => void;

export type SwearStoreSubscribers = Record<SwearId, SwearSubscriberOnUpdate<any>>;

export type SwearRegisterSubscribeArgs<T> = {
  swearId: SwearId;
  defaultState: T;
  onUpdate: SwearSubscriberOnUpdate<T>;
};

export type SwearStoreReturnType = {
  getState: () => SwearStoreType<any>;
  getSwearValue: <T>(swearId: string) => T;
  setSwearValue: <T>(swearId: string, actionType: string, payload: T) => void;
  subscribe: <T>(swear: SwearRegisterSubscribeArgs<T>) => void;
  unsubscribe: (swearId: SwearId) => void;
};
