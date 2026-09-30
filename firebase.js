// Set window.TENDERLY_FIREBASE_CONFIG before this module loads to enable cloud data.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { addDoc, collection, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const config = window.TENDERLY_FIREBASE_CONFIG;
const app = config?.apiKey ? initializeApp(config) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const firebaseReady = Boolean(app);
export { addDoc, collection, limit, onAuthStateChanged, onSnapshot, orderBy, query, serverTimestamp };
