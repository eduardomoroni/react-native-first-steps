export const CardSchema = {
  name: 'Card',
  primaryKey: 'id',
  properties: {
    artist: 'string',
    'cmc': {type: 'int', optional: true},
    'colorIdentity': {type: 'list', objectType: 'ColorIdentity'},
    'colors': {type: 'list', objectType: 'Color'},
    'id': 'string',
    'imageName': {type: 'string', optional: true},
    'layout': {type: 'string', optional: true},
    'manaCost': {type: 'string', optional: true},
    'multiverseid': {type: 'int', indexed: true},
    'name': 'string',
    'number': 'string',
    'rarity': 'string',
    'subtypes': {type: 'list', objectType: 'SubType'},
    'text': {type: 'string', optional: true},
    'type': 'string',
    'types': {type: 'list', objectType: 'Type'},
    'power': {type: 'string', optional: true},
    'toughness': {type: 'string', optional: true},
    'flavor': {type: 'string', optional: true}
  }
}
