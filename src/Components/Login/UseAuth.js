// import React from "react";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebaseConfig";

// firebase.initializeApp(firebaseConfig);

// const UseAuth = () => {
//   const SigninWithGoogle = () => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {})
//       .catch((error) => {});
//   };

//   const SigninWIthEmailAndPassword = () => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//   };

//   const SignOut = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {})
//       .catch((error) => {});
//   };

//   return { SigninWithGoogle, SigninWIthEmailAndPassword, SignOut };
// };

// export default UseAuth;
