import { userLoggout, userLoggedIn } from '../../../../src/Redux/Actions/UserActions'
import { USER_LOGGED_OUT, USER_LOGGED_IN } from '../../../../src/Redux/Types'

it('USER_LOGOUT_ACTION', () => {
  const action = userLoggout()

  expect(action).toEqual({ type: USER_LOGGED_OUT })
})

it('USER_LOGIN_ACTION', () => {
  const user = {name: 'foobar'}
  const action = userLoggedIn(user)

  expect(action).toEqual({ type: USER_LOGGED_IN, user: user })
})
