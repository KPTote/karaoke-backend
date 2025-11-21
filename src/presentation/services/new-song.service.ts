import { CustomError } from "../../data/errors/custom.error";
import { NewSongRepository } from "../../data/repositories/newSong.repository";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";


export class NewSongService {


    public async addSong(newSongDto: NewSongFormDto) {

        const song = await NewSongRepository.addSong(newSongDto, this.getDateTime());

        if (!song) {
            throw new Error('Error en el repositorio, desde servicio')
        }

        return song;

    };

    public async getTotalSongsOnList() {
        try {

            const songList = await NewSongRepository.getAll();

            return songList.length

        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        };
    }

    public async getAll() {
        try {

            return await NewSongRepository.getAll();

        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        };
    }

    private getDateTime(): string {
        const date = new Date();
        return date.toISOString();
    };

};