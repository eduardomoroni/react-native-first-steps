import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../Types'

export const INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_OUT:
      return {...state, ...INITIAL_STATE}
    case USER_LOGGED_IN:
      return {...state, user: action.payload}
    default:
      return state
  }
}
