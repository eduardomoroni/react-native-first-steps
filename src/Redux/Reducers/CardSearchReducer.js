import { SHOW_CARDS, TOGGLE_SHOW_CARD_TEXT, SORT_CARDS } from '../Types'

export const INITIAL_STATE = {
  cards: {},
  showCardText: true,
  sortBy: {field: 'name', reversed: false}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CARDS:
      return { ...state, cards: action.payload }
    case TOGGLE_SHOW_CARD_TEXT:
      return { ...state, showCardText: action.payload.showCardText }
    case SORT_CARDS:
      return { ...state, sortBy: action.payload.sortBy }
    default:
      return state
  }
}
