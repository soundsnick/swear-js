import { createSwear } from '@swear-js/core';

const defaultState = 0;

export const countProSwear = createSwear('counterPro', defaultState, () => ({}));
