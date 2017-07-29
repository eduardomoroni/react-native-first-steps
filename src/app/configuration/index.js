import './i18n/I18n' // TODO: Is this a good practice?
import initFirebase from './Firebase'
import AER from '../../assets/cards/AER-X.json'
import { defaultConfig } from './realm'
import { deleteAll, changeRealm } from '../../services/realm'
import { importMTGJSON } from '../../services/CardService'
import { createMtgxStore } from './Store'

const initialConfig = () => {
  changeRealm(defaultConfig)
  deleteAll()
  importMTGJSON(AER)
  initFirebase()
}

export {
  createMtgxStore,
  initialConfig
}
