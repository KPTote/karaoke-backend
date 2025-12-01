import { CustomError } from "../../data/errors/custom.error";
import { ClearPlaylistRepository } from "../../data/repositories/clear-playlist.repository";



export class ClearPlaylistService {

    public async clear(){

        try {
            const songs = await ClearPlaylistRepository.getAllWithID()

            if(!songs){
                throw new Error('Error al obtener el listado de canciones actual.')
            } 

            const clearPlaylist = await ClearPlaylistRepository.clear(songs);

            return {
                message: 'Lista eliminada',
                clearPlaylist
            }

        } catch (error) {
            throw CustomError.badRequest(`${error}`)
        }


    }
};