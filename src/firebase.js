import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAw_EkyVy8CLkGiPKoqj1MJ7Pq0U1aeK1A",
  authDomain: "thinkpiece-mids.firebaseapp.com",
  projectId: "thinkpiece-mids",
  storageBucket: "thinkpiece-mids.appspot.com",
  messagingSenderId: "239932362101",
  appId: "1:239932362101:web:cdc512a8db5560f775d73c",
};

firebase.initializeApp(config);

window.firebase = firebase; //only for development purpose (if process.env development)


export const firestore = firebase.firestore();
export default firebase;
