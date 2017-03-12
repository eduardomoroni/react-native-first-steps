import { loginUserSaga, signupUserSaga } from './LoginSaga'
import { searchForCardSaga } from './CardSearchSaga'
import { takeLatest } from 'redux-saga/effects'
import {
  LOGIN_USER,
  SIGN_UP_USER,
  SEARCH_FOR_CARDS
} from '../Redux/Types'

export default function * root () {
  yield [
    takeLatest(LOGIN_USER, loginUserSaga),
    takeLatest(SIGN_UP_USER, signupUserSaga),
    takeLatest(SEARCH_FOR_CARDS, searchForCardSaga)
  ]
}
