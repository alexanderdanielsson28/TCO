import firebase from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_8TtDFPqBXT98w9bcNfbC1tiT2-F82Vo",
  authDomain: "tco-project-faf28.firebaseapp.com",
  databaseURL: "https://tco-project-faf28.firebaseio.com",
  projectId: "tco-project-faf28",
  storageBucket: "tco-project-faf28.appspot.com",
  messagingSenderId: "464825677637"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();
  export {
    auth,
  };