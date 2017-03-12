import test from 'ava'
import { searchForCards, showCards } from '../../../src/Redux/Actions/CardSearchActions'
import { SEARCH_FOR_CARDS, SHOW_CARDS } from '../../../src/Redux/Types'

const cardForm = {cardName: 'Yu-gi-oh'}

test('Action for search cards', t => {
  const expectedAction = {type: SEARCH_FOR_CARDS, payload: cardForm}
  t.deepEqual(searchForCards(cardForm), expectedAction)
})

test('Action for show fetched cards', t => {
  const expectedAction = {type: SHOW_CARDS, payload: cardForm}
  t.deepEqual(showCards(cardForm), expectedAction)
})
