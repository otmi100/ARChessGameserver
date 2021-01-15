"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class HomeController {
    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.index = (req, res) => {
            res.send("Welcome.");
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.index);
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map