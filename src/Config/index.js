import './I18n/I18n'
import initFirebase from './Firebase'
import { initRealmDb } from './Realm'
export * from './CreateStore'

export default () => {
  initFirebase()
  initRealmDb()
}
