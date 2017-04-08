import _ from 'lodash'
export {
  convertCardFormToRealmQueries,
  arrayToQuery
}

const mapFormToRealm = {
  cardName: 'name CONTAINS[c]',
  cardSubType: 'subtypes.subType =',
  cardType: 'types.type =',
  cardText: 'text CONTAINS[c]',
  cardColors: 'colors.color =',
  cardSet: 'printings.printing =',
  cardArtist: 'artist CONTAINS[c]',
  cardFlavorText: 'flavor CONTAINS[c]',
  cardCollectionNumber: 'number =',
  cardRarity: 'rarity =',
  cardColorsIdentity: 'colorIdentity.colorIdentity =',
  cardToughness: 'toughness',
  cardPower: 'power',
  cardCMC: 'cmc',
  cardFormat: 'legalities.format ='
}

function convertCardFormToRealmQueries (cardForm) {
  const realmQueries = _.mapValues(cardForm, (value, key) => {
    if (value === undefined || mapFormToRealm[key] === undefined) {
      return undefined
    } else if (Array.isArray(value)) {
      return arrayToQuery(value, mapFormToRealm[key], 'OR')
    } else if (typeof value === 'object') {
      return `${mapFormToRealm[key]} ${value.operator} ${value.number}`
    } else {
      return `${mapFormToRealm[key]} "${value}"`
    }
  })
  return realmQueries
}

function arrayToQuery (array, selector, operator) {
  return array.reduce((acc, current) => {
    return acc ? `${acc} ${operator} ${selector} "${current}"` : `${selector} "${current}"`
  }, '')
}
