import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyA4TnHYn8lRUqX-SdHHXF0WY6HEX0y-DzI",
    authDomain: "sistema-cf56f.firebaseapp.com",
    projectId: "sistema-cf56f",
    storageBucket: "sistema-cf56f.appspot.com",
    messagingSenderId: "1035667622716",
    appId: "1:1035667622716:web:bfc64fb22ebc1baf7fec39",
    measurementId: "G-YHRQS36PTX"
  };
  
   if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
   }


   export default firebase;

   
 