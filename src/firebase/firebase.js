import firebase from 'firebase/app';
import 'firebase/auth';

const devConfig = {
  apiKey: "AIzaSyCLm9zJhLV5q51siBHDce7RWd80KY_La14",
  authDomain: "react-assessment.firebaseapp.com",
  databaseURL: "https://react-assessment.firebaseio.com",
  projectId: "react-assessment",
  storageBucket: "react-assessment.appspot.com",
  messagingSenderId: "497558405028"
};

const prodConfig = {
  apiKey: "AIzaSyCLm9zJhLV5q51siBHDce7RWd80KY_La14",
  authDomain: "react-assessment.firebaseapp.com",
  databaseURL: "https://react-assessment.firebaseio.com",
  projectId: "react-assessment",
  storageBucket: "react-assessment.appspot.com",
  messagingSenderId: "497558405028"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
