"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const logger_1 = require("./middleware/logger");
const games_controller_1 = require("./controllers/posts/games.controller");
const home_controller_1 = require("./controllers/home/home.controller");
const app = new app_1.default({
    port: 5000,
    controllers: [
        new home_controller_1.default(),
        new games_controller_1.default()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1.default
    ]
});
app.listen();
// http://rousseau-alexandre.fr/en/programming/2019/06/19/express-typescript.html
// https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
// https://www.tutorialsteacher.com/typescript
//# sourceMappingURL=server.js.map