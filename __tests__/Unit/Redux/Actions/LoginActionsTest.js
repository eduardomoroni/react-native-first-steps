import {
  loginUser,
  logoutUser,
  loginUserSuccess,
  loginUserFailed
} from '../../../../src/Redux/Actions/LoginActions'
import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  USER_LOGGED_IN,
  LOGOUT_USER
} from '../../../../src/Redux/Types'

describe('Login Action Creators Test', () => {
  it('loginUser Action Creator', () => {
    const action = loginUser()
    expect(action).toEqual({ type: LOGIN_USER })
  })

  it('logout Action Creator', () => {
    const action = logoutUser()
    expect(action).toEqual({ type: LOGOUT_USER })
  })

  it('loginUserFailed Action Creator', () => {
    const error = 'error message'

    const action = loginUserFailed(error)

    expect(action).toEqual({ type: LOGIN_USER_FAIL, payload: error })
  })

  it('loginUserSuccess Action Creator', () => {
    const token = {
      accessToken: 'EAAPpX2lrt20BA',
      permissions: ['user_friends', 'email', 'public_profile'],
      declinedPermissions: [],
      applicationID: '1101021234567890',
      accessTokenSource: 'WEB_VIEW',
      userID: '2038729385722234',
      expirationTime: 1498828922451,
      lastRefreshTime: 1493659942451
    }

    const action = loginUserSuccess(token)

    expect(action).toEqual({ type: USER_LOGGED_IN, payload: token })
  })
})
