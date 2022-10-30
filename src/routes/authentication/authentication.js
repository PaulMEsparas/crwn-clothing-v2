import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utility/firebase/firebase.utility";

//For Redirect auth
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
  //For Redirect Auth
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   console.log(user);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sign in Page</h1>
      {/* <button onClick={logGoogleUser}>Sign in with google pop up</button>
       <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
