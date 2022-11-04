import  firebase from "firebase"
import 'firebase/storage';
 
var firebaseConfig = {
  apiKey: "AIzaSyB60YJhs5WS7obsUDggpjEYYCsIJYjLcIE",
  authDomain: "task-da95c.firebaseapp.com",
  projectId: "task-da95c",
  storageBucket: "task-da95c.appspot.com",
  messagingSenderId: "375512183261",
  appId: "1:375512183261:web:81b16934f30b626ce2c634"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database