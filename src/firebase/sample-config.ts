// app/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/*
  Firebase Configuration Instructions
  1. Create a Firebase project
  2. Add a Web App to the project
  3. Copy the Firebase configuration values provided by Firebase
  4. Replace the placeholder values below with your own config
  5. Ensure Email/Password authentication is enabled in the Firebase Console
  6. Rename this file to `config.ts`
*/

const firebaseConfig = {
  apiKey: "AIzaSyAk_vbSWh8fVeXH4bgHbEekeNJJT_9zTqg",
  authDomain: "expo-demo-c541c.firebaseapp.com",
  projectId: "expo-demo-c541c",
  storageBucket: "expo-demo-c541c.firebasestorage.app",
  messagingSenderId: "1072298271264",
  appId: "1:1072298271264:web:c2708e55a3117332c0d245"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;