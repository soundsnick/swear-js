"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swearLogger = void 0;
var swearLogger = function (logger) {
    if (logger === void 0) { logger = console; }
    return function (_a) {
        var swearId = _a.swearId, actionType = _a.actionType, prev = _a.prev, payload = _a.payload, next = _a.next;
        var now = new Date(Date.now());
        logger.group("\uD83E\uDD6A\uD83E\uDDC0 \u001B[33m".concat(swearId, ".").concat(actionType), '-', "".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds()));
        logger.log('\x1B[34mprev:', prev);
        logger.log('\u001b[1;35mpayload:', payload);
        logger.log('\x1B[32mnext:', next);
        logger.groupEnd();
    };
};
exports.swearLogger = swearLogger;
//# sourceMappingURL=swearLogger.js.map