import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { createUser } from "../userData";
const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const {
        additionalUserInfo: { isNewUser },
      } = result;
      if (isNewUser) {
        firebase.auth().onAuthStateChanged((authed) => {
          const userName = authed.displayName;
          const values = userName.split(" ");
          const fName = values[0];
          const lName = values[1];
          createUser({
            id: authed.uid,
            firstName: fName,
            lastName: lName,
            email: authed.email,
            isAdmin: false,
          });
        });
      }
    });
};
const signOutUser = () =>
  new Promise((resolve, reject) => {
    firebase.auth().signOut().then(resolve).catch(reject);
  });
export { signInUser, signOutUser };
