import firebase from 'firebase/compat/app';

function sumChars(s) {
    var i, n = s.length, acc = 0;
    for (i = 0; i < n; i++) {
      acc += parseInt(s[i], 36) - 9;
    }
    return acc;
  }

const getCurrentUsersUid = () => sumChars(firebase.auth().currentUser?.uid);


export default getCurrentUsersUid;