import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config/jwt.adapter";
import { CustomError } from "../../data/errors/custom.error";
import { AuthRepository } from "../../data/repositories/auth.repository";


export class AuthMiddleware {


    static async validateJWT(req: Request, res: Response, next: NextFunction) {

        const authorization = req.header('Authorization');
        if (!authorization) {
            res.status(401).json({ error: 'No token provided' });
            return;
        };

        if (!authorization.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Invalid Bearer token' });
            return;
        };

        const token = authorization.split(' ')[1] ?? '';


        try {

            const payload = await JwtAdapter.validateToken<{ email: string, exp: any }>(token);

            if (!payload) {
                res.status(401).json({ error: 'Invalid token' });
                return;
            };

            const user = await AuthRepository.getUser(payload.email);

            if (!user) {
                res.status(401).json({ error: `User don't exist` });
                return;
            };

            req.headers.email = payload.email;
            next();



        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        };
    };




}; 