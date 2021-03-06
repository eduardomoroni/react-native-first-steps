import UserReducer, { INITIAL_STATE } from '../../../../src/redux/reducers/UserReducer'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../../../src/redux/types'

it('Should logout user', () => {
  const state = UserReducer(INITIAL_STATE, { type: USER_LOGGED_OUT })

  expect(state.user).toBe(null)
})

it('Should loginUserSaga user', () => {
  const user = { email: 'foo@bar.com' }
  const state = UserReducer(INITIAL_STATE, { type: USER_LOGGED_IN, payload: user })

  expect(state.user).toBe(user)
})
