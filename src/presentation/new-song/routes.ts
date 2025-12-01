import { Router } from "express";
import { ClearPlaylistController } from "../clear-playlist/controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UpdateSongController } from "../update-song/controller";
import { NewSongController } from "./controller";

export class NewSongRoutes {

    static get routes(): Router {

        const router = Router();

        const newSongController = new NewSongController();
        const updateSongController = new UpdateSongController();
        const clearPlaylistController = new ClearPlaylistController();

        router.post('/add-song', newSongController.addSong)
        router.get('/get-song-count', newSongController.getSongCount)

        router.use([AuthMiddleware.validateJWT]);
        router.get('/playlist', newSongController.getAllSongs)
        router.put('/edit-song', updateSongController.updateSong)
        router.delete('/clear-playlist', clearPlaylistController.clear )
        return router;

    };

};