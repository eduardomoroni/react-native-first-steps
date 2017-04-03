import {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery,
  convertCardFormToRealmQueries,
  arrayToQuery
} from '../../../../src/Realm/Conversion/CardForm'

const sampleQueryObject = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle',
  cardColors: ['White', 'Green'],
  cardPrintings: ['AER', 'EDM']
}

const fullForm = {
  cardArtist: 'arta',
  cardFlavorText: 'texto ilust',
  cardCollectionNumber: '1',
  cardType: 'Creature',
  cardSubType: 'Artificer',
  cardText: '12312',
  cardName: '123123',
  cardToughness: { number: 2, operator: '>' },
  cardPower: { number: 1, operator: '=' },
  cardCMC: { number: 3, operator: '<' },
  cardColors: [ 'blue', 'red' ],
  cardFormat: [ 'modern', 'commander' ],
  cardSet: [ 'pMPR', 'STH' ],
  cardRarity: [ 'mythic' ],
  cardColorsIdentity: [ 'blue' ]
}

describe('Should map CardSearchForm', () => {
  it.only('with all field to valid Realm Query with no queryArgs', () => {
    const realmQueries = convertCardFormToRealmQueries(fullForm)
    expect(realmQueries.cardArtist).toEqual(`artist CONTAINS[c] "${fullForm.cardArtist}"`)
    expect(realmQueries.cardFlavorText).toEqual('flavor CONTAINS[c] ' + fullForm.cardFlavorText)
    expect(realmQueries.cardCollectionNumber).toEqual('number = ' + fullForm.cardCollectionNumber)
    expect(realmQueries.cardType).toEqual('types.type = ' + fullForm.cardType)
    expect(realmQueries.cardSubType).toEqual('subtypes.subType = ' + fullForm.cardSubType)
    expect(realmQueries.cardText).toEqual('text CONTAINS[c] ' + fullForm.cardText)
    expect(realmQueries.cardName).toEqual('name CONTAINS[c] ' + fullForm.cardName)
    expect(realmQueries.cardToughness).toEqual('toughness > 2')
    expect(realmQueries.cardPower).toEqual('power = 1')
    expect(realmQueries.cardCMC).toEqual('cmc < 3')
    expect(realmQueries.cardColors).toEqual('colors.color = blue OR colors.color = red')
    expect(realmQueries.cardFormat).toEqual(undefined)
    expect(realmQueries.cardSet).toEqual('printings.printing = pMPR OR printings.printing = STH')
    expect(realmQueries.cardRarity).toEqual('rarity = mythic')
    expect(realmQueries.cardColorsIdentity).toEqual('colorIdentity.colorIdentity = blue')
  })

  it('should convert an array to real query', () => {
    const array = ['one', 'two', 'three']
    const selector = 'foo ='
    const operator = 'OR'
    expect(arrayToQuery(array, selector, operator)).toEqual('foo = one OR foo = two OR foo = three')
  })

  it('to a realm query with only simple params', () => {
    const expectedQuery = ' name CONTAINS[c] $0 AND types.type = $1 AND subtypes.subType = $2 AND text CONTAINS[c] $3'
    expect(simpleParamQuery(sampleQueryObject)).toEqual(expectedQuery)
  })

  it('to a array of query objects with only simple params', () => {
    const expectedArray = ['Aerial M', 'Enchantment', 'Aura', 'Vehicle']
    expect(simpleParamQueryArgs(sampleQueryObject)).toEqual(expectedArray)
  })

  it('to a realm query with only composed params', () => {
    const expectedQuery = ' colors.color = $0 AND colors.color = $1 AND printings.printing = $2 AND printings.printing = $3'
    expect(composedParamQuery(sampleQueryObject)).toEqual(expectedQuery)
  })

  it('to a array of query objects with only composed params', () => {
    const expectedArray = ['White', 'Green', 'AER', 'EDM']
    expect(composedParamQueryArgs(sampleQueryObject)).toEqual(expectedArray)
  })
})
