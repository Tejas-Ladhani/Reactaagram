import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    
  };

//config the firebase with this app.
var firebaseApp;
if (!firebase.apps.length) {
  firebaseApp=firebase.initializeApp(firebaseConfig);
}

//services , going to be used
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage=firebaseApp.storage(); // to store images
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider} ;