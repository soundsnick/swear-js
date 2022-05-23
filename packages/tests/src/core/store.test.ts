import {createStore} from "@swear-js/core";
import {countSwear, defaultValue} from "../swears/countSwear";

test('Check if store is empty on init', () => {
    const store = createStore();
    expect(store.getStore()).toStrictEqual({});
});

test('Check default value after init', () => {
    const store = createStore();
    // Register swear
    store.subscribe(countSwear, () => void 0);

    expect(store.getSwearState(countSwear)).toBe(defaultValue);
});

test('Check get actions', () => {
    const store = createStore();
    // Register swear
    store.subscribe(countSwear, () => void 0);
    const boundActions = store.getSwearActions(countSwear);
    const [,, swearActions] = countSwear;
    const actions = swearActions(() => void 0);

    expect(Object.keys(boundActions).length).toBe(Object.keys({ set: () => void 0, reset: () => void 0, ...actions }).length);
});
