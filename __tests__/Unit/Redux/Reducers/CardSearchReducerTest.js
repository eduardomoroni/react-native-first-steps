import CardSearchReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/CardSearchReducer'
import { SHOW_CARDS, TOGGLE_SHOW_CARD_TEXT, SORT_CARDS, SWITCH_DISPLAY_MODE } from '../../../../src/Redux/Types'

describe('CardSearchReducer Tests', () => {
  it('Should show cards fetched', () => {
    const cards = ['a', 'b']
    const action = { type: SHOW_CARDS, payload: cards }
    const state = CardSearchReducer(INITIAL_STATE, action)

    expect(state).toEqual({...INITIAL_STATE, cards})
  })

  it('Should hide card text on display', () => {
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

  it('Should toggle display mode', () => {
    const actionImage = { type: SWITCH_DISPLAY_MODE, payload: {showCardsAs: 'image'} }
    const firstToggle = CardSearchReducer(INITIAL_STATE, actionImage)
    const actionList = { type: SWITCH_DISPLAY_MODE, payload: {showCardsAs: 'list'} }
    const secondToggle = CardSearchReducer(INITIAL_STATE, actionList)

    expect(firstToggle).toEqual({...INITIAL_STATE, showCardsAs: 'image'})
    expect(secondToggle).toEqual({...INITIAL_STATE, showCardsAs: 'list'})
  })
})
