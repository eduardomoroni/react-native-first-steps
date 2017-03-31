import { sortCards, findCardsFromForm } from '../../../src/Realm/RealmService'
import { schemas } from '../../../src/Config/Realm'
import { jsonToRealmCard } from '../../../src/Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from '../../../src/Transform/PlaceholderToSymbol'
import { initRealmDb, realm } from '../../../src/Config/Realm'
import AER from '../../../src/Assets/Cards/AER-X.json'
// import Realm from 'realm'

const sampleQueryObject = {
  cardType: 'Instant',
  cardText: 'Counter',
  cardColors: ['Blue'],
  cardPrintings: ['M10', 'AER']
}

describe.only('Realm Service', () => {
  beforeAll(() => {
    // PRECISO DAR UM REWIRE NISSO
    // const realmConfig = {path: '/realm-object-database/INTEGRATION_TEST_DB.realm', schema: schemas}
    // const realm = new Realm(realmConfig)

    // realm.write(() => {
    //   realm.deleteAll()

    //   AER.cards.forEach((card) => {
    //     delete card.printings // This field is not working, non patience to figure out
    //     card.text = placeholdersToSymbols(card.text)
    //     realm.create('Card', jsonToRealmCard(card), true)
    //   })
    // })

    initRealmDb()
  })

  it('Should search with multiple colors', () => {
    const negate = findCardsFromForm(sampleQueryObject)[0]
    expect(negate.name).toEqual('Negate')
  })
})
