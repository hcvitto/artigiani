/*import * as auth from './auth';
import * as firebase from './config';

export {
  auth,
  firebase,
};*/

import firebase from 'firebase/app';
import 'firebase/auth';

const devConfig = {
  apiKey: "AIzaSyBHtjvdMRhKHBnneuT3sNIgruAfLn52rCc",
  authDomain: "artigiani-ee455.firebaseapp.com",
  databaseURL: "https://artigiani-ee455.firebaseio.com",
  projectId: "artigiani-ee455",
  storageBucket: "artigiani-ee455.appspot.com",
  messagingSenderId: "650242364983"
};
const prodConfig = {
 
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};