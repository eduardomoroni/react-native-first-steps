import {
  signupUser,
  loginUser,
  loginUserSuccess,
  loginUserFailed
} from '../../../../src/redux/actions/AuthActions'
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGN_UP_USER } from '../../../../src/redux/types'

it('loginUser Action Creator', () => {
  const credential = { email: 'email', password: 'passwor' }
  const action = loginUser(credential)

  expect(action).toEqual({ type: LOGIN_USER, payload: credential })
})

it('loginUserFailed Action Creator', () => {
  const errorMessage = 'message'
  const action = loginUserFailed(errorMessage)

  expect(action).toEqual({ type: LOGIN_USER_FAIL, payload: errorMessage })
})

it('loginUserSuccess Action Creator', () => {
  const action = loginUserSuccess()

  expect(action).toEqual({ type: LOGIN_USER_SUCCESS })
})

it('signupUser Action Creator', () => {
  const credential = { email: 'email', password: 'passwor' }
  const action = signupUser(credential)

  expect(action).toEqual({ type: SIGN_UP_USER, payload: credential })
})
