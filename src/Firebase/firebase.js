import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqWlltnV4zr5GkVunah0ifALjfkncN3KA",
  authDomain: "e-sto-6a26d.firebaseapp.com",
  databaseURL: "https://e-sto-6a26d.firebaseio.com",
  projectId: "e-sto-6a26d",
  storageBucket: "e-sto-6a26d.appspot.com",
  messagingSenderId: "259463140835",
  appId: "1:259463140835:web:a2385cd9452ea44bde7cd6",
  measurementId: "G-Y03BZLGMT7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  login_hint: "user@example.com",
});
export const SignInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const { name } = additionalData;
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const checkIfDispalyNameExist = displayName ? displayName : name;

    console.log(checkIfDispalyNameExist);
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName: checkIfDispalyNameExist,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
