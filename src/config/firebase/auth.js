import { auth } from './config';

// registrazione /registrati
export const createUser = (email, pwd) => auth.createUserWithEmailAndPassword(email, pwd);

/*
// login / sign-in
export const loginUser = (email, pwd) => {
  auth
    .signInAndRetrieveDataWithEmailAndPassword(email, pwd)
    .then(user => {
      console.log('TODO: manage user login. ', user)
      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('TODO: manage login errors. ', error);
      return errorMessage;
    })
}

// logout
export const logoutUser = () => {
  auth
    .signOut()
    .then(() => {
      console.log('TODO: manage user logout.');
      return true;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('TODO: manage logout errors. ', error);
      return errorMessage;
    })
}

// PASSWORD RESET PROCESS  

// 1 - send pwd reset link
export const resetPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log('TODO: manage password reset.')
      return true;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('TODO:manage password reset error. ', error);
      return errorMessage;
    })
}

// 2 - forgot password code verification /verify-password-reset
export const verifyResetPwdCode = (email) => {
  auth
    .verifyPasswordResetCode(email)
    .then((email) => {
      console.log('TODO: manage forgot password verification code.', email)
      return true;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('TODO: manage forgot password verification code. ', error);
      return errorMessage;
    })
}

// 3 - confirm pwd reset
export const confirmPasswordReset = (token, pwd) => {
  auth
    .confirmPasswordReset(token, pwd)
    .then(() => {
      console.log('TODO: manage password reset.')
      return true;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('TODO:manage password reset error. ', error);
      return errorMessage;
    })
}
*/

// ????????  Password Change
//export const doPasswordUpdate = (password) =>
//  auth.currentUser.updatePassword(password);
