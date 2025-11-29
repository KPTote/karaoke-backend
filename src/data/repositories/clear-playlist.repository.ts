import { dbFS } from "../../app";

interface ClearProps {
    id: string;
    numberOnList: number;
    userName: string;
    songName: string;
    artistName: string;
    date: string;
}


export class ClearPlaylistRepository {

    static async clear(props : ClearProps[]) {
        return await Promise.all(
            props.map(song => 
                dbFS.collection('songs').doc(song.id).delete()
            )
        );

    }

    static async getAllWithID() {
        const songs = await dbFS.collection('songs').get()

        return songs.docs.map(e => {
            return {
                id: e.id,
                ...e.data()
            }
        }) as ClearProps[]
    }

};