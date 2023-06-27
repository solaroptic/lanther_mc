import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC6cjvXyg5rdNpdRoIUW5rztviBCs7C00",

  authDomain: "lanthermc.firebaseapp.com",

  projectId: "lanthermc",

  storageBucket: "lanthermc.appspot.com",

  messagingSenderId: "687613300560",

  appId: "1:687613300560:web:ec7f6fd01ea4373f2ee655",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
