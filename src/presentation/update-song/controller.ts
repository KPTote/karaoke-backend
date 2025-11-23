import { Request, Response } from "express";
import { CustomError } from "../../data/errors/custom.error";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";
import { UpdateSongService } from '../services/update-song.service';



export class UpdateSongController {

    constructor(
        private readonly updateSongService = new UpdateSongService()
    ) { }


    public updateSong = (req: Request, res: Response) => {

        const [error, newSongDto] = NewSongFormDto.addSong(req.body);

        if (error) return res.status(400).json({ error });



        this.updateSongService.update(newSongDto!)
            .then((song) => res.json(song))
            .catch(error => this.handlerError(error, res));

    };


    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        };

        return res.status(500).json({ error: 'Internal server error' })

    };

};