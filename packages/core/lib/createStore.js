"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
var createStore = function (storeArgs) {
    if (storeArgs === void 0) { storeArgs = {}; }
    var store = {};
    var subscribers = {};
    return {
        getState: function () { return store; },
        subscribe: function (_a) {
            var swearId = _a.swearId, defaultState = _a.defaultState, onUpdate = _a.onUpdate;
            store[swearId] = defaultState;
            subscribers[swearId] = onUpdate;
        },
        unsubscribe: function (swearId) {
            delete subscribers[swearId];
        },
        getSwearValue: function (swearId) { return store[swearId]; },
        setSwearValue: function (swearId, actionType, payload) {
            if (store[swearId] !== payload) {
                var prev = __assign({}, store);
                store[swearId] = payload;
                if (subscribers[swearId]) {
                    subscribers[swearId](payload);
                }
                if (storeArgs === null || storeArgs === void 0 ? void 0 : storeArgs.onPatch) {
                    storeArgs.onPatch({
                        swearId: swearId,
                        actionType: actionType,
                        prev: prev,
                        payload: payload,
                        next: store,
                    });
                }
            }
        },
    };
};
exports.createStore = createStore;
//# sourceMappingURL=createStore.js.map