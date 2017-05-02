import {
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from '../Types'

export const INITIAL_STATE = {
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...INITIAL_STATE, loading: true }
    case LOGIN_USER_FAIL:
      return { ...INITIAL_STATE, error: action.payload }
    case LOGOUT_USER:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
