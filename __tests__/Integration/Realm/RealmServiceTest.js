import { findCardsFromForm, importMTGJSON, deleteAll, changeRealm } from '../../../src/Realm/RealmService'
import { schemas } from '../../../src/Config/Realm'
import AER from '../../../src/Assets/Cards/AER-X.json'

const sampleQueryObject = {
  cardType: 'Instant',
  cardText: 'Counter',
  cardColors: ['Blue'],
  cardPrintings: ['M10', 'AER']
}

describe.only('Realm Service', () => {
  beforeAll(() => {
    changeRealm({ path: 'database/INTEGRATION_TEST.realm', schemas: schemas })
    deleteAll()
    importMTGJSON(AER)
  })

  it('Should search with multiple colors', () => {
    const negate = findCardsFromForm(sampleQueryObject)[0]
    expect(negate.name).toEqual('Negate')
  })
})
