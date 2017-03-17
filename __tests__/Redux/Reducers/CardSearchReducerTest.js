import CardSearchReducer, { INITIAL_STATE } from '../../../src/Redux/Reducers/CardSearchReducer'
import { SHOW_CARDS } from '../../../src/Redux/Types'

it('Should show cards fetched', () => {
  const cards = ['a', 'b']
  const action = { type: SHOW_CARDS, payload: cards }
  const state = CardSearchReducer(INITIAL_STATE, action)

  expect(state).toEqual({cards})
})
