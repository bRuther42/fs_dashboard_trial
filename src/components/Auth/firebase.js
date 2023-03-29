import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "nsccclass-df7cc.firebaseapp.com",
    projectId: "nsccclass-df7cc",
    storageBucket: "nsccclass-df7cc.appspot.com",
    messagingSenderId: "683951266001",
    appId: "1:683951266001:web:d3e4ba71b0e7c54b964df0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}