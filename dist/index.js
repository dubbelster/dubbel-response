"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dubbelRes(res, statusCode, message) {
    res.status(statusCode);
    res.send({
        stats: statusCode,
        message: message
    });
}
exports.default = dubbelRes;
