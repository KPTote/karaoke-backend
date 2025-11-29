import { CustomError } from "../../data/errors/custom.error";
import { ClearPlaylistRepository } from "../../data/repositories/clear-playlist.repository";



export class ClearPlaylistService {

    public async clear(){

        try {
            const songs = await ClearPlaylistRepository.getAllWithID()
            console.log(songs);

            if(!songs){
                throw new Error('Error al obtener el listado de canciones actual.')
            } 

            return await ClearPlaylistRepository.clear(songs)

        } catch (error) {
            throw CustomError.badRequest(`${error}`)
        }


    }
};