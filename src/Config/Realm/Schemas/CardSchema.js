// Missing SuperType Prop
export const CardSchema = {
  name: 'Card',
  primaryKey: 'id',
  properties: {
    'artist': 'string',
    'id': 'string',
    'name': 'string',
    'number': 'string',
    'rarity': 'string',
    'type': 'string',
    'cmc': {type: 'int', optional: true},
    'multiverseid': {type: 'int', indexed: true},
    'imageName': {type: 'string', optional: true},
    'layout': {type: 'string', optional: true},
    'manaCost': {type: 'string', optional: true},
    'text': {type: 'string', optional: true},
    'originalText': {type: 'string', optional: true},
    'originalType': {type: 'string', optional: true},
    'power': {type: 'int', optional: true},
    'toughness': {type: 'int', optional: true},
    'flavor': {type: 'string', optional: true},
    'types': {type: 'list', objectType: 'Type'},
    'subtypes': {type: 'list', objectType: 'SubType'},
    'colors': {type: 'list', objectType: 'Color'},
    'colorIdentity': {type: 'list', objectType: 'ColorIdentity'},
    'printings': {type: 'list', objectType: 'Printing'},
    'foreignNames': {type: 'list', objectType: 'ForeignName'},
    'rulings': {type: 'list', objectType: 'Ruling'},
    'superTypes': {type: 'list', objectType: 'SuperType'}
  }
}
