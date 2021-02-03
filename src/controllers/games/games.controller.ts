import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "interfaces/IControllerBase.interface";
import { Chess } from "chessops";
import { makeFen } from "chessops/fen";


class GamesController implements IControllerBase {
  public path = "/chessserver/games";
  public router = express.Router();
  private games: Map<number, Chess> = new Map<number, Chess>();

  

  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.get(this.path + "/:id", this.getGame);
    this.router.get(this.path, this.getAllMatches);
    this.router.post(this.path + "/:id", this.play);
  }

  getGame = (req: Request, res: Response): void => {
    const id = +req.params.id;
    console.log(req.params);

    const game = this.games.get(id);
    if (game) {
      console.log("Returning existing game.");
      res.send(makeFen(game.toSetup()));
    } else {
      console.log("Game not found. Creating new.");
      const newGame = Chess.default();
      this.games.set(id, newGame);
      res.status(200).send(makeFen(newGame.toSetup()));
    }
  };

  getAllMatches = (req: Request, res: Response): void => {
    res.send(this.games);
  };

  play = (req: Request, res: Response): void => {
    const id = +req.params.id;
    console.log(req.params);

    const move = req.body;
    const game = this.games.get(id);
    try {
      if(game.isLegal(move)) {
        console.log("seems to be a legal move");
        game.play(move);
        res.status(200).send("Ok.");
      } else {
        console.log("not a legal move..");
        res.status(400).send("Illegal move!");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  };
}

export default GamesController;
