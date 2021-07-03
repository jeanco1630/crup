import firebase from 'firebase/app'
require ('firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyAW8N0AYc5iw0H8rClQNAgLA1a6w-TNMuI",
    authDomain: "crud-9056a.firebaseapp.com",
    projectId: "crud-9056a",
    storageBucket: "crud-9056a.appspot.com",
    messagingSenderId: "1002179241680",
    appId: "1:1002179241680:web:0dad4b7b08dba1e839a0d5"
  }


  export const firebaseApp = firebase.initializeApp(firebaseConfig)