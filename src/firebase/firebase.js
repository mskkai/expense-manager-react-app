import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Travel",
//   note: "",
//   amount: 109500,
//   createdAt: 1234233444,
// });

// database.ref("expenses").push({
//   description: "Phone",
//   note: "",
//   amount: 9500,
//   createdAt: 12342345644,
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 234,
//   createdAt: 123234444,
// });
