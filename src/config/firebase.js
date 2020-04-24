import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyABkAvfQINIRpudOhg3Znj2UA76Ff_RIv0",
    authDomain: "mini-project-2755f.firebaseapp.com",
    databaseURL: "https://mini-project-2755f.firebaseio.com",
    projectId: "mini-project-2755f",
    storageBucket: "mini-project-2755f.appspot.com",
    messagingSenderId: "983111367936",
    appId: "1:983111367936:web:dff3ba066dc60c57c907e5",
    measurementId: "G-0MT2SM746G"
};

const fb = firebase.initializeApp(config)

export const firestore = firebase.firestore()

export default fb;