import { call, put, select } from 'redux-saga/effects'
import { findCardsFromForm } from '../../src/Realm/RealmService'
import { searchForCardSaga, sortCardSaga, cardsSelector } from '../../src/Sagas/CardSearchSaga'
import { showCards, searchForCards, sortCards } from '../../src/Redux/Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

const sagaDone = { done: true, value: undefined }
const cardSearchFormExample = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}
const searchForCardsAction = searchForCards(cardSearchFormExample)

it('CardSearch Happy Path', () => {
  const cardsMock = ['a', 'b'] // Actually the cards is a RealmObject, but it has length prop
  const generator = searchForCardSaga(searchForCardsAction)
  const step = (lastYield) => generator.next(lastYield)

  expect(step().value).toEqual(call(findCardsFromForm, searchForCardsAction.payload))
  expect(step(cardsMock).value).toEqual(put(showCards(cardsMock)))
  expect(step().value).toEqual(call(NavigationActions['listCards']))
  expect(step()).toEqual(sagaDone)
})

it('CardSearch Return empty result', t => {
  const cardsMock = []
  const generator = searchForCardSaga(searchForCardsAction)
  const step = (lastYield) => generator.next(lastYield)

  try {
    expect(step().value).toEqual(call(findCardsFromForm, searchForCardsAction.payload))
  } finally {
    expect(step(cardsMock)).toEqual(sagaDone)
  }
}, 'I should do a proper treatment on this case')

it('Should sort card result', () => {
  const sortBy = {field: 'name', reversed: true}
  const generator = sortCardSaga(sortCards(sortBy))
  const step = (lastYieldReturn) => generator.next(lastYieldReturn)

  expect(step()).toEqual(select(cardsSelector))
})
