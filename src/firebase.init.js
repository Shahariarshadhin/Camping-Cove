// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmtOYOPaeLXK_QyaXMzJ0BqvMEWEvmcmI",
    authDomain: "camping-cove.firebaseapp.com",
    projectId: "camping-cove",
    storageBucket: "camping-cove.appspot.com",
    messagingSenderId: "793887566912",
    appId: "1:793887566912:web:87390e6b0da3ac083003a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;