import { LoginManager, AccessToken } from 'react-native-fbsdk'
const { logInWithReadPermissions, logOut } = LoginManager

LoginManager.setLoginBehavior('native_with_fallback')
const readPermissions = ['user_friends', 'email']

type LoginResult = {
  isCancelled: boolean,
  grantedPermissions?: Array<string>,
  declinedPermissions?: Array<string>,
}

type AccessTokenMap = {
  accessToken: string,
  applicationID: string,
  userID: string,
  permissions: Array<string>,
  declinedPermissions: Array<string>,
  accessTokenSource?: string,
  expirationTime: number,
  lastRefreshTime: number,
}

export const facebookLogin = () => logInWithReadPermissions(readPermissions).then(
  loginSuccess, onError
)

function loginSuccess (result: LoginResult) {
  if (result.isCancelled) {
    console.log('Login cancelled')
  } else {
    AccessToken.getCurrentAccessToken().then(
        (data: AccessTokenMap) => {
          console.log(data)
        }
      )
  }
}

function onError (error) {
  console.error('Error ocurred on facebook service: ', error)
}

export const facebookLogout = () => logOut()
