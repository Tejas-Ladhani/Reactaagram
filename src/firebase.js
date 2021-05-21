import firebase from 'firebase'

const firebaseConfig = {
    
  };

//config the firebase with this app.
const firebaseApp=firebase.initializeApp(firebaseConfig);

//services , going to be used
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage=firebaseApp.storage(); // to store images
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider} ;