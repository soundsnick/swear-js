export declare type SwearStoreType<T> = Record<string, T>;
export declare type SwearId = string;
export declare type SwearPatch = {
    swearId: SwearId;
    actionType: string;
    prev: any;
    payload: any;
    next: any;
};
export declare type SwearCreateStoreArgs = {
    onPatch?: (patch: SwearPatch) => void;
};
export declare type SwearSubscriberOnUpdate<T> = (newValue: T) => void;
export declare type SwearStoreSubscribers = Record<SwearId, SwearSubscriberOnUpdate<any>>;
export declare type SwearRegisterSubscribeArgs<T> = {
    swearId: SwearId;
    defaultState: T;
    onUpdate: SwearSubscriberOnUpdate<T>;
};
export declare type SwearStoreReturnType = {
    getState: () => SwearStoreType<any>;
    getSwearValue: <T>(swearId: string) => T;
    setSwearValue: <T>(swearId: string, actionType: string, payload: T) => void;
    subscribe: <T>(swear: SwearRegisterSubscribeArgs<T>) => void;
    unsubscribe: (swearId: SwearId) => void;
};
