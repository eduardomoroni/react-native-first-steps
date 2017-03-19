import CardSearchReducer, { INITIAL_STATE } from '../../../src/Redux/Reducers/CardSearchReducer'
import { SHOW_CARDS, TOGGLE_SHOW_CARD_TEXT, SORT_CARDS } from '../../../src/Redux/Types'

it('Should show cards fetched', () => {
  const cards = ['a', 'b']
  const action = { type: SHOW_CARDS, payload: cards }
  const state = CardSearchReducer(INITIAL_STATE, action)

  expect(state).toEqual({...INITIAL_STATE, cards})
})

it('Should filter cards fetched', () => {
  const payload = {showCardText: false}
  const action = { type: TOGGLE_SHOW_CARD_TEXT, payload: payload }
  const state = CardSearchReducer(INITIAL_STATE, action)

  expect(state).toEqual({...INITIAL_STATE, ...payload})
})

it('Should sort cards fetched', () => {
  const payload = {field: 'color', reversed: true}
  const action = { type: SORT_CARDS, payload: {sortBy: payload} }
  const state = CardSearchReducer(INITIAL_STATE, action)

  expect(state).toEqual({...INITIAL_STATE, sortBy: payload})
})