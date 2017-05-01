import { call, put } from 'redux-saga/effects'
import { loginUserSaga } from '../../../src/Sagas/LoginSaga'
import {
  loginUser,
  loginUserSuccess,
  loginUserFailed
} from '../../../src/Redux/Actions'
import * as LoginService from '../../../src/Services/LoginService'

const sagaDone = { done: true, value: undefined }
const loginAction = loginUser()
const accessToken = { token: 'fake' }
const error = 'Login Canceled'

describe('Login Sagas Test', () => {
  it('Sign in perfect flow', () => {
    const generator = loginUserSaga(loginAction)
    const step = (lastYield) => generator.next(lastYield)

    expect(step().value).toEqual(call(LoginService.facebookLogin))
    expect(step().value).toEqual(call(LoginService.getAccessToken))
    expect(step(accessToken).value).toEqual(put(loginUserSuccess(accessToken)))
    expect(step()).toEqual(sagaDone)
  })

  it('Sign in flow should call signup flow on error', () => {
    const generator = loginUserSaga(loginAction)
    const step = (lastYield) => generator.next(lastYield)

    try {
      expect(step().value).toEqual(call(LoginService.facebookLogin))
      expect(generator.throw(error).value).toEqual(put(loginUserFailed(error)))
    } finally {
      expect(generator.next()).toEqual(sagaDone)
    }
  })
})
