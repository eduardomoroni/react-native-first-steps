import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './LoginReducer'
import UserReducer from './UserReducer'
import CardSearchReducer from './CardSearchReducer'

export default combineReducers({
  form: formReducer,
  user: UserReducer,
  auth: AuthReducer,
  cardSearch: CardSearchReducer
})
