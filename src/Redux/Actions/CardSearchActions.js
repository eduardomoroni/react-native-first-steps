import {
  SEARCH_FOR_CARDS,
  SHOW_CARDS,
  TOGGLE_SHOW_CARD_TEXT,
  SORT_CARDS
} from '../Types'

export const searchForCards = (cardSearchForm) => {
  return {
    type: SEARCH_FOR_CARDS,
    payload: cardSearchForm
  }
}

export const toggleShowCardText = toggle => {
  return {
    type: TOGGLE_SHOW_CARD_TEXT,
    payload: toggle
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
