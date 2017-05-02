import './I18n/I18n'
import KittenUISetup from './KittenUI'
import initFirebase from './Firebase/Firebase'
import AER from '../Assets/Cards/AER-X.json'
import { defaultConfig } from './Realm'
import { deleteAll, changeRealm } from '../Realm/RealmService'
import { importMTGJSON } from '../Services/CardService'
export * from './Store/CreateStore'

export const initialConfig = () => {
  changeRealm(defaultConfig)
  deleteAll()
  importMTGJSON(AER)
  initFirebase()
  KittenUISetup.setTheme('material')
}
