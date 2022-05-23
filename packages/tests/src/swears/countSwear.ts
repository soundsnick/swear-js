import {createSwear} from "@swear-js/core";

export const defaultValue = 0;

export const countSwear = createSwear('count', defaultValue, (mutate) => ({
    increase: (payload?: number) => mutate(prev => prev + (payload ?? 1))
}));
