// sole interface to the entire firebase module
// a user should not access the auth or firebase files directly

import * as auth from './auth';
import * as firebase from './firebase';

export {
  auth,
  firebase,
};
