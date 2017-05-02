import UserReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/UserReducer'
import { loginUserSuccess, logoutUser } from '../../../../src/Redux/Actions/LoginActions'

describe('User Reducer Tests', () => {
  it('Should handle Login Success', () => {
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
    const state = UserReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, ...token })
  })

  it('Should handle Logout', () => {
    const action = logoutUser()
    const state = UserReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE })
  })
})
