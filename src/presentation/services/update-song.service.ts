import { CustomError } from "../../data/errors/custom.error";
import { UpdateSongRepository } from "../../data/repositories/update-song.repository";
import { NewSongFormDto } from "../../domain/dtos/new-song/new-song-form-dto";

export class UpdateSongService {

    public async update(newSongDto: NewSongFormDto) {

        try {

            const verifySong = await UpdateSongRepository.getIdSong(newSongDto);


            if (!verifySong) {
                throw CustomError.notFound(`Canción no encontrada`);
            }

            const updateSong = await UpdateSongRepository.update(newSongDto, verifySong.id);

            return {
                message: 'Canción actualizada',
                updateSong
            };
        } catch (error) {
            throw CustomError.badRequest(`${error}`)
        }

    };


};