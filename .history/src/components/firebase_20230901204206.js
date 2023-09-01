import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAf12KmByPonuGPMpwTeAgqS-sI2ZJyPBQ',
  authDomain: "movie-app-1c550.firebaseapp.com",
  projectId: "movie-app-1c550",
  storageBucket: "movie-app-1c550.appspot.com",
  messagingSenderId: "594561202497",
  appId: "1:594561202497:web:f33da780a7ae225f8c09c0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)