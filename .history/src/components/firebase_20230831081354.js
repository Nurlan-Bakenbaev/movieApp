import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "movie-app-1c550.firebaseapp.com",
  projectId: "movie-app-1c550",
  storageBucket: "movie-app-1c550.appspot.com",
  messagingSenderId: "594561202497",
  appId: "1:594561202497:web:f33da780a7ae225f8c09c0",
};

const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
