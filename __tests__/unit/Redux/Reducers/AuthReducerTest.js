import AuthReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/AuthReducer'
import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER, SIGN_UP_USER } from '../../../../src/Redux/Types'

it('Handle Login Fail', () => {
  const action = { type: LOGIN_USER_FAIL, payload: 'Error message' }
  const state = AuthReducer(INITIAL_STATE, action)

  expect(state.loading).toBe(false)
  expect(state.error).toBe(action.payload)
})

it('Handle Login Success', () => {
  const action = { type: LOGIN_USER_SUCCESS }
  const state = AuthReducer(INITIAL_STATE, action)

  expect(state).toEqual(INITIAL_STATE)
})

it('Should Log In User', () => {
  const action = { type: LOGIN_USER }
  const state = AuthReducer(INITIAL_STATE, action)

  expect(state.loading).toBe(true)
  expect(state.error).toBe('')
})

it('Should Sign Up User', () => {
  const action = { type: SIGN_UP_USER }
  const state = AuthReducer(INITIAL_STATE, action)

  expect(state.loading).toBe(true)
  expect(state.error).toBe('')
})
