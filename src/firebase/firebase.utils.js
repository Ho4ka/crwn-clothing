import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCuMYGsQkOl00JdgSfjMjbh8xv8wiKXvpc",
    authDomain: "crown-db-15a0a.firebaseapp.com",
    databaseURL: "https://crown-db-15a0a.firebaseio.com",
    projectId: "crown-db-15a0a",
    storageBucket: "crown-db-15a0a.appspot.com",
    messagingSenderId: "424809342978",
    appId: "1:424809342978:web:79b4009624edecf66cdf1b",
    measurementId: "G-REW4D0F8PN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
