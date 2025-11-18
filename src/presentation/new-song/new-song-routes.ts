import { Router } from "express";
import { NewSongService } from "../services/new-song.service";
import { NewSongController } from "./controller";

export class NewSongRoutes {

    static get routes(): Router {

        const router = Router();

        const newSongService = new NewSongService();
        const newSongController = new NewSongController(newSongService);
        router.post('/add-song', newSongController.addSong)

        return router;

    };

};