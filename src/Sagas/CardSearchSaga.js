import { put, call } from 'redux-saga/effects'
import { findCardsFromForm } from '../Realm/RealmService'
import { showCards } from '../Redux/Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

export function * searchForCardSaga (action) {
  try { // Handle case with none is returned
    const cards = yield call(findCardsFromForm, action.payload)

    if (cards.length) {
      yield put(showCards(cards))
      yield call(NavigationActions['listCards'])
    } else {
      throw new NoMatchingException()
    }
  } catch (e) {
    console.log('Exception occurred: ', e)
    // Here we should show a modal as error
  }
}

function NoMatchingException () {
  this.error = 'No card Matching'
}
