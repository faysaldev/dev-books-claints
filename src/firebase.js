// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// const firebaseConfig = {
//   apiKey: "AIzaSyBUKeyqEfolTpN9gqsJgCItCWfo84LqRJU",
//   authDomain: "dev-books-b1bea.firebaseapp.com",
//   projectId: "dev-books-b1bea",
//   storageBucket: "dev-books-b1bea.appspot.com",
//   messagingSenderId: "762542956928",
//   appId: "1:762542956928:web:d6eca4ab7df6860a3f6165",
//   measurementId: "G-5RR55J599J",
// };

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
