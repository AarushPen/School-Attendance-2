import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBiv_iiVekg8LYp9JMxEcguNz6MZB1FbXI",
  authDomain: "school-attendance-projec-1a6d8.firebaseapp.com",
  databaseURL: "https://school-attendance-projec-1a6d8-default-rtdb.firebaseio.com",
  projectId: "school-attendance-projec-1a6d8",
  storageBucket: "school-attendance-projec-1a6d8.appspot.com",
  messagingSenderId: "448500960780",
  appId: "1:448500960780:web:69b8a64b5a2957651b2829"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

  export default firebase.database()
 

  