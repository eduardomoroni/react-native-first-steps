import { findCardsFromForm, importMTGJSON, deleteAll, changeRealm, newFindCards } from '../../../src/Realm/RealmService'
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
  cardType: 'Artifact', // Is this a array of values?
  cardSubType: 'Thopter',
  cardText: 'Flying',
  cardName: 'Ornithopter',
  cardToughness: { number: 2, operator: '>=' },
  cardPower: { number: 0, operator: '=' },
  cardCMC: { number: 2, operator: '<' },
  cardFormat: [ 'Legacy', 'Commander' ], // Legalities
  cardSet: [ 'ATQ', 'MRD' ],
  cardRarity: [ 'Uncommon' ]
}

describe('Realm Service', () => {
  beforeAll(() => {
    // changeRealm({ path: 'INTEGRATION_TEST.realm', schemas: schemas })
    // deleteAll()
    importMTGJSON(AER)
  })

  it('Should filter realm results based on ALL form fields', () => {
    expect(newFindCards(ornithopterForm)[0].name).toEqual('Ornithopter')
    expect(newFindCards(negateForm)[0].name).toEqual('Negate')
  })
})
