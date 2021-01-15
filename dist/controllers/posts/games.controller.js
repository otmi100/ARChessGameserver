"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const chessops_1 = require("chessops");
class GamesController {
    constructor() {
        this.path = "/games";
        this.router = express.Router();
        this.games = new Map();
        this.getGame = (req, res) => {
            const id = +req.params.id;
            const color = req.params.color;
            console.log(req.params);
            let game = this.games.get(id);
            if (game) {
                console.log("Returning existing game.");
                res.send(game);
            }
            else {
                console.log("Game not found. Creating new.");
                const newGame = chessops_1.Chess.default();
                this.games.set(id, newGame);
                res.status(200).send(newGame);
            }
        };
        this.getAllMatches = (req, res) => {
            res.send(this.games);
        };
        this.play = (req, res) => {
            const id = +req.params.id;
            const move = req.body;
            let game = this.games.get(id);
            try {
                game.play(move);
            }
            catch (e) {
                res.status(400).send(e);
            }
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(this.path + "/:id", this.getGame);
        this.router.get(this.path, this.getAllMatches);
        this.router.post(this.path + "/:id", this.play);
    }
}
exports.default = GamesController;
//# sourceMappingURL=games.controller.js.map