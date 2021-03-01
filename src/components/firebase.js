import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAMsL19_dbJZKmDCqoYZKwct1-7oEpkq5Y",
    authDomain: "co-lab-morning.firebaseapp.com",
    projectId: "co-lab-morning",
    storageBucket: "co-lab-morning.appspot.com",
    messagingSenderId: "402468139861",
    appId: "1:402468139861:web:a69d5010f27bc36d1ff5dc",
    measurementId: "G-6H6CC1LD2G"
};
firebase.initializeApp(config);
firebase.analytics();

export default firebase;