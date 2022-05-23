import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";
import { countSwear } from "./swear/countSwear";

const store = createStore({ onPatch: swearLogger() });

const render = ({ count }) => {
    const counter = document.getElementById('counter');
    counter.innerHTML = String(count);
};

// IIFE
(() => {
    store.subscribe(countSwear, (newValue) => {
        render({ count: newValue });
    });

    const { increase, decrease } = store.getSwearActions(countSwear);

    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    decreaseButton.addEventListener('click', decrease);
    increaseButton.addEventListener('click', increase);

    render({ count: store.getSwearState(countSwear) });
})()
