import { findCardsFromForm, importMTGJSON, deleteAll, changeRealm } from '../../../src/Realm/RealmService'
import { schemas } from '../../../src/Config/Realm'
import AER from '../../../src/Assets/Cards/AER-X.json'

const negateForm = {
  cardArtist: 'zack',
  cardFlavorText: 'fascinating',
  cardCollectionNumber: '40',
  cardType: 'Instant',
  cardText: 'Counter',
  cardName: 'negate',
  cardCMC: { number: 2, operator: '=' },
  cardColors: [ 'Blue', 'Red' ],
  cardFormat: [ 'Modern', 'Standard' ],
  cardSet: [ 'M11', 'AER' ],
  cardRarity: [ 'Common' ],
  cardColorsIdentity: [ 'U' ]
}

const ornithopterForm = {
  cardArtist: 'Kollros',
  cardFlavorText: 'wonder',
  cardCollectionNumber: '167',
  cardType: 'Artifact',
  cardSubType: 'Thopter',
  cardText: 'Flying',
  cardName: 'Ornithopter',
  cardToughness: { number: 2, operator: '>=' },
  cardPower: { number: 0, operator: '=' },
  cardCMC: { number: 2, operator: '<' },
  cardFormat: [ 'Legacy', 'Commander' ], // TODO: TEST THIS
  cardSet: [ 'ATQ', 'MRD' ],
  cardRarity: [ 'Uncommon' ]
}

describe('Realm Service', () => {
  beforeAll(() => {
    changeRealm({ schema: schemas, path: 'database/INTEGRATION_TEST.realm' })
    deleteAll()
    importMTGJSON(AER)
  })

  afterAll(() => {
    deleteAll()
  })

  it('Should filter realm results based on ALL form fields', () => {
    expect(findCardsFromForm(ornithopterForm)[0].name).toEqual('Ornithopter')
    expect(findCardsFromForm(negateForm)[0].name).toEqual('Negate')
  })
})
