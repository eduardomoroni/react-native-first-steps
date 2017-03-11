import { realm } from '../Config/Realm'

const mapFormToRealm = {
  cardName: 'name CONTAINS[c]',
  cardSubType: 'subtypes.subType =',
  cardType: 'types.type =',
  cardText: 'text CONTAINS[c]'
}

function getCards (query, args) {
  return realm.objects('Card').filtered(query, ...args)
}

function getQueryArgs (CardSearchForm) {
  return Object.values(CardSearchForm)
}

function createQuery (CardSearchForm) {
  return Object.keys(CardSearchForm)
               .map((key) => mapFormToRealm[key])
               .reduce(addParamToQuery, '')
}

function addParamToQuery (query, field, currentIndex) {
  const prefix = query ? `${query} AND` : ''
  return `${prefix} ${field} $${currentIndex}`
}

export {
  getCards,
  getQueryArgs,
  createQuery
}
