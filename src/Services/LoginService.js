import { LoginManager, AccessToken } from 'react-native-fbsdk'
import type { LoginResult } from 'react-native-fbsdk/js/FBLoginManager'
const { logInWithReadPermissions, logOut } = LoginManager

LoginManager.setLoginBehavior('native_with_fallback')
export const readPermissions = ['user_friends', 'email', 'public_profile']

export type AccessTokenType = {
  accessToken: string,
  applicationID: string,
  userID: string,
  permissions: Array<string>,
  declinedPermissions: Array<string>,
  accessTokenSource?: string,
  expirationTime: number,
  lastRefreshTime: number,
}

// TODO: Review, Tava com a cabeça ocupada quando implementei

export const facebookLogin = () => logInWithReadPermissions(readPermissions).then(isLoginSuccess)
export const facebookLogout = () => logOut()

export const getAccessToken = () => {
  return AccessToken.getCurrentAccessToken().then(
    (tokenData: AccessTokenType) => {
      return tokenData
    }
  )
}

function isLoginSuccess (result: LoginResult) {
  if (result.isCancelled) {
    console.log('Login Cancelled')
    throw new Error('Login Cancelled')
  }

  return result
}
