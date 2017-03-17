import { createQuery, createQueryArgs } from '../../src/Realm/RealmService'

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
