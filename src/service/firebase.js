import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDQrgk0dCR4QHEuUko4mBjmRlbX3afb2yY",
    authDomain: "pokemon-game-8d96f.firebaseapp.com",
    databaseURL: "https://pokemon-game-8d96f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-8d96f",
    storageBucket: "pokemon-game-8d96f.appspot.com",
    messagingSenderId: "686263348209",
    appId: "1:686263348209:web:1c0e45987b09bb5174b250"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;