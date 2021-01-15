import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "interfaces/IControllerBase.interface";
import { Chess, Move } from "chessops";

class GamesController implements IControllerBase {
  public path = "/games";
  public router = express.Router();
  private games: Map<number, Chess> = new Map<number, Chess>();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path + "/:id", this.getGame);
    this.router.get(this.path, this.getAllMatches);
    this.router.post(this.path + "/:id", this.play)
  }

  getGame = (req: Request, res: Response) => {
    const id = +req.params.id;
    const color = req.params.color;
    console.log(req.params);

    let game = this.games.get(id);
    if (game) {
      console.log("Returning existing game.")
      res.send(game);
    } else {
      console.log("Game not found. Creating new.")
      const newGame = Chess.default();
      this.games.set(id, newGame);
      res.status(200).send(newGame);
    }
  };

  getAllMatches = (req: Request, res: Response) => {
    res.send(this.games);
  };

  play = (req: Request, res: Response) => {
    const id = +req.params.id;
    const move: Move = req.body

    let game = this.games.get(id);
    try {
      game.play(move);
    } catch (e) {
      res.status(400).send(e);
    }
}
}

export default GamesController;
