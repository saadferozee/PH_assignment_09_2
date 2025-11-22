// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd-1Zz1FgKdKPA_3fvR7UJRWXYRFb9SBo",
    authDomain: "petcareshop-by-saadferozee.firebaseapp.com",
    projectId: "petcareshop-by-saadferozee",
    storageBucket: "petcareshop-by-saadferozee.firebasestorage.app",
    messagingSenderId: "507205898994",
    appId: "1:507205898994:web:0185ad526da750920e766b",
    measurementId: "G-2ZJ2D8H1RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getting auth
const Auth = getAuth(app);

export {
    analytics,
    Auth
};