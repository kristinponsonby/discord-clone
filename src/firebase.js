// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCKDTpJp9FnXHLsM4HfVy47bAQ3REy5iic",
//     authDomain: "discord-clone-dec70.firebaseapp.com",
//     projectId: "discord-clone-dec70",
//     storageBucket: "discord-clone-dec70.appspot.com",
//     messagingSenderId: "463659087316",
//     appId: "1:463659087316:web:a79d633c034f54ea4a5241",
//     measurementId: "G-L3Q70FNTEG",
//   };

//   const firebaseApp = initializeApp(firebaseConfig);
//   const db = getFirestore(firebaseApp);
//   const auth = getAuth(firebaseApp);
//   export const provider = auth.GoogleAuthProvider();

//   export { auth };
//   export default db;

import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyCKDTpJp9FnXHLsM4HfVy47bAQ3REy5iic",
      authDomain: "discord-clone-dec70.firebaseapp.com",
      projectId: "discord-clone-dec70",
      storageBucket: "discord-clone-dec70.appspot.com",
      messagingSenderId: "463659087316",
      appId: "1:463659087316:web:a79d633c034f54ea4a5241",
      measurementId: "G-L3Q70FNTEG",
    };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;