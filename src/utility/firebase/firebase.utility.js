// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6fsR6ICoe-1711FyL0PbncQkdwYNAMLA",
  authDomain: "ztm-ecom-db.firebaseapp.com",
  projectId: "ztm-ecom-db",
  storageBucket: "ztm-ecom-db.appspot.com",
  messagingSenderId: "372977105082",
  appId: "1:372977105082:web:ebebd467522f8d8544ea83",
  measurementId: "G-RHG8VRTJRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
