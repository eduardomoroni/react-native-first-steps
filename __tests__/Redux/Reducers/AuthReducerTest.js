import test from 'ava'
import AuthReducer, { INITIAL_STATE } from '../../../src/Redux/Reducers/AuthReducer'
import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER, SIGN_UP_USER } from '../../../src/Redux/Types'

test('Handle Login Fail', (t) => {
  const action = { type: LOGIN_USER_FAIL, payload: 'Error message' }
  const state = AuthReducer(INITIAL_STATE, action)

  t.false(state.loading)
  t.is(state.error, action.payload)
})

test('Handle Login Success', (t) => {
  const action = { type: LOGIN_USER_SUCCESS }
  const state = AuthReducer(INITIAL_STATE, action)

  t.deepEqual(state, INITIAL_STATE)
})

test('Should Log In User', (t) => {
  const action = { type: LOGIN_USER }
  const state = AuthReducer(INITIAL_STATE, action)

  t.true(state.loading)
  t.is(state.error, '')
})

test('Should Sign Up User', (t) => {
  const action = { type: SIGN_UP_USER }
  const state = AuthReducer(INITIAL_STATE, action)

  t.true(state.loading)
  t.is(state.error, '')
})
