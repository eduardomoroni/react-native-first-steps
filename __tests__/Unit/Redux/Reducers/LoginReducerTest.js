import LoginReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/LoginReducer'
import {
  loginUser,
  loginUserSuccess,
  loginUserFailed,
  logoutUser
} from '../../../../src/Redux/Actions/LoginActions'

describe('Login Reducer Tests', () => {
  it('Handle Login Fail', () => {
    const errorObj = {
      status: 404,
      accessToken: 'Not Found'
    }

    const action = loginUserFailed(errorObj)
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, error: errorObj })
  })

  it('Handle Login Success', () => {
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
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, token })
  })

  it('Should Log In User', () => {
    const action = loginUser()
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, loading: true })
  })

  it('Should Log Out User', () => {
    const action = logoutUser()
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE })
  })
})
