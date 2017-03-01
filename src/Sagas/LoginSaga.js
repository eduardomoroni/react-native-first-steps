import { put, call } from 'redux-saga/effects'
import firebase from 'firebase'
import {
  loginUserFailed,
  loginUserSuccess,
  userLoggedIn,
  signupUser
} from '../Redux/Actions'

export function * loginUserSaga (action) {
  try {
    const user = yield call(callFirebaseSignIn, action.payload)
    yield call(success, user)
  } catch (e) {
    yield put(signupUser(action.payload))
  }
}

export function * signupUserSaga (action) {
  try {
    const user = yield call(createFirebaseUser, action.payload)
    yield call(success, user)
  } catch (e) {
    yield put(loginUserFailed(e.message))
  }
}

export function * success (user) {
  yield put(loginUserSuccess())
  yield put(userLoggedIn(user))
}

export const callFirebaseSignIn = (credential) => {
  return firebase.auth().signInWithEmailAndPassword(credential.email, credential.password)
}

export const createFirebaseUser = (credential) => {
  return firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
}
