import * as LoginService from '../../../src/Services/LoginService'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

describe('Login Service Test', () => {
  it('Should Call FacebookSDK Logout', () => {
    LoginService.facebookLogout()
    expect(LoginManager.logOut).toHaveBeenCalled()
  })

  it('Should Login with facebook', () => {
    LoginService.facebookLogin()
    expect(LoginManager.logInWithReadPermissions).toHaveBeenCalledWith(LoginService.readPermissions)
    // TODO: We need to Test promise resolves
  })

  it('Should return active token', () => {
    LoginService.getAccessToken()
    expect(AccessToken.getCurrentAccessToken).toHaveBeenCalled()
    //  TODO: LEARN TO TEST AND MOCK PROMISES
  })
})
