import { loginUserSaga } from './LoginSaga'
import { searchForCardSaga, sortCardSaga } from './CardSearchSaga'
import { takeLatest } from 'redux-saga/effects'
import {
  LOGIN_USER,
  SEARCH_FOR_CARDS,
  SORT_CARDS
} from '../Redux/Types'

export default function * root () {
  yield [
    takeLatest(LOGIN_USER, loginUserSaga),
    takeLatest(SEARCH_FOR_CARDS, searchForCardSaga),
    takeLatest(SORT_CARDS, sortCardSaga)
  ]
}
