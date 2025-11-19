import { dbFS } from "../../app";
import { NewSongFormDto } from '../../domain/dtos/new-song/new-song-form-dto';



export class NewSongRepository {


    static async addSong(newSongDto: NewSongFormDto){
        return await dbFS.collection('songs').add({
            userName: newSongDto.userName,
            songName: newSongDto.songName,
            artistName: newSongDto.artistName,
            date: '15155151515'
        })
    };

};