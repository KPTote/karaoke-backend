import { Router } from "express";
import { UpdateSongController } from "../update-song/controller";
import { NewSongController } from "./controller";

export class NewSongRoutes {

    static get routes(): Router {

        const router = Router();

        const newSongController = new NewSongController();
        const updateSongController = new UpdateSongController();

        router.post('/add-song', newSongController.addSong)
        router.get('/get-song-count', newSongController.getSongCount)
        router.get('/playlist', newSongController.getAllSongs)
        router.put('/edit-song', updateSongController.updateSong)

        return router;

    };

};