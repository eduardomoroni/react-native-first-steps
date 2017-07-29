import AerialModification from '../../../Assets/Stubs/AerialModification.json'
import PlanarBridge from '../../../Assets/Stubs/PlanarBridge.json'
import { jsonToRealmCard, inheritanceToArray } from '../../../../src/Realm/Conversion/JsonCard'
import { AerialModificationStub, PlanarBridgeStub } from '../../../Assets/Stubs/CardStubs'

describe('Json to Realm Representation', () => {
  it('Should convert a Json Object to a Realm Valid Object', () => {
    expect(jsonToRealmCard(AerialModification)).toEqual(AerialModificationStub)
  })

  it('Test', () => {
    expect(jsonToRealmCard(PlanarBridge)).toEqual(PlanarBridgeStub)
  })

  // Due https://github.com/realm/realm-js/issues/860 - Realm doesnt have list of primitives
  it('Should convert inheritance Realm representation to string array', () => {
    const inheritanceRepresentation = {
      '0': {'type': 'TypeTest'},
      '1': {'subtypes': 'SubTypeTest'},
      '2': {'colors': 'ColorTest'},
      '3': {'colorIdentity': 'ColorIdTest'},
      '4': {'printings': 'PRT'}
    }
    const arrayRepresentation = ['TypeTest', 'SubTypeTest', 'ColorTest', 'ColorIdTest', 'PRT']
    expect(inheritanceToArray(inheritanceRepresentation)).toEqual(arrayRepresentation)
  })

  it('Should string array to convert inheritance Realm representation', () => {
    const objWithStringArray = {
      printings: ['AER', 'EDM']
    }

    const realmRepresentation = {'printings': [{'printing': 'AER'}, {'printing': 'EDM'}]}
    expect(jsonToRealmCard(objWithStringArray)).toEqual(realmRepresentation)
  })
})
