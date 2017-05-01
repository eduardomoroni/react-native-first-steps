let fbsdk = jest.genMockFromModule('react-native-fbsdk')

// TODO: Learn How to Mock Promises

const accessToken = {
  accessToken: 'EAAPpX2lrt20BA',
  permissions: ['user_friends', 'email', 'public_profile'],
  declinedPermissions: [],
  applicationID: '1101021234567890',
  accessTokenSource: 'WEB_VIEW',
  userID: '2038729385722234',
  expirationTime: 1498828922451,
  lastRefreshTime: 1493659942451
}

const loginResult = (permissions) => {
  return {
    isCancelled: false,
    grantedPermissions: permissions,
    declinedPermissions: []
  }
}

export const LoginManager = {
  logInWithReadPermissions: jest.fn((permission) => { return Promise.resolve(loginResult(permission)) }),
  logOut: jest.fn(),
  setLoginBehavior: jest.fn()
}

export const AccessToken = {
  getCurrentAccessToken: jest.fn(() => { return Promise.resolve(accessToken) })
}

export default fbsdk
