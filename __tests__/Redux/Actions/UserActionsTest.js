import test from 'ava'
import { userLoggout, userLoggedIn } from '../../../src/Redux/Actions/UserActions'
import { USER_LOGGED_OUT, USER_LOGGED_IN } from '../../../src/Redux/Types'

test('USER_LOGOUT_ACTION', (t) => {
  const action = userLoggout()

  t.deepEqual(action, { type: USER_LOGGED_OUT })
})

test('USER_LOGIN_ACTION', (t) => {
  const user = {name: 'foobar'}
  const action = userLoggedIn(user)

  t.deepEqual(action, { type: USER_LOGGED_IN, user: user })
})
