import { Request, Response } from "express";
import { CustomError } from "../../data/errors/custom.error";
import { AuthDto } from "../../domain/dtos/auth/auth.dto";
import { AuthService } from '../services/auth.service';


export class AuthController {

    constructor(
        private readonly authService = new AuthService()
    ) { };

    public login = (req: Request, res: Response) => {

        const { email, password } = req.body;

        const [error, user] = AuthDto.user(email, password);

        if (error) return res.status(400).json({ error });

        this.authService.login(user?.email!, user?.password!)
            .then(logIn => res.json(logIn))
            .catch(error => this.handlerError(error, res));


    };


    public createUser = (req: Request, res: Response) => {

        const { email, password } = req.body;

        const [error, user] = AuthDto.user(email, password);

        if (error) return res.status(400).json({ error });

        this.authService.register(user?.email!, user?.password!)
            .then(created => res.json(created))
            .catch(error => this.handlerError(error, res));

    };

    private handlerError = (error: unknown, res: Response) => {

        console.log(error);

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        };

        return res.status(500).json({ error: 'Internal server error' })

    };


};