import { Router } from "express";
import { NewSongController } from "./controller";

export class NewSongRoutes {

    static get routes(): Router {

        const router = Router();

        const newSongController = new NewSongController();

        router.post('/add-song', newSongController.addSong)
        router.get('/get-song-count', newSongController.getSongCount)
        router.get('/playlist', newSongController.getAllSongs)

        return router;

    };

};