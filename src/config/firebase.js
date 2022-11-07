import  firebase from "firebase"
import 'firebase/storage';
 
var firebaseConfig = {
  apiKey: "AIzaSyAZceNc8YjeFXyQvTm7PvNgXlwxSpc7l0Q",
  authDomain: "authentication-9cd88.firebaseapp.com",
  projectId: "authentication-9cd88",
  storageBucket: "authentication-9cd88.appspot.com",
  messagingSenderId: "965319612227",
  appId: "1:965319612227:web:59e321ee421de2458541f6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase