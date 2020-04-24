import firebase from 'firebase';

const config = {
    apiKey: "****",
    authDomain: "mini-project-2755f.firebaseapp.com",
    databaseURL: "https://mini-project-2755f.firebaseio.com",
    projectId: "mini-project-2755f",
    storageBucket: "mini-project-2755f.appspot.com",
    messagingSenderId: "******",
    appId: "******",
    measurementId: "*****"
};

const fb = firebase.initializeApp(config)

export const firestore = firebase.firestore()

export default fb;