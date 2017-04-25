import CardSearchReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/CardSearchReducer'
import { showCards, toggleShowCardText, sortCards, switchDisplayMode } from '../../../../src/Redux/Actions/CardSearchActions'

describe('CardSearchReducer Tests', () => {
  it('Should show cards fetched', () => {
    const cards = ['a', 'b']
    const action = showCards(cards)
    const state = CardSearchReducer(INITIAL_STATE, action)

    expect(state).toEqual({...INITIAL_STATE, cards})
  })

  it('Should hide card text on display', () => {
    const payload = {showCardText: false}
    const action = toggleShowCardText(payload.showCardText)
    const state = CardSearchReducer(INITIAL_STATE, action)

    expect(state).toEqual({...INITIAL_STATE, ...payload})
  })

  it('Should sort cards fetched', () => {
    const payload = {field: 'color', reversed: true}
    const action = sortCards(payload)
    const state = CardSearchReducer(INITIAL_STATE, action)

    expect(state).toEqual({...INITIAL_STATE, sortBy: payload})
  })

  it('Should toggle display mode', () => {
    const actionImage = switchDisplayMode('image')
    const firstToggle = CardSearchReducer(INITIAL_STATE, actionImage)
    const actionList = switchDisplayMode('list')
    const secondToggle = CardSearchReducer(INITIAL_STATE, actionList)

    expect(firstToggle).toEqual({...INITIAL_STATE, showCardsAs: 'image'})
    expect(secondToggle).toEqual({...INITIAL_STATE, showCardsAs: 'list'})
  })
})
