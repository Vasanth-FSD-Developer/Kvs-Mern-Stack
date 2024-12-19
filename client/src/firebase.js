// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-kvs.firebaseapp.com",
  projectId: "mern-kvs",
  storageBucket: "mern-kvs.firebasestorage.app",
  messagingSenderId: "930679738070",
  appId: "1:930679738070:web:fed705f91a50cd3d85c377"
  
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
