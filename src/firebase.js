import firebase from 'firebase';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjK0IZFvw2kMZGTS08PEgj0898z4ltEYo",
  authDomain: "my-whatsapp-clone-7b0bc.firebaseapp.com",
  databaseURL: "https://my-whatsapp-clone-7b0bc-default-rtdb.firebaseio.com",
  projectId: "my-whatsapp-clone-7b0bc",
  storageBucket: "my-whatsapp-clone-7b0bc.appspot.com",
  messagingSenderId: "369543464615",
  appId: "1:369543464615:web:26b75b8c71479bc16e3d82",
  measurementId: "G-MT72KKXK81"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export default { db,auth, provider };
  