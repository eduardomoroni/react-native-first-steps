import AerialModification from '../../../assets/Stubs/AerialModification.json'
import PlanarBridge from '../../../assets/Stubs/PlanarBridge.json'
import { jsonToRealmCard, inheritanceToArray } from '../../../../src/services/realm/conversion/JsonCard'
import { AerialModificationStub, PlanarBridgeStub } from '../../../assets/Stubs/CardStubs'

describe('Json to realm Representation', () => {
  it('Should convert a Json Object to a realm Valid Object', () => {
    expect(jsonToRealmCard(AerialModification)).toEqual(AerialModificationStub)
  })

  it('Test', () => {
    expect(jsonToRealmCard(PlanarBridge)).toEqual(PlanarBridgeStub)
  })

  // Due https://github.com/realm/realm-js/issues/860 - realm doesnt have list of primitives
  it('Should convert inheritance realm representation to string array', () => {
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

  it('Should string array to convert inheritance realm representation', () => {
    const objWithStringArray = {
      printings: ['AER', 'EDM']
    }

    const realmRepresentation = {'printings': [{'printing': 'AER'}, {'printing': 'EDM'}]}
    expect(jsonToRealmCard(objWithStringArray)).toEqual(realmRepresentation)
  })
})
