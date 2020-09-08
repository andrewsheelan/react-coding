import firebase from 'firebase'
import '@firebase/firestore' // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase'

var firebaseConfig = {

    // apiKey: '....'
    // ....
    // FROM FIREBASE APP 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const reduxSagaFirebase = new ReduxSagaFirebase(firebase)

export default reduxSagaFirebase