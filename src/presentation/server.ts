import express, { Router } from 'express';

export class Server {

    public app = express();
    private readonly port: number;

    constructor(port: number) {
        this.port = port;
        this.configure();
    };

    private configure() {
        //CORS
        const cors = require('cors');
        this.app.use(cors());

        //Middlewares
        this.app.use(express.json());
    }

    public setRoutes(routes: Router) {
        this.app.use(routes);
    }


};
