import test from 'ava'
import { call, put, select } from 'redux-saga/effects'
import { findCardsFromForm, sortCards } from '../../../src/Realm/RealmService'
import { searchForCardSaga, sortCardSaga, cardsSelector } from '../../../src/Sagas/CardSearchSaga'
import { showCards, searchForCards, sortCards as sortAction } from '../../../src/Redux/Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

const sagaDone = { done: true, value: undefined }
const cardSearchFormExample = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}
const searchForCardsAction = searchForCards(cardSearchFormExample)

test('CardSearch Happy Path', t => {
  const cardsMock = ['a', 'b'] // Actually the cards is a RealmObject, but it has length prop
  const generator = searchForCardSaga(searchForCardsAction)
  const step = (lastYield) => generator.next(lastYield)

  t.deepEqual(step().value, call(findCardsFromForm, searchForCardsAction.payload))
  t.deepEqual(step(cardsMock).value, put(showCards(cardsMock)))
  t.deepEqual(step().value, call(NavigationActions['listCards']))
  t.deepEqual(step(), sagaDone)
})

test('CardSearch Return empty result', t => {
  const cardsMock = []
  const generator = searchForCardSaga(searchForCardsAction)
  const step = (lastYield) => generator.next(lastYield)

  try {
    t.deepEqual(step().value, call(findCardsFromForm, searchForCardsAction.payload))
  } finally {
    t.deepEqual(step(cardsMock), sagaDone)
  }
}, 'I should do a proper treatment on this case')

test('Should sort card search results', t => {
  const sortBy = {field: 'name', reverse: true}
  const action = sortAction(sortBy)
  const generator = sortCardSaga(action)
  const step = (lastYield) => generator.next(lastYield)

  t.deepEqual(step().value, select(cardsSelector))
  const mockedCards = ['a', 'b']
  t.deepEqual(step(mockedCards).value, call(sortCards, mockedCards, action.payload))
  t.deepEqual(step(mockedCards).value, put(showCards(mockedCards)))
  t.deepEqual(step(), sagaDone)
})
