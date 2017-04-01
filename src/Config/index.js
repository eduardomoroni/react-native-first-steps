import './I18n/I18n'
import initFirebase from './Firebase'
import AER from '../Assets/Cards/AER-X.json'
import { importMTGJSON, deleteAll } from '../Realm/RealmService'
export * from './CreateStore'

export default () => {
  deleteAll()
  importMTGJSON(AER)
  initFirebase()
}
