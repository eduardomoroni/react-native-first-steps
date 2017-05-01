import { put, call } from 'redux-saga/effects'
import { facebookLogin, getAccessToken } from '../Services/LoginService'
import { loginUserSuccess, loginUserFailed } from '../Redux/Actions'

export function * loginUserSaga () {
  try {
    yield call(facebookLogin)
    const token = yield call(getAccessToken)
    yield put(loginUserSuccess(token))
  } catch (message) {
    yield put(loginUserFailed(message))
  }
}
