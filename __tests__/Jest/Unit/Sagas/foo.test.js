import { Actions as NavigationActions } from 'react-native-router-flux'
import { call, put } from 'redux-saga/effects'

jest.mock('react-native-router-flux', () => {
  return { Actions: {listCards: () => 'Foos'} }
})

import { findCardsFromForm } from '../../../../src/Realm/RealmService'
import { searchForCardSaga } from '../../../../src/Sagas/CardSearchSaga'
import { showCards, searchForCards } from '../../../../src/Redux/Actions'

const sagaDone = { done: true, value: undefined }
const cardSearchFormExample = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}
const searchForCardsAction = searchForCards(cardSearchFormExample)

it.only('CardSearch Happy Path', () => {
  const cardsMock = ['a', 'b'] // Actually the cards is a RealmObject, but it has length prop
  const generator = searchForCardSaga(searchForCardsAction)
  const step = (lastYield) => generator.next(lastYield)

  expect(step().value).toMatchObject(call(findCardsFromForm, searchForCardsAction.payload))
  expect(step(cardsMock).value).toMatchObject(put(showCards(cardsMock)))
  expect(step().value).toMatchObject(call(NavigationActions['listCards']))
  expect(step()).toMatchObject(sagaDone)
})
