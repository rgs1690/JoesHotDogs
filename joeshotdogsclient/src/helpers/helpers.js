import firebase from 'firebase/compat/app';

const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

export default getCurrentUsersUid;