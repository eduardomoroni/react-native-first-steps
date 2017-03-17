import { SHOW_CARDS, FILTER_CARDS } from '../Types'

export const INITIAL_STATE = {
  cards: {},
  showCardText: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CARDS:
      return { ...state, cards: action.payload }
    case FILTER_CARDS:
      return { ...state, showCardText: action.payload.showCardText }
    default:
      return state
  }
}
