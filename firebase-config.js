// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBMxmjX4DI7eZyN5XM9zhqzjo-9PFSRdMI",
  authDomain: "studentporteldata.firebaseapp.com",
  projectId: "studentporteldata",
  storageBucket: "studentporteldata.firebasestorage.app",
  messagingSenderId: "717815598514",
  appId: "1:717815598514:web:6efa5d7454d6801bac28ab",
  measurementId: "G-YST4S5F1M0"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();