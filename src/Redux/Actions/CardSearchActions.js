import {
  SEARCH_FOR_CARDS,
  SHOW_CARDS
} from '../Types'

export const searchForCards = (cardSearchForm) => {
  return {
    type: SEARCH_FOR_CARDS,
    payload: cardSearchForm
  }
}

export const showCards = (cards) => {
  return {
    type: SHOW_CARDS,
    payload: cards
  }
}
