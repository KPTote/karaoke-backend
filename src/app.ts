import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { createServer } from 'http';
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { WssService } from './presentation/services/wss.service';

const appStart = (() => {

    main();

});


function main() {
    
    const serverApp = new Server(
        envs.PORT
    );


    const httpServer = createServer(serverApp.app);
    WssService.initWss({server: httpServer})
    serverApp.setRoutes(AppRoutes.routes);

    httpServer.listen(envs.PORT, () => {
        console.log(`Server running on port: ${envs.PORT} ggg`);
    })
    
};

const firebaseApp = initializeApp({
    credential: credential.cert({
        projectId: envs.FIREBASE_PROJECT_ID,
        clientEmail: envs.FIREBASE_CLIENT_EMAIL,
        privateKey: envs.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
});

export const dbFS = getFirestore(firebaseApp);


appStart();