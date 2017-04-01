import { findCardsFromForm, initRealmDb } from '../../../src/Realm/RealmService'

const sampleQueryObject = {
  cardType: 'Instant',
  cardText: 'Counter',
  cardColors: ['Blue'],
  cardPrintings: ['M10', 'AER']
}

describe.only('Realm Service', () => {
  beforeAll(() => {
    initRealmDb()
  })

  it('Should search with multiple colors', () => {
    const negate = findCardsFromForm(sampleQueryObject)[0]
    expect(negate.name).toEqual('Negate')
  })
})
