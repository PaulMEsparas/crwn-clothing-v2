// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//for firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
///
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
console.log(auth);

//Sign in Google with Pop up
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Sign in Google with Redirect
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

//For Firestore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, addinfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); //parameters database, name , unique ID
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if userdata does not exists
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addinfo,
      });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }

  // if userdata exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
