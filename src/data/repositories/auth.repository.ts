import { dbFS } from "../../app";




export class AuthRepository {


    static async getUser(email: string) {
        const song = await dbFS.collection('users')
            .where('email', '==', email)
            .limit(1)
            .get();

        return song.docs[0] ?? undefined;
    }

    static async createUser(email: string, password: string) {
        return await dbFS.collection('users').add({
            email, password
        })
    };
};