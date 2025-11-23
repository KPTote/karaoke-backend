import { dbFS } from "../../app";
import { NewSongFormDto } from '../../domain/dtos/new-song/new-song-form-dto';



export class UpdateSongRepository {


    static async update(newSongDto: NewSongFormDto, id: string) {

        return await dbFS.collection('songs').doc(id).update({
            userName: newSongDto.userName,
            songName: newSongDto.songName,
            artistName: newSongDto.artistName,
        })


    };

    static async getIdSong(newSongDto: NewSongFormDto) {
        const song = await dbFS.collection('songs')
            .where('numberOnList', '==', newSongDto.numberOnList)
            .limit(1)
            .get();

        return song.docs[0];
    }

};