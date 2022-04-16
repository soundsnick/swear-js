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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwear = exports.swearContext = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@swear-js/core");
var default_actions_1 = require("./default-actions");
exports.swearContext = react_1.default.createContext((0, core_1.createStore)());
var useSwear = function (_a) {
    var swearId = _a[0], defaultState = _a[1], actions = _a[2];
    var store = react_1.default.useContext(exports.swearContext);
    var _b = react_1.default.useState(defaultState), swearValue = _b[0], setSwearValue = _b[1];
    react_1.default.useEffect(function () {
        store === null || store === void 0 ? void 0 : store.subscribe({
            swearId: swearId,
            defaultState: defaultState,
            onUpdate: function (newValue) {
                setSwearValue(newValue);
            },
        });
        return function () { return store === null || store === void 0 ? void 0 : store.unsubscribe(swearId); };
    }, []);
    var actionsWrapped = Object.entries(actions).reduce(function (acc, _a) {
        var _b;
        var actionType = _a[0], reducer = _a[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[actionType] = reducer(function (payload) { return (store === null || store === void 0 ? void 0 : store.setSwearValue(swearId, actionType, payload)); }), _b)));
    }, {
        set: (0, default_actions_1.set)(function (payload) { return (store === null || store === void 0 ? void 0 : store.setSwearValue(swearId, 'set', payload)); }),
        reset: (0, default_actions_1.reset)(defaultState)(function (payload) { return (store === null || store === void 0 ? void 0 : store.setSwearValue(swearId, 'reset', payload)); }),
    });
    return [swearValue, actionsWrapped];
};
exports.useSwear = useSwear;
//# sourceMappingURL=useSwear.js.map