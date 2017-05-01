import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  USER_LOGGED_IN,
  LOGOUT_USER
} from '../Types'
import type { AccessTokenType } from '../../Services/LoginService'

export const loginUser = () => {
  return {
    type: LOGIN_USER
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

export const loginUserFailed = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: error
  }
}

export const loginUserSuccess = (accessToken : AccessTokenType) => {
  return {
    type: USER_LOGGED_IN,
    payload: accessToken
  }
}
