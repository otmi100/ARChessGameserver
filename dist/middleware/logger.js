"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, resp, next) => {
    console.log('Request logged:', req.method, req.path);
    resp.setHeader('Access-Control-Allow-Origin', 'https://localhost:8080');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map