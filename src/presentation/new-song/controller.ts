import { Request, Response } from "express";
import { CustomError } from "../../data/errors/custom.error";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";
import { NewSongService } from "../services/new-song.service";
import { WssService } from "../services/wss.service";

export class NewSongController {

    constructor(
        private readonly newSongService = new NewSongService(),
        private readonly wssService = WssService.instance
    ) { }

    public addSong = (req: Request, res: Response) => {

        const [error, newSongDto] = NewSongFormDto.addSong(req.body);

        if (error) return res.status(400).json({ error });


        this.wssService.sendMessage('messageWSocket', newSongDto!)

        this.newSongService.addSong(newSongDto!)
            .then((song) => res.json(song))
            .catch(error => this.handlerError(error, res));


    };

    public getSongCount = (req: Request, res: Response) => {


        this.newSongService.getTotalSongsOnList()
            .then(songs => res.json(songs))
            .catch(error => this.handlerError(error, res));


    };

    public getAllSongs = (req: Request, res: Response) => {


        this.newSongService.getAll()
            .then(songs => {
                res.json(songs)
            })
            .catch(error => this.handlerError(error, res));


    };



    private handlerError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        };

        return res.status(500).json({ error: 'Internal server error' })

    };

};

