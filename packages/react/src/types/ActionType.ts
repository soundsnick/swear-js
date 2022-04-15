import { ReducerType } from './ReducerType';
import { MutateType } from './MutateType';

export type ActionType<T> = (mutate: (value: MutateType<T>) => void) => ReducerType;
