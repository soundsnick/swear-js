export type MutateType<T> = T | ((prev: T) => T);
