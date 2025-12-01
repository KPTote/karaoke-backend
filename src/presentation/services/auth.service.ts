import { EncryptPassUser } from "../../config/bcrypt.adapter";
import { envs } from "../../config/envs";
import { JwtAdapter } from "../../config/jwt.adapter";
import { CustomError } from "../../data/errors/custom.error";
import { AuthRepository } from "../../data/repositories/auth.repository";



export class AuthService {

    public async login(email: string, password: string) {

        const user = await AuthRepository.getUser(email);

        if (!user) {
            throw CustomError.badRequest('Usuario no existe.')
        };

        if (!user.data().email || !user.data().password) {
            throw CustomError.internalServer(`Error al obtener información.`)
        };

        const isMatching = EncryptPassUser.compare(password, user?.data()?.password);

        if (!isMatching) {
            throw CustomError.badRequest('Usuario o contraseña inválida.');
        }

        const token = await JwtAdapter.generateToken({ email }, envs.JWT_TIME);

        if (!token) {
            throw CustomError.badRequest("Error while creating JWT");
        };

        return {
            email,
            token
        }


    }

    public async register(email: string, password: string) {
        const user = await AuthRepository.getUser(email);

        if (user?.data()?.email && user?.data()?.email === email) {
            throw CustomError.badRequest(`Usuario ya existe.`)
        };


        try {

            const passEncrypted = EncryptPassUser.hash(password);
            const createUser = await AuthRepository.createUser(email, passEncrypted);

            return {
                message: 'Usuario creado con éxito.',
                email,
                createUser
            }

        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }
    }

};