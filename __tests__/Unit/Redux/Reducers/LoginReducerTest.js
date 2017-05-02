import LoginReducer, { INITIAL_STATE } from '../../../../src/Redux/Reducers/LoginReducer'
import {
  loginUser,
  loginUserFailed,
  logoutUser
} from '../../../../src/Redux/Actions/LoginActions'

describe('Login Reducer Tests', () => {
  it('Handle Login Fail', () => {
    const errorObj = {
      status: 404,
      accessToken: 'Not Found'
    }

    const action = loginUserFailed(errorObj)
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, error: errorObj })
  })

  it('Should Log In User', () => {
    const action = loginUser()
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE, loading: true })
  })

  // TODO: This action is being handled twice
  it('Should Log Out User', () => {
    const action = logoutUser()
    const state = LoginReducer(INITIAL_STATE, action)

    expect(state).toEqual({ ...INITIAL_STATE })
  })
})
