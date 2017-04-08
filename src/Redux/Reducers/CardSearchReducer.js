import { SHOW_CARDS, TOGGLE_SHOW_CARD_TEXT, SORT_CARDS, SHOW_FORM_MODAL } from '../Types'

export const INITIAL_STATE = {
  cards: {},
  showCardText: true,
  sortBy: {field: 'name', reversed: false},
  visibleModal: ''
}

export default (state = INITIAL_STATE, action) => {
  const { payload } = action
  switch (action.type) {
    case SHOW_FORM_MODAL:
      return { ...state, visibleModal: payload }
    case SHOW_CARDS:
      return { ...state, cards: payload }
    case TOGGLE_SHOW_CARD_TEXT:
      return { ...state, showCardText: payload.showCardText }
    case SORT_CARDS:
      return { ...state, sortBy: payload.sortBy }
    default:
      return state
  }
}
