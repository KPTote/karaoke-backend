import { Request, Response } from "express";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";
import { NewSongService } from "../services/new-song.service";
import { WssService } from "../services/wss.service";

export class NewSongController {

    constructor(
        private readonly newSongService = new NewSongService(),
        private readonly wssService = WssService.instance
    ){}

    public addSong = (req: Request, res: Response) => {
        console.log('object');

        const [error, newSongDto] = NewSongFormDto.addSong(req.body);

        if( error ) return res.status(400).json({error});

        this.wssService.sendMessage('hola', newSongDto!)

        this.newSongService.addSong(newSongDto!)
        .then((user) => res.json(user))

    };

    public lastNumber = async (req: Request, res: Response) => {

        res.json('50')

    }


};

