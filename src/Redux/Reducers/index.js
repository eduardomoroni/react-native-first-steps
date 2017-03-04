import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'

export default combineReducers({
  form: formReducer, // This one should remain as form:
  auth: AuthReducer,
  user: UserReducer
})
