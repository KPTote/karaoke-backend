

export class NewSongFormDto {

    private constructor(
        public userName: string,
        public songName: string,
        public artistName: string,
    ) { };

    static addSong(object: { [key: string]: any }): [string?, NewSongFormDto?] {

        const {userName, songName, artistName} = object;


        if(!userName) return ['Missing user name', undefined];
        if( typeof userName !== 'string') return ['Invalid type of user name', undefined];

        if(!songName) return ['Missing song name', undefined];
        if(typeof songName !== 'string') return ['Invalid type of song name', undefined];

        if(!artistName) return ['Missing artist name', undefined];
        if(typeof artistName !== 'string') return ['Invalid type of artist name', undefined];

        return [undefined, new NewSongFormDto(userName, songName, artistName)]

    };

};