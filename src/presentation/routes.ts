import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { NewSongRoutes } from "./new-song/routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        router.use('/api/auth', AuthRoutes.routes);


        router.use([AuthMiddleware.validateJWT]);
        router.use('/api', NewSongRoutes.routes);

        return router;

    };

};