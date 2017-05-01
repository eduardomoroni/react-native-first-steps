import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './LoginReducer'
import CardSearchReducer from './CardSearchReducer'

export default combineReducers({
  form: formReducer,
  auth: AuthReducer,
  cardSearch: CardSearchReducer
})
