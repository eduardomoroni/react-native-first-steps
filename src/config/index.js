import './i18n/I18n'
import initFirebase from './firebase/Firebase'
import AER from '../assets/cards/AER-X.json'
import { defaultConfig } from './realm'
import { deleteAll, changeRealm } from '../realm/RealmService'
import { importMTGJSON } from '../services/CardService'
export * from './store/CreateStore'

export const initialConfig = () => {
  changeRealm(defaultConfig)
  deleteAll()
  importMTGJSON(AER)
  initFirebase()
}
