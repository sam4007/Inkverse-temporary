// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-14f61.firebaseapp.com",
    projectId: "mern-blog-14f61",
    storageBucket: "mern-blog-14f61.appspot.com",
    messagingSenderId: "877347054361",
    appId: "1:877347054361:web:947929424f6c5ab26cdb88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);