import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD2Q9JaAvlHvkMWjwbHeUBuDWdjw0kfbB0",
    authDomain: "fir-test-c5577.firebaseapp.com",
    projectId: "fir-test-c5577",
    storageBucket: "fir-test-c5577.appspot.com",
    messagingSenderId: "537891852255",
    appId: "1:537891852255:web:5c41504ca484e1d9683e6a",
    measurementId: "G-69F7QVYG2M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;