import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo_Q3-79nR6PB0YxrlNz96GGGrcx62I7I",
  authDomain: "diseny-6f9e7.firebaseapp.com",
  projectId: "diseny-6f9e7",
  storageBucket: "diseny-6f9e7.appspot.com",
  messagingSenderId: "1023500211057",
  appId: "1:1023500211057:web:03eac1c3c2ffdc0a135cd0",
  measurementId: "G-TMH3SGYRSW"
};


  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;