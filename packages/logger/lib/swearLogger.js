"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swearLogger = void 0;
var swearLogger = function (_a) {
    var swearId = _a.swearId, actionType = _a.actionType, prev = _a.prev, payload = _a.payload, next = _a.next;
    var now = new Date(Date.now());
    console.group("\uD83E\uDD6A\uD83E\uDDC0 \u001B[33m".concat(swearId, ".").concat(actionType), '-', "".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds()));
    console.log('\x1B[34mprev:', prev);
    console.log('\u001b[1;35mpayload:', payload);
    console.log('\x1B[32mnext:', next);
    console.groupEnd();
};
exports.swearLogger = swearLogger;
//# sourceMappingURL=swearLogger.js.map