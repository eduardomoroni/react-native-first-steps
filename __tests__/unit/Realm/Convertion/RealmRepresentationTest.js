import { rulingsTextAsArray } from '../../../../src/Realm/Conversion/RealmRepresentation'
import RealmResult from '../../../Assets/Stubs/RealmResult.json'

describe('RealmRepresentation', () => {
  it('Should get all card rulings as array of String', () => {
    const rulings = RealmResult[0].rulings
    const expectedRulings = [rulings[0].text, rulings[1].text]
    expect(rulingsTextAsArray(rulings)).toEqual(expectedRulings)
  })
})
