
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intelliprep-f2077.firebaseapp.com",
  projectId: "intelliprep-f2077",
  storageBucket: "intelliprep-f2077.firebasestorage.app",
  messagingSenderId: "742947993972",
  appId: "1:742947993972:web:57aa1fde5b3df87c639421"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
