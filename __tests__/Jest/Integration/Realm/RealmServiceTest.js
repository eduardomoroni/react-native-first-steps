import { createQuery, createQueryArgs, findCards, findCardsFromForm } from '../../../../src/Realm/RealmService'
import { schemas } from '../../../../src/Config/Realm'
import { jsonToRealmCard } from '../../../../src/Realm/Conversion/Realm-utils'
import { placeholdersToSymbols } from '../../../../src/Transform/PlaceholderToSymbol'
import AER from '../../../../src/Assets/Cards/AER-X.json'
import Realm from 'realm'

const sampleQueryObject = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle',
  cardColors: ['White']
}

describe('Realm Service', () => {
  beforeAll(() => {
    const realmConfig = {path: 'INTEGRATION_TEST_DB.realm', schema: schemas}
    const realm = new Realm(realmConfig)

    realm.write(() => {
      realm.deleteAll()

      AER.cards.forEach((card) => {
        delete card.printings // This field is not working, non patience to figure out
        card.text = placeholdersToSymbols(card.text)
        realm.create('Card', jsonToRealmCard(card), true)
      })
    })
  })

  it('Should map CardSearchForm to a valid Realm Query', () => {
    const expectedQuery = ' name CONTAINS[c] $0 AND types.type = $1 AND subtypes.subType = $2 AND text CONTAINS[c] $3 AND colors.color CONTAINS[c] $4'
    expect(createQuery(sampleQueryObject)).toEqual(expectedQuery)
  })

  it('Should map CardSearchForm to a array of query objects', () => {
    const expectedArray = ['Aerial M', 'Enchantment', 'Aura', 'Vehicle', ['White']]
    expect(createQueryArgs(sampleQueryObject)).toEqual(expectedArray)
  })

  // This test is pretty wrong, need to find a way to test better
  it('Should query Realm objects based on CardSearchForm', () => {

    const query = createQuery(sampleQueryObject)
    const queryArgs = createQueryArgs(sampleQueryObject)
    const AerialModification = findCards(query, queryArgs)[0]

    expect(findCardsFromForm(sampleQueryObject)[0]).toEqual(AerialModification)
  })

  it.only('Testing Query', () => {
    // const query = ' name CONTAINS[c] $0 AND types.type = $1 AND subtypes.subType = $2 AND text CONTAINS[c] $3 AND colors.color CONTAINS[c] $4'
    // const queryArgs = ['Aerial M', 'Enchantment', 'Aura', 'Vehicle', 'White']

    const query = 'colors.color = $0 AND colors.color = $1'
    const queryArgs = ['White', 'Red']

    const AerialModification = findCards(query, queryArgs)[0]
    // console.log(AerialModification)
  })

})
