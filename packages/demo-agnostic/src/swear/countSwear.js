import {createSwear} from "@swear-js/core";

const defaultState = 0;

export const countSwear = createSwear('count', defaultState, (mutate) => ({
    increase: () => mutate((prev) => prev + 1, 'increase'),
    decrease: () => mutate((prev) => prev - 1),
}));
