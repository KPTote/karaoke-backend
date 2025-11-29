import { regularExps } from "../../../config/regular-exp";


export class AuthDto{

    private constructor(
        public email: string,
        public password: string
    ){};

    static user(email: string, password: string): [string?, AuthDto?]{

        if(!email) return ['Missing email', undefined];
        if(typeof email !== 'string') return ['Type of email not allowed', undefined];
        if(!regularExps.email.test(email)) return ['Email is not valid', undefined];

        if(!password) return ['Missing password', undefined];
        if(typeof password !== 'string') return ['Type of password not allowed', undefined];
        if(password.length < 8) return ['Password too short'];

        return [undefined, new AuthDto(email, password)];

    }

};