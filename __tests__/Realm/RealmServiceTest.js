import test from 'ava'
import { createQuery, getQueryArgs, getCards } from '../../src/Realm/RealmService'
import { initRealmDb } from '../../src/Config/Realm'
import { RealmObjectCardAsJson } from '../Assets/Stubs/SampleCardStub'

const sampleQueryObject = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle'
}

// THIS IS COMPLETLY WRONG, WE SHOULD INITIALIZE A FAKE SERVER
test.before(t => {
  initRealmDb()
})

test('Should map CardSearchForm to a valid Realm Query', t => {
  const expectedQuery = ' name CONTAINS[c] $0 AND types.type = $1 AND subtypes.subType = $2 AND text CONTAINS[c] $3'
  t.deepEqual(createQuery(sampleQueryObject), expectedQuery)
})

test('Should map CardSearchForm to a array of query objects', t => {
  const expectedArray = ['Aerial M', 'Enchantment', 'Aura', 'Vehicle']
  t.deepEqual(getQueryArgs(sampleQueryObject), expectedArray)
})

test('Should query Realm objects based on CardSearchForm', t => {
  const query = createQuery(sampleQueryObject)
  const queryArgs = getQueryArgs(sampleQueryObject)
  const AerialModification = getCards(query, queryArgs)[0]

  t.is(JSON.stringify(AerialModification), JSON.stringify(RealmObjectCardAsJson),
      'I need to know how to assert RealmObject')
})
