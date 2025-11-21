

export class NewSongFormDto {

    private constructor(
        public numberOnList: number,
        public userName: string,
        public songName: string,
        public artistName: string,
    ) { };

    static addSong(object: { [key: string]: any }): [string?, NewSongFormDto?] {

        const {userName, songName, artistName, numberOnList} = object;

        if(!numberOnList) return ['Missing numberOnList', undefined];
        if( typeof numberOnList !== 'number') return ['Invalid type of numberOnList', undefined];

        if(!userName) return ['Missing user name', undefined];
        if( typeof userName !== 'string') return ['Invalid type of user name', undefined];

        if(!songName) return ['Missing song name', undefined];
        if(typeof songName !== 'string') return ['Invalid type of song name', undefined];

        if(!artistName) return ['Missing artist name', undefined];
        if(typeof artistName !== 'string') return ['Invalid type of artist name', undefined];

        return [undefined, new NewSongFormDto(numberOnList, userName, songName, artistName)]

    };

};