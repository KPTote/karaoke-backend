import { Request, Response } from "express";
import { CustomError } from "../../data/errors/custom.error";
import { ClearPlaylistService } from "../services/clear-playlist.service";


export class ClearPlaylistController {

    constructor(
        private readonly clearPlaylistService = new ClearPlaylistService()
    ) { }

    public clear = (req: Request, res: Response) => {

        this.clearPlaylistService.clear()


        this.clearPlaylistService.clear()
            .then((e) => res.json(e))
            .catch(error => this.handlerError(error, res))


    };


    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        };

        return res.status(500).json({ error: 'Internal server error' })

    };


};