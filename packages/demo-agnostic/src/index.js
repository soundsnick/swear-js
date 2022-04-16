import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";

const store = createStore({ onPatch: swearLogger });

const render = ({ count }) => {
    const counter = document.getElementById('counter');
    counter.innerHTML = String(count);
};

(() => {
    store.subscribe({
        swearId: 'count',
        defaultState: 0,
        onUpdate: (newValue) => {
            render({ count: newValue });
        }
    });

    const decreaseHandler = () => {
        store.setSwearValue('count', 'decrease', store.getSwearValue('count') - 1);
    };
    const increaseHandler = () => {
        store.setSwearValue('count', 'increase', store.getSwearValue('count') + 1);
    };

    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    decreaseButton.addEventListener('click', decreaseHandler);
    increaseButton.addEventListener('click', increaseHandler);

    render({ count: store.getSwearValue('count') });
})()