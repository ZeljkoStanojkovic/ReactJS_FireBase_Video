import * as firebase from "firebase";
// import * as firebase from "firebase/app";
// import app from "firebase";
import "firebase/auth";
import App from "../App";

//TODO:
//[]firebase-config
var firebaseConfig = {
  apiKey: "AIzaSyCYjqEKH7EgXjbYCWzEah1GAv8UxL-k_Go",
  authDomain: "mini-cf227.firebaseapp.com",
  databaseURL: "https://mini-cf227.firebaseio.com",
  projectId: "mini-cf227",
  storageBucket: "mini-cf227.appspot.com",
  messagingSenderId: "943513760295",
  appId: "1:943513760295:web:f050ceac01410ee549d402",
  measurementId: "G-ZKEX8WB6L4",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log("signInWithGoogle -> res", res);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

export const signOut = () => {
  auth
    .signOut()
    .then((res) => {
      console.log("signOut -> res", res);
      alert("로그아웃 되었습니다. 다시 뵐 때까지 건강하고 행복하세요^^");
    })
    .catch((error) => {
      console.log("signOut -> error", error);
      alert(error.message);
    });
};

export default firebase;
