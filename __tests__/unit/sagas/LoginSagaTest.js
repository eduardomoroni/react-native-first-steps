import { call, put } from 'redux-saga/effects'
import {
  loginUserSaga,
  callFirebaseSignIn,
  createFirebaseUser,
  signupUserSaga,
  success
} from '../../../src/redux/sagas/LoginSaga'
import {
  loginUser,
  loginUserSuccess,
  signupUser,
  loginUserFailed,
  userLoggedIn
} from '../../../src/redux/actions'

const sagaDone = { done: true, value: undefined }
const credential = { email: 'email', password: 'pass' }
const loginAction = loginUser(credential)
const signUpAction = signupUser(credential)
const expectedUser = { user: 'Fake' }

it('Sign in perfect flow', () => {
  const generator = loginUserSaga(loginAction)
  const step = (lastYield) => generator.next(lastYield)

  expect(step().value).toEqual(call(callFirebaseSignIn, loginAction.payload))
  expect(step(expectedUser).value).toEqual(call(success, expectedUser))
  expect(step()).toEqual(sagaDone)
})

it('Sign in flow should call signup flow on error', () => {
  const generator = loginUserSaga(loginAction)

  try {
    expect(generator.next().value).toEqual(call(callFirebaseSignIn, loginAction.payload))
    expect(generator.throw('Failed to login').value).toEqual(put(signupUser(loginAction.payload)))
  } finally {
    expect(generator.next()).toEqual(sagaDone)
  }
})

it('Sign Up perfect flow', () => {
  const generator = signupUserSaga(signUpAction)
  const step = (lastYield) => generator.next(lastYield)

  expect(step().value).toEqual(call(createFirebaseUser, signUpAction.payload))
  expect(step(expectedUser).value).toEqual(call(success, expectedUser))
  expect(step()).toEqual(sagaDone)
})

it('Sign Up error flow', () => {
  const generator = signupUserSaga(signUpAction)
  const error = { message: 'Error Message' }

  try {
    expect(generator.next().value).toEqual(call(createFirebaseUser, signUpAction.payload))
    expect(generator.throw(error).value).toEqual(put(loginUserFailed(error.message)))
  } finally {
    expect(generator.next()).toEqual(sagaDone)
  }
})

it('On Success should Update State', () => {
  const generator = success(expectedUser)
  const step = (lastYield) => generator.next(lastYield)

  expect(step().value).toEqual(put(loginUserSuccess()))
  expect(step().value).toEqual(put(userLoggedIn(expectedUser)))
  expect(step()).toEqual(sagaDone)
})
