import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FAERBASE_API_KEY,
  authDomain: process.env.REACT_APP_FAERBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FAERBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FAERBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FAERBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FAERBASE_API_ID,
  measurementId: process.env.REACT_APP_FAERBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
