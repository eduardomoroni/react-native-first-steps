import _ from 'lodash'
export {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery,
  convertCardFormToRealmQueries,
  arrayToQuery
}

const simpleParams = ['cardName', 'cardType', 'cardSubType', 'cardText']
const composedParams = ['cardColors', 'cardPrintings']

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
  cardRarity: 'rarity =', // multiple values
  cardColorsIdentity: 'colorIdentity.colorIdentity =',
  cardToughness: 'toughness',
  cardPower: 'power',
  cardCMC: 'cmc'
  // cardFormat: 'NOT_IMPLEMENTED_YET',
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


function simpleParamQueryArgs (cardSearchForm) {
  const formAsArray = Object.values(_.pick(cardSearchForm, simpleParams))
  return _.flattenDeep(formAsArray)
}

function simpleParamQuery (cardSearchForm) {
  return Object.keys(_.pick(cardSearchForm, simpleParams))
    .map((key) => mapFormToRealm[key])
    .reduce(addParamToQuery, '')
}

function composedParamQueryArgs (cardSearchForm) {
  const formAsArray = Object.values(_.pick(cardSearchForm, composedParams))
  return _.flattenDeep(formAsArray)
}

function composedParamQuery (cardSearchForm) {
  const composed = _.pick(cardSearchForm, composedParams)
  let query = ''
  let index = 0

  _.forEach(composed, (value, key) => { // forEach order not assured
    value.forEach((arrayElem) => {
      query = addParamToQuery(query, mapFormToRealm[key], index++)
    })
  })

  return query
}

function addParamToQuery (query, field, currentIndex) {
  const prefix = query ? `${query} AND` : ''
  return `${prefix} ${field} $${currentIndex}`
}
