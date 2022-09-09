// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKDTpJp9FnXHLsM4HfVy47bAQ3REy5iic",
    authDomain: "discord-clone-dec70.firebaseapp.com",
    projectId: "discord-clone-dec70",
    storageBucket: "discord-clone-dec70.appspot.com",
    messagingSenderId: "463659087316",
    appId: "1:463659087316:web:a79d633c034f54ea4a5241",
    measurementId: "G-L3Q70FNTEG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;