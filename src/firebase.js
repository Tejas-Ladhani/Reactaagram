import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPvwU1b3j53N-irnRfTAmSKHeRkPIPtp0",
    authDomain: "reactaagram.firebaseapp.com",
    projectId: "reactaagram",
    storageBucket: "reactaagram.appspot.com",
    messagingSenderId: "302716590400",
    appId: "1:302716590400:web:21aefb32244c12e61c42a5"
  };

//config the firebase with this app.
const firebaseApp=firebase.initializeApp(firebaseConfig);

//services , going to be used
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage=firebaseApp.storage(); // to store images
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider} ;