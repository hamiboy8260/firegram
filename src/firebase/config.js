import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQdxl2YBLT8eOzyZ59WZ3WtdwCfWXEH7c",
  authDomain: "firagram-a40f6.firebaseapp.com",
  projectId: "firagram-a40f6",
  storageBucket: "firagram-a40f6.appspot.com",
  messagingSenderId: "56905838531",
  appId: "1:56905838531:web:2ce35c2f6023848f629776"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore, timestamp};
