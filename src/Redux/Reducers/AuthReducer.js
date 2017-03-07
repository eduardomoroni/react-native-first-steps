import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_UP_USER
} from '../Types'

export const INITIAL_STATE = {
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case SIGN_UP_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    default:
      return state
  }
}
