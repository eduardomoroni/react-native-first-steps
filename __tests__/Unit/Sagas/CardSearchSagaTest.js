import { call, put, select } from 'redux-saga/effects'
import { findCardsFromForm, sortCards } from '../../../src/Services/CardService'
import { searchForCardSaga, sortCardSaga, cardsSelector } from '../../../src/Sagas/CardSearchSaga'
import { showCards, searchForCards, sortCards as sortAction } from '../../../src/Redux/Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

jest.mock('react-native-router-flux', () => {
  return { Actions: {listCards: () => 'Foo'} }
})

const sagaDone = { done: true, value: undefined }
const cardSearchFormExample = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}
const searchForCardsAction = searchForCards(cardSearchFormExample)

describe('Card Search Saga Test', () => {
  it('CardSearch Happy Path', () => {
    const cardsMock = ['a', 'b'] // Actually the cards is a RealmObject, but it has length prop
    const generator = searchForCardSaga(searchForCardsAction)
    const step = (lastYield) => generator.next(lastYield)

    expect(step().value).toMatchObject(call(findCardsFromForm, searchForCardsAction.payload))
    expect(step(cardsMock).value).toMatchObject(call(NavigationActions['listCards'], {cards: cardsMock}))
    expect(step()).toMatchObject(sagaDone)
  })

  it('CardSearch Return empty result', () => {
    const cardsMock = []
    const generator = searchForCardSaga(searchForCardsAction)
    const step = (lastYield) => generator.next(lastYield)

    expect(step(cardsMock).value).toEqual(call(findCardsFromForm, searchForCardsAction.payload))
    expect(step(cardsMock)).toEqual(sagaDone)
  })

  it('Should sort card search results', () => {
    const sortBy = {field: 'name', reverse: true}
    const action = sortAction(sortBy)
    const generator = sortCardSaga(action)
    const step = (lastYield) => generator.next(lastYield)

    expect(step().value).toEqual(select(cardsSelector))
    const mockedCards = ['a', 'b']
    expect(step(mockedCards).value).toEqual(call(sortCards, mockedCards, action.payload))
    expect(step(mockedCards).value).toEqual(put(showCards(mockedCards)))
    expect(step()).toEqual(sagaDone)
  })
})
