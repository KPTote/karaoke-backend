import { Request, Response } from "express";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";
import { NewSongService } from "../services/new-song.service";

export class NewSongController {

    constructor(
        private readonly newSongService: NewSongService
    ){}

    public addSong = (req: Request, res: Response) => {

        const [error, newSongDto] = NewSongFormDto.addSong(req.body);

        if( error ) return res.status(400).json({error});

        this.newSongService.addSong(newSongDto!)
        .then((user) => res.json(user))

    };


};

