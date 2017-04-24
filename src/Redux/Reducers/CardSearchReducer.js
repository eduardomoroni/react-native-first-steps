import { SHOW_CARDS, SORT_CARDS, SHOW_FORM_MODAL, SWITCH_DISPLAY_MODE, TOGGLE_SHOW_CARD_TEXT } from '../Types'

export const INITIAL_STATE = {
  cards: {},
  showCardText: true,
  sortBy: {field: 'name', reversed: false},
  showCardsAs: 'list',
  visibleModal: ''
}

export default (state = INITIAL_STATE, action) => {
  const { payload } = action
  switch (action.type) {
    case SHOW_FORM_MODAL:
      return { ...state, visibleModal: payload }
    case SHOW_CARDS:
      return { ...state, cards: payload }
    case SORT_CARDS:
      return { ...state, sortBy: payload.sortBy }
    case TOGGLE_SHOW_CARD_TEXT:
      return { ...state, showCardText: payload.showCardText }
    case SWITCH_DISPLAY_MODE:
      return { ...state, showCardsAs: payload.showCardsAs }
    default:
      return state
  }
}
