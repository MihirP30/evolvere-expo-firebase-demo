// app/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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