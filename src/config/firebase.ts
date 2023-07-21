
import { initializeApp, FirebaseOptions  } from "firebase/app"
//import * as auth from "firebase/auth"
import { getAuth } from "firebase/auth";


const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_APP_apiKey,
    authDomain: import.meta.env.VITE_APP_authDomain,
    projectId: import.meta.env.VITE_APP_projectId,
    storageBucket: import.meta.env.VITE_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
    appId: import.meta.env.VITE_APP_appId,
}

export const appFirebase = initializeApp(firebaseConfig)
export const authFirebase = getAuth(appFirebase)
