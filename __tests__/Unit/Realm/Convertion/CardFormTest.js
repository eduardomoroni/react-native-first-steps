import {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery
} from '../../../../src/Realm/Conversion/CardForm'

const sampleQueryObject = {
  cardName: 'Aerial M',
  cardType: 'Enchantment',
  cardSubType: 'Aura',
  cardText: 'Vehicle',
  cardColors: ['White', 'Green'],
  cardPrintings: ['AER', 'EDM']
}

describe('Should map CardSearchForm ', () => {
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
