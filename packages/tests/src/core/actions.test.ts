import {createStore} from "@swear-js/core";
import {countSwear} from "../swears/countSwear";

test('Explicit swear action', () => {
    const store = createStore();
    store.subscribe(countSwear, () => void 0);

    const { increase } = store.getSwearActions(countSwear);
    increase();
    expect(store.getSwearState(countSwear)).toBe(1);

    increase(10)
    expect(store.getSwearState(countSwear)).toBe(11);
});
