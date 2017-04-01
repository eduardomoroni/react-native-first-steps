import './I18n/I18n'
import initFirebase from './Firebase'
import { initRealmDb } from '../Realm/RealmService'
export * from './CreateStore'

export default () => {
  initRealmDb()
  initFirebase()
}
