import firebase from 'firebase';


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyD_Z-KvRViBoovUeJJ9hytSNZsKCCYLL98",
    authDomain: "instagram-clone-react-6faf6.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-6faf6.firebaseio.com",
    projectId: "instagram-clone-react-6faf6",
    storageBucket: "instagram-clone-react-6faf6.appspot.com",
    messagingSenderId: "565778726990",
    appId: "1:565778726990:web:2ed492606840e25bb3031f"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };