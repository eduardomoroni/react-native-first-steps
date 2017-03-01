import { loginUserSaga, signupUserSaga } from './LoginSaga'
import { takeLatest } from 'redux-saga/effects'
import {
  LOGIN_USER,
  SIGN_UP_USER
} from '../Redux/Types'

export default function * root () {
  yield [
    takeLatest(LOGIN_USER, loginUserSaga),
    takeLatest(SIGN_UP_USER, signupUserSaga)
  ]
}
