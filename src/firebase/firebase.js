import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1J3mGq3DFQ3sUVDVcYl1xNrQpgTRnkEg",
  authDomain: "reacttodo-chakapega.firebaseapp.com",
  databaseURL: "https://reacttodo-chakapega.firebaseio.com",
  projectId: "reacttodo-chakapega",
  storageBucket: "",
  messagingSenderId: "96904319076",
  appId: "1:96904319076:web:1f45c1253988814d"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();