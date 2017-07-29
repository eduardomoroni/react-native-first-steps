import { rulingsTextAsArray } from '../../../../src/realm/conversion/RealmRepresentation'
import RealmResult from '../../../assets/Stubs/RealmResult.json'

describe('RealmRepresentation', () => {
  it('Should get all card rulings as array of String', () => {
    const rulings = RealmResult[0].rulings
    const expectedRulings = [rulings[0].text, rulings[1].text]
    expect(rulingsTextAsArray(rulings)).toEqual(expectedRulings)
  })
})
