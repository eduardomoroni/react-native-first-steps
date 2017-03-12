import { SHOW_CARDS } from '../Types'

export const INITIAL_STATE = {
  cards: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CARDS:
      return { cards: action.payload }
    default:
      return state
  }
}
