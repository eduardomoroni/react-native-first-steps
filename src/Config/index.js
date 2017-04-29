import './I18n/I18n'
import initFirebase from './Firebase/Firebase'
import AER from '../Assets/Cards/AER-X.json'
import { defaultConfig } from './Realm'
import { importMTGJSON, deleteAll, changeRealm } from '../Realm/RealmService'
export * from './Store/CreateStore'

export default () => {
  changeRealm(defaultConfig)
  deleteAll()
  importMTGJSON(AER)
  initFirebase()
}
