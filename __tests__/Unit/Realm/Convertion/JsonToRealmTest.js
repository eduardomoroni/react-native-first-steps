import AerialModification from '../../../Assets/Stubs/AerialModification.json'
import PlanarBridge from '../../../Assets/Stubs/PlanarBridge.json'
import { jsonToRealmCard, inheritanceToArray } from '../../../../src/Realm/Conversion/JsonCard'
import { AerialModificationStub, PlanarBridgeStub } from '../../../Assets/Stubs/CardStubs'

it('Should convert a Json Object to a Realm Valid Object', () => {
  expect(jsonToRealmCard(AerialModification)).toEqual(AerialModificationStub)
})

it('Test', () => {
  expect(jsonToRealmCard(PlanarBridge)).toEqual(PlanarBridgeStub)
})

// due https://github.com/realm/realm-js/issues/860 - Realm doesnt have list of primitives
it('Should convert inheritance Realm representation to string array', () => {
  const inheritanceRepresentation = {
    '0': {'type': 'TypeTest'},
    '1': {'subtypes': 'SubTypeTest'},
    '2': {'colors': 'ColorTest'},
    '3': {'colorIdentity': 'ColorIdTest'}
  }
  const arrayRepresentation = ['TypeTest', 'SubTypeTest', 'ColorTest', 'ColorIdTest']
  expect(inheritanceToArray(inheritanceRepresentation)).toEqual(arrayRepresentation)
})
