import test from 'ava'
import CardSearchReducer, { INITIAL_STATE } from '../../../src/Redux/Reducers/CardSearchReducer'
import { SHOW_CARDS } from '../../../src/Redux/Types'

test('Should show cards fetched', (t) => {
  const cards = ['a', 'b']
  const action = { type: SHOW_CARDS, payload: cards }
  const state = CardSearchReducer(INITIAL_STATE, action)

  t.deepEqual(state, {cards})
})
