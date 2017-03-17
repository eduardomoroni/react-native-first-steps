import { searchForCards, showCards } from '../../../src/Redux/Actions/CardSearchActions'
import { SEARCH_FOR_CARDS, SHOW_CARDS } from '../../../src/Redux/Types'

const cardForm = {cardName: 'Yu-gi-oh'}

it('Action for search cards', () => {
  const expectedAction = {type: SEARCH_FOR_CARDS, payload: cardForm}
  expect(searchForCards(cardForm)).toEqual(expectedAction)
})

it('Action for show fetched cards', () => {
  const expectedAction = {type: SHOW_CARDS, payload: cardForm}
  expect(showCards(cardForm)).toEqual(expectedAction)
})
