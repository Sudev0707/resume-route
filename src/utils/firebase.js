// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBHeTXH2YOsxHVQ5HK_XAesHEIDNKn3Sf0",
    authDomain: "resume-route.firebaseapp.com",
    projectId: "resume-route",
    storageBucket: "resume-route.firebasestorage.app",
    messagingSenderId: "585296290527",
    appId: "1:585296290527:android:b4cf06f44072a5d637ff6a",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence (React Native)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
// export const auth = getAuth(app);