import test from 'ava'
import UserReducer, { INITIAL_STATE } from '../../../src/Redux/Reducers/UserReducer'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../../src/Redux/Types'

test('Should logout user', (t) => {
  const state = UserReducer(INITIAL_STATE, { type: USER_LOGGED_OUT })

  t.is(state.user, null)
})

test('Should loginUserSaga user', (t) => {
  const user = { email: 'foo@bar.com' }
  const state = UserReducer(INITIAL_STATE, { type: USER_LOGGED_IN, payload: user })

  t.is(state.user, user)
})
