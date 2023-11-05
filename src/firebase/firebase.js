// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATX1xCDKXje41B69CD9bTj1FCasfN-80M",
    authDomain: "assingment11--projexts.firebaseapp.com",
    projectId: "assingment11--projexts",
    storageBucket: "assingment11--projexts.appspot.com",
    messagingSenderId: "507707039543",
    appId: "1:507707039543:web:d4e36b4a52e5d2219b04b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;