import React from 'react';
import RouteStack from './Route/RouteStack';
import 'react-native-gesture-handler'
// Import the functions you need from the SDKs you need
import {getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXW4gR9MwckmsqL5W4RpvooHzWcIFQszo",
  authDomain: "projekreact-native.firebaseapp.com",
  projectId: "projekreact-native",
  storageBucket: "projekreact-native.appspot.com",
  messagingSenderId: "210705989025",
  appId: "1:210705989025:web:5ffdf9b55bbfef4533dfe0"
  
};

console.log(getApps)
// Initialize Firebase
if(!getApps.length){
  initializeApp(firebaseConfig);
  console.log(getApps)
}

const App = () => {
  return (
       <RouteStack/>
      // <Update/>

  );
}
export default App;
