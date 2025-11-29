import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    FIREBASE_PROJECT_ID: get('FIREBASE_PROJECT_ID').required().asString(),
    FIREBASE_CLIENT_EMAIL: get('FIREBASE_CLIENT_EMAIL').required().asString(),
    FIREBASE_PRIVATE_KEY: get('FIREBASE_PRIVATE_KEY').required().asString(),
    JWT_SEED: get('JWT_SEED').required().asString(),
    JWT_TIME: get('JWT_TIME').required().asString(),

};
