import { createStore } from "@swear-js/core";
import { swearLogger } from "@swear-js/logger";
import { countSwear } from "./swear/countSwear";

const store = createStore({ onPatch: swearLogger() });

const render = () => {
    const counter = document.getElementById('counter');
    const counterComputed = document.getElementById('counter-computed');
    console.log('sdksldk')
    counter.innerHTML = String(store.getSwearState(countSwear));
    counterComputed.innerHTML = String(store.createSwearGetter(countSwear, (state) => state * 5));
};

// IIFE
(() => {
    store.subscribe(countSwear, () => {
        render();
    });
    const { increase, decrease } = store.getSwearActions(countSwear);

    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    decreaseButton.addEventListener('click', decrease);
    increaseButton.addEventListener('click', increase);

    render();
})()
