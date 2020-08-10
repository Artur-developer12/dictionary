import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDwQY3anIztSc4NZBh0w_Gxd0XXwnmt2xk",
    authDomain: "circassian-dictionary-d3e4e.firebaseapp.com",
    databaseURL: "https://circassian-dictionary-d3e4e.firebaseio.com",
    projectId: "circassian-dictionary-d3e4e",
    storageBucket: "circassian-dictionary-d3e4e.appspot.com",
    messagingSenderId: "273587272639",
    appId: "1:273587272639:web:19b5474bc629ca93f3ff0a",
    measurementId: "G-MT9LKTJYQR"
  };
  // Initialize Firebase
 


  export default !firebase.apps.length && firebase.initializeApp(firebaseConfig);
