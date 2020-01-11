import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyCj7tzy6D5BMqL_Z6XglO7gfwTTxfDTVCU",
    authDomain: "dysingh-cse316-hw3.firebaseapp.com",
    databaseURL: "https://dysingh-cse316-hw3.firebaseio.com",
    projectId: "dysingh-cse316-hw3",
    storageBucket: "dysingh-cse316-hw3.appspot.com",
    messagingSenderId: "226197803481",
    appId: "1:226197803481:web:420660de3acfe265a349c8",
    measurementId: "G-0TDD8MPFW7"
};
firebase.initializeApp(firebaseConfig);


// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;