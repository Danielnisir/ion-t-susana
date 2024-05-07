// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBC7QhG1gZqmpc-5pSiRSClOrkfbeWlGtU",
    authDomain: "it35-susana-7dce3.firebaseapp.com",
    projectId: "it35-susana-7dce3",
    storageBucket: "it35-susana-7dce3.appspot.com",
    messagingSenderId: "827666843741",
    appId: "1:827666843741:web:27a3970b7f1227688c25b4",
    measurementId: "G-40ZG44P2GG"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}