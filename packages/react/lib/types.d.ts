export declare type SwearMutateType<T> = T | ((prev: T) => T);
export declare type SwearReducerType = (payload?: any | null) => any;
export declare type SwearActionType<T> = (mutate: (value: SwearMutateType<T>) => void) => SwearReducerType;
export declare type SwearType<T> = [
    name: string,
    defaultValue: T,
    actions: Record<string, SwearActionType<T>>
];
export declare type SwearReturnType<T> = [value: T, actions: Record<string, unknown>];
