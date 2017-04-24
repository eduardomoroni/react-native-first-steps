import {
  SEARCH_FOR_CARDS,
  SHOW_CARDS,
  SORT_CARDS,
  SHOW_FORM_MODAL,
  SWITCH_DISPLAY_MODE,
  TOGGLE_SHOW_CARD_TEXT
} from '../Types'

export const searchForCards = (cardSearchForm) => {
  return {
    type: SEARCH_FOR_CARDS,
    payload: cardSearchForm
  }
}

export const showFormModal = (modal: string) => {
  return {
    type: SHOW_FORM_MODAL,
    payload: modal
  }
}

export const toggleShowCardText = toggle => {
  return {
    type: TOGGLE_SHOW_CARD_TEXT,
    payload: { showCardText: toggle }
  }
}

export const sortCards = sortParams => {
  return {
    type: SORT_CARDS,
    payload: { sortBy: {...sortParams} }
  }
}

export const showCards = (cards) => {
  return {
    type: SHOW_CARDS,
    payload: cards
  }
}

export const switchDisplayMode = (displayMode) => {
  return {
    type: SWITCH_DISPLAY_MODE,
    payload: { showCardsAs: displayMode }
  }
}
