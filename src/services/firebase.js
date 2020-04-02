import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDCJVftGWOurOuhevaxsUG3OPdLqHhFO58",
    authDomain: "chatty-46625.firebaseapp.com",
    databaseURL: "https://chatty-46625.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();