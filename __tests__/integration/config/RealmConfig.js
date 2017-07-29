// FIXME: Jest roda os testes de integração em paralelo, o que faz com que diferentes
//        processos usem o realm ao mesmo tempo.
// TODO: Procurar uma maneira melhor de lidar com isto

import { schemas } from '../../../src/configuration/realm'
import seed from '../../../src/assets/cards/AER-X.json'
import * as CardService from '../../../src/services/CardService'
import { changeRealm, deleteAll, closeRealm } from '../../../src/services/realm/RealmService'

let processUsingRealm: number = 0
const nobodyIsUsingRealm = () => processUsingRealm === 0

export const initializeDatabase = (databaseName) => {
  if (nobodyIsUsingRealm()) {
    changeRealm({ schema: schemas, path: `database/TEST_${databaseName}.realm` })
    CardService.importMTGJSON(seed)
  }

  processUsingRealm++
}

export const cleanDatabase = () => {
  processUsingRealm--

  if (nobodyIsUsingRealm()) {
    deleteAll()
    closeRealm()
  }
}
