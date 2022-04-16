"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
var reset = function (defaultState) { return function (mutate) { return function () {
    mutate(defaultState);
}; }; };
exports.reset = reset;
//# sourceMappingURL=reset.js.map