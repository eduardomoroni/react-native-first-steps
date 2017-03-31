import _ from 'lodash'
export {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery
}

const simpleParams = ['cardName', 'cardType', 'cardSubType', 'cardText']
const composedParams = ['cardColors', 'cardPrintings']

const mapFormToRealm = {
  cardName: 'name CONTAINS[c]',
  cardSubType: 'subtypes.subType =',
  cardType: 'types.type =',
  cardText: 'text CONTAINS[c]',
  cardColors: 'colors.color =',
  cardPrintings: 'printings.printing ='
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
