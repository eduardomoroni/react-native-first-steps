import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGN_UP_USER
} from '../Types'

export const loginUser = ({ email, password }) => {
  return {
    type: LOGIN_USER,
    payload: { email, password }
  }
}

export const loginUserFailed = (errorMessage) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: errorMessage
  }
}

export const loginUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS
  }
}

export const signupUser = ({ email, password }) => {
  return {
    type: SIGN_UP_USER,
    payload: { email, password }
  }
}
