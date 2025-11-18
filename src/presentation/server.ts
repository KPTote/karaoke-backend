import express, { Router } from 'express';

export class Server{

    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(port: number, routes: Router){
        this.port = port;
        this.routes = routes;
    };

    async start(){

        //Middlewares
        this.app.use(express.json());


        //Routes
        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
        console.log('server is running');
    };
};
