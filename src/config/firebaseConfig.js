import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyAfFa1mcavajRmOQ-q4BcIQIT8zEQe_JB4",
    authDomain: "guesswho-d1290.firebaseapp.com",
    databaseURL: "https://guesswho-d1290.firebaseio.com",
    projectId: "guesswho-d1290",
    storageBucket: "guesswho-d1290.appspot.com",
    messagingSenderId: "239256369026",
    appId: "1:239256369026:web:4f369dcc197dd8052bc19b"
};
firebase.initializeApp(firebaseConfig);


// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;