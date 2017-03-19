import { createQuery, createQueryArgs, findCards, findCardsFromForm } from '../../../src/Realm/RealmService'
import { initRealmDb } from '../../../src/Config/Realm'

const sampleQueryObject = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}

it('Should map CardSearchForm to a valid Realm Query', () => {
  const expectedQuery = ' name CONTAINS[c] $0 AND types.type = $1 AND subtypes.subType = $2 AND text CONTAINS[c] $3'
  expect(createQuery(sampleQueryObject)).toEqual(expectedQuery)
})

it('Should map CardSearchForm to a array of query objects', () => {
  const expectedArray = ['Aerial M', 'Enchantment', 'Aura', 'Vehicle']
  expect(createQueryArgs(sampleQueryObject)).toEqual(expectedArray)
})

// This test is pretty wrong, need to find a way to test better
it('Should query Realm objects based on CardSearchForm', () => {
  initRealmDb()

  const query = createQuery(sampleQueryObject)
  const queryArgs = createQueryArgs(sampleQueryObject)
  const AerialModification = findCards(query, queryArgs)[0]

  expect(findCardsFromForm(sampleQueryObject)[0]).toEqual(AerialModification)
})
