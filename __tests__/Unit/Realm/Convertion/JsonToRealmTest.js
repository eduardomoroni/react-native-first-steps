import card from '../../../Assets/Stubs/card.json'
import { jsonToRealmCard, inheritanceToArray } from '../../../../src/Realm/Conversion/Realm-utils'

const realmObject = {
  'artist': 'Jung Park',
  'cmc': 5,
  'id': 'd6901a23503f4953dc3f643b193a7bdb31478fc2',
  'imageName': 'aerial modification',
  'layout': 'normal',
  'manaCost': '{4}{W}',
  'multiverseid': 423668,
  'name': 'Aerial Modification',
  'number': '1',
  'rarity': 'Uncommon',
  'text': "Enchant creature or Vehicle\nAs long as enchanted permanent is a Vehicle, it's a creature in addition to its other types.\nEnchanted creature gets +2/+2 and has flying.",
  'type': 'Enchantment — Aura',
  'subtypes': [{subType: 'Aura'}, {subType: 'Test'}],
  'colorIdentity': [{colorIdentity: 'W'}, {colorIdentity: 'T'}],
  'colors': [{color: 'White'}, {color: 'Test'}],
  'types': [{type: 'Enchantment'}, {type: 'Test'}]
}

const inheritanceRepresentation = {
  '0': {
    'type': 'TypeTest'
  },
  '1': {
    'subtypes': 'SubTypeTest'
  },
  '2': {
    'colors': 'ColorTest'
  },
  '3': {
    'colorIdentity': 'ColorIdTest'
  }
}

it('Should convert a Json Object to a Realm Valid Object', () => {
  expect(jsonToRealmCard(card)).toEqual(realmObject)
})

// due https://github.com/realm/realm-js/issues/860 - Realm doesnt have list of primitives
it('Should convert inheritance Realm representation to string array', () => {
  const arrayRepresentation = ['TypeTest', 'SubTypeTest', 'ColorTest', 'ColorIdTest']
  expect(inheritanceToArray(inheritanceRepresentation)).toEqual(arrayRepresentation)
})
