import { Router } from "express";
import { NewSongRoutes } from "./new-song/routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        router.use('/api', NewSongRoutes.routes)
        return router;

    };

};