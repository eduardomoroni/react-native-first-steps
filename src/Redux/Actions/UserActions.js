import {
  USER_LOGGED_OUT,
  USER_LOGGED_IN
} from '../Types'

export const userLoggout = () => {
  return { type: USER_LOGGED_OUT }
}

export const userLoggedIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    user: user
  }
}
