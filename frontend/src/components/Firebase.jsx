// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj4sRNbwwo4gWyB83UqjhOezvWuJvj2IY",
  authDomain: "sass-aceff.firebaseapp.com",
  projectId: "sass-aceff",
  storageBucket: "sass-aceff.appspot.com",
  messagingSenderId: "491281837381",
  appId: "1:491281837381:web:cdbda56161ea1a930f622c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);