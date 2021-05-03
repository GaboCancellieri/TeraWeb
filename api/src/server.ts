import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// IMPORT ROUTES
import MailerRoutes from './mailer.routes';

class Server {
    public app: express.Application;
  
    constructor() {
        /* Inicializaciones esenciales como conexiones con la DB, 
        rutas, config de middleware que se pueden hacer en metodos aparte (por prolijidad)*/
        this.app = express();
        this.app.set('port', process.env.PORT || 3000);
        this.config();
        this.routes();
    }
  
    config() {
        /* middleware y dependencias importantes para nuestra app */
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(
        express.urlencoded({
            extended: false,
        })
        );
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }
  
    routes(){
        /* las rutas de la app */
        this.app.use('', MailerRoutes);
    }
  
    start() {
      this.app.listen(this.app.get('port'), () => {});
    }
  }
  
  // CREAMOS UN NUEVO OBJETO DE LA CLASE SERVER Y LO STARTEAMOS
  const server = new Server();
  server.start();