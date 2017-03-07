import test from 'ava'
import {
  signupUser,
  loginUser,
  loginUserSuccess,
  loginUserFailed
} from '../../../src/Redux/Actions/AuthActions'
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGN_UP_USER } from '../../../src/Redux/Types'

test('loginUser Action Creator', t => {
  const credential = { email: 'email', password: 'passwor' }
  const action = loginUser(credential)

  t.deepEqual(action, { type: LOGIN_USER, payload: credential })
})

test('loginUserFailed Action Creator', t => {
  const errorMessage = 'message'
  const action = loginUserFailed(errorMessage)

  t.deepEqual(action, { type: LOGIN_USER_FAIL, payload: errorMessage })
})

test('loginUserSuccess Action Creator', t => {
  const action = loginUserSuccess()

  t.deepEqual(action, { type: LOGIN_USER_SUCCESS })
})

test('signupUser Action Creator', t => {
  const credential = { email: 'email', password: 'passwor' }
  const action = signupUser(credential)

  t.deepEqual(action, { type: SIGN_UP_USER, payload: credential })
})
