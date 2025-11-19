import { NewSongRepository } from "../../data/repositories/newSong.repository";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";


export class NewSongService {


    public async addSong( newSongDto: NewSongFormDto){

        const song = await NewSongRepository.addSong(newSongDto);

        if(!song){
            throw new Error('Error en el repositorio, desde servicio')
        }

        return song;

    };

};