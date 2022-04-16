"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
var set = function (mutate) { return function (payload) {
    mutate(payload);
}; };
exports.set = set;
//# sourceMappingURL=set.js.map