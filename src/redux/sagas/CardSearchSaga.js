import { put, call, select } from 'redux-saga/effects'
import { findCardsFromForm, sortCards } from '../../services/CardService'
import { showCards } from '../actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

export const cardsSelector = state => state.cardSearch.cards

export function * searchForCardSaga (action) {
  try {
    const cards = yield call(findCardsFromForm, action.payload)

    if (cards.length) {
      yield put(showCards(cards))
      yield call(NavigationActions['listCards'])
    } else { // Throwing exception inside a try-catch?
      throw new NoMatchingException()
    }
  } catch (e) {
    console.log('Exception occurred: ', e)
    // TODO: Here we should show a modal as error
  }
}

export function * sortCardSaga (action) {
  const cards = yield select(cardsSelector)
  const sortedCards = yield call(sortCards, cards, action.payload)
  yield put(showCards(sortedCards))
}

function NoMatchingException () {
  this.error = 'No card Matching'
}
