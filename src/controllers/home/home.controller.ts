import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'


class HomeController implements IControllerBase {
    public path = '/'
    public router = express.Router()
    
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/chessserver', this.index)
    }

    index = (req: Request, res: Response) => {
        res.send("Welcome.")
    }
}

export default HomeController