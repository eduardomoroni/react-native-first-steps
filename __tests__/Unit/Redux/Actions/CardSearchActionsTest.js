import { searchForCards, showCards, toggleShowCardText, sortCards, switchDisplayMode } from '../../../../src/Redux/Actions/CardSearchActions'
import { SEARCH_FOR_CARDS, SHOW_CARDS, SORT_CARDS, TOGGLE_SHOW_CARD_TEXT, SWITCH_DISPLAY_MODE } from '../../../../src/Redux/Types'

const cardForm = {cardName: 'Yu-gi-oh'}

describe('Card Search Action Creators', () => {
  it('Action for search cards', () => {
    const expectedAction = {type: SEARCH_FOR_CARDS, payload: cardForm}
    expect(searchForCards(cardForm)).toEqual(expectedAction)
  })

  it('Action for show fetched cards', () => {
    const expectedAction = {type: SHOW_CARDS, payload: cardForm}
    expect(showCards(cardForm)).toEqual(expectedAction)
  })

  it('Action for toggle show card text', () => {
    const expectedAction = {type: TOGGLE_SHOW_CARD_TEXT, payload: {showCardText: false}}
    expect(toggleShowCardText(false)).toEqual(expectedAction)
  })

  it('Action for sort card', () => {
    const expectedAction = {type: SORT_CARDS, payload: {sortBy: {field: 'name', reversed: true}}}
    expect(sortCards({field: 'name', reversed: true})).toEqual(expectedAction)
  })

  it('Action for change card results display mode', () => {
    const expectedAction = {type: SWITCH_DISPLAY_MODE, payload: {showCardsAs: 'list'}}
    expect(switchDisplayMode('list')).toEqual(expectedAction)
  })
})
