import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgsE_5P3V_Gw3dDE499zBZgTgJEhG4HUQ",
    authDomain: "imessage-nick.firebaseapp.com",
    databaseURL: "https://imessage-nick.firebaseio.com",
    projectId: "imessage-nick",
    storageBucket: "imessage-nick.appspot.com",
    messagingSenderId: "992175890510",
    appId: "1:992175890510:web:98f867ae0947b6651d231f",
    measurementId: "G-VTGZ652X5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;