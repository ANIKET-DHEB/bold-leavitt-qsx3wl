import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwqIlAaksABDMiRfj7vX8VfoYBGDapRXg",
  authDomain: "petstore-7b883.firebaseapp.com",
  projectId: "petstore-7b883",
  storageBucket: "petstore-7b883.appspot.com",
  messagingSenderId: "412316354667",
  appId: "1:412316354667:web:99cd1dd87bfb001e04c92e",
  databaseURL: "https://petstore-7b883-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
