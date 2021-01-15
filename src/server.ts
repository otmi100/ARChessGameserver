import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import GamesController from './controllers/games/games.controller'
import HomeController from './controllers/home/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new GamesController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()