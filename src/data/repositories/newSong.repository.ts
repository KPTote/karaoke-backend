import { dbFS } from "../../app";
import { NewSongFormDto } from '../../domain/dtos/new-song/new-song-form-dto';



export class NewSongRepository {


    static async addSong(newSongDto: NewSongFormDto, dateTime: string) {
        return await dbFS.collection('songs').add({
            numberOnList: newSongDto.numberOnList,
            userName: newSongDto.userName,
            songName: newSongDto.songName,
            artistName: newSongDto.artistName,
            date: dateTime
        })
    };


    static async getAll() {
        const logs = await dbFS.collection('songs').get();

        return logs.docs.map(doc => doc.data());
    };

};