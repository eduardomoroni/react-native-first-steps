import {
  USER_LOGGED_IN,
  LOGOUT_USER
} from '../Types'

export const INITIAL_STATE = {
  accessToken: undefined,
  permissions: [],
  declinedPermissions: [],
  applicationID: '',
  accessTokenSource: '',
  userID: '12341234', // JUST TO TEST POURPOSE
  expirationTime: 0,
  lastRefreshTime: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...INITIAL_STATE, ...action.payload }
    case LOGOUT_USER:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
