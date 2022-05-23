import {createStore} from "@swear-js/core";
import {countSwear, defaultValue} from "../swears/countSwear";

describe('Default actions', () => {
    test('Set', () => {
        expect.assertions(2);

        const store = createStore();
        const { set } = store.getSwearActions(countSwear);

        // Register swear
        store.subscribe(countSwear, () => void 0);

        expect(store.getSwearState(countSwear)).toBe(defaultValue);

        set(10);

        expect(store.getSwearState(countSwear)).toBe(10);
    });

    test('Set with previous value', () => {
        expect.assertions(2);

        const store = createStore();
        const { set } = store.getSwearActions(countSwear);

        // Register swear
        store.subscribe(countSwear, () => void 0);

        expect(store.getSwearState(countSwear)).toBe(defaultValue);

        set((prev) => prev + 5);

        expect(store.getSwearState(countSwear)).toBe(5);
    });

    test('Reset', () => {
        expect.assertions(3);

        const store = createStore();
        const { set, reset } = store.getSwearActions(countSwear);

        // Register swear
        store.subscribe(countSwear, () => void 0);
        expect(store.getSwearState(countSwear)).toBe(defaultValue);

        set(10);
        expect(store.getSwearState(countSwear)).toBe(10);

        reset();
        expect(store.getSwearState(countSwear)).toBe(defaultValue);
    });
})
