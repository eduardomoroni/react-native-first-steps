// FIXME: Jest roda os testes de integração em paralelo, o que faz com que diferentes
//        processos usem o Realm ao mesmo tempo.
// TODO: Procurar uma maneira melhor de lidar com isto

import { schemas } from '../../../src/Config/Realm'
import seed from '../../../src/Assets/Cards/AER-X.json'
import * as CardService from '../../../src/Services/CardService'
import { changeRealm, deleteAll, closeRealm } from '../../../src/Realm/RealmService'

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
