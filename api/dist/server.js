"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
// IMPORT ROUTES
const mailer_routes_1 = __importDefault(require("./mailer.routes"));
class Server {
    constructor() {
        /* Inicializaciones esenciales como conexiones con la DB,
        rutas, config de middleware que se pueden hacer en metodos aparte (por prolijidad)*/
        this.app = express_1.default();
        this.app.set('port', process.env.PORT || 3000);
        this.config();
        this.routes();
    }
    config() {
        /* middleware y dependencias importantes para nuestra app */
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({
            extended: false,
        }));
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    }
    routes() {
        /* las rutas de la app */
        this.app.use('', mailer_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => { });
    }
}
// CREAMOS UN NUEVO OBJETO DE LA CLASE SERVER Y LO STARTEAMOS
const server = new Server();
server.start();
