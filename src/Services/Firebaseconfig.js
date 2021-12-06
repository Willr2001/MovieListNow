// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW5D177W4rKoptgOBxDvQ7M4tpyGnu1sA",
  authDomain: "movie-suggester-3e1c3.firebaseapp.com",
  projectId: "movie-suggester-3e1c3",
  storageBucket: "movie-suggester-3e1c3.appspot.com",
  messagingSenderId: "78103394431",
  appId: "1:78103394431:web:cd8bad1e714a284be9274a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
