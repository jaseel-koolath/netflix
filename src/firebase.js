import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDypkQexZnaHT6pU5hLKYjkLtc9C9hmoPI",
  authDomain: "netflix-clone-aaecc.firebaseapp.com",
  projectId: "netflix-clone-aaecc",
  storageBucket: "netflix-clone-aaecc.appspot.com",
  messagingSenderId: "1005736806189",
  appId: "1:1005736806189:web:b3060e614be8694b09b5a4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
