import { Router } from "express";
import { NewSongController } from "./controller";

export class NewSongRoutes {

    static get routes(): Router {

        const router = Router();

        const newSongController = new NewSongController();

        router.post('/add-song', newSongController.addSong)
        router.get('/last', newSongController.lastNumber)

        return router;

    };

};