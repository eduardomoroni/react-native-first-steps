import test from 'ava'
import { call, put } from 'redux-saga/effects'
import {
  loginUserSaga,
  callFirebaseSignIn,
  createFirebaseUser,
  signupUserSaga,
  success
} from '../../src/Sagas/LoginSaga'
import {
  loginUser,
  loginUserSuccess,
  signupUser,
  loginUserFailed,
  userLoggedIn
} from '../../src/Redux/Actions'

const sagaDone = { done: true, value: undefined }
const credential = { email: 'email', password: 'pass' }
const loginAction = loginUser(credential)
const signUpAction = signupUser(credential)
const expectedUser = { user: 'Fake' }

test('Sign in perfect flow', t => {
  const generator = loginUserSaga(loginAction)
  const step = (lastYield) => generator.next(lastYield)

  t.deepEqual(step().value, call(callFirebaseSignIn, loginAction.payload))
  t.deepEqual(step(expectedUser).value, call(success, expectedUser))
  t.deepEqual(step(), sagaDone)
})

test('Sign in flow should call signup flow on error', t => {
  const generator = loginUserSaga(loginAction)

  try {
    t.deepEqual(generator.next().value, call(callFirebaseSignIn, loginAction.payload))
    t.deepEqual(generator.throw('Failed to login').value, put(signupUser(loginAction.payload)), 'If the last yield throws an exception, call signUp saga')
  } finally {
    t.deepEqual(generator.next(), sagaDone)
  }
})

test('Sign Up perfect flow', t => {
  const generator = signupUserSaga(signUpAction)
  const step = (lastYield) => generator.next(lastYield)

  t.deepEqual(step().value, call(createFirebaseUser, signUpAction.payload))
  t.deepEqual(step(expectedUser).value, call(success, expectedUser))
  t.deepEqual(step(), sagaDone)
})

test('Sign Up error flow', t => {
  const generator = signupUserSaga(signUpAction)
  const error = { message: 'Error Message' }

  try {
    t.deepEqual(generator.next().value, call(createFirebaseUser, signUpAction.payload))
    t.deepEqual(generator.throw(error).value, put(loginUserFailed(error.message)))
  } finally {
    t.deepEqual(generator.next(), sagaDone)
  }
})

test('On Success should Update State', t => {
  const generator = success(expectedUser)
  const step = (lastYield) => generator.next(lastYield)

  t.deepEqual(step().value, put(loginUserSuccess()), 'Update state of Login Screen')
  t.deepEqual(step().value, put(userLoggedIn(expectedUser)), 'Put user object under state.user')
  t.deepEqual(step(), sagaDone)
})
