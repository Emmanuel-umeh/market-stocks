import * as fb from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCGjZ8YopBRU6DRE5_8Hcr9TO9SlqO3cx4",
  authDomain: "megafash-b3ea1.firebaseapp.com",
  databaseURL: "https://megafash-b3ea1.firebaseio.com",
  projectId: "megafash-b3ea1",
  storageBucket: "megafash-b3ea1.appspot.com",
  messagingSenderId: "166310543341",
  appId: "1:166310543341:web:874d62d3aad244d78b71e4",
  measurementId: "G-ZDN8DQN4MD",
};

export const firebase = !fb.apps.length
  ? fb.initializeApp(firebaseConfig)
  : fb.app();
