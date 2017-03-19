import { realm } from '../Config/Realm'

const mapFormToRealm = {
  cardName: 'name CONTAINS[c]',
  cardSubType: 'subtypes.subType =',
  cardType: 'types.type =',
  cardText: 'text CONTAINS[c]'
}

// TODO: NEED TO CREATE A TEST
function sortCards (cards, sorting) {
  return cards.sort('name', false)
}

function findCardsFromForm (form) {
  return findCards(createQuery(form), createQueryArgs(form))
}

function findCards (query, args) {
  return realm.objects('Card').filtered(query, ...args)
}

function createQueryArgs (cardSearchForm) {
  return Object.values(cardSearchForm)
}

function createQuery (cardSearchForm) {
  return Object.keys(cardSearchForm)
               .map((key) => mapFormToRealm[key])
               .reduce(addParamToQuery, '')
}

function addParamToQuery (query, field, currentIndex) {
  const prefix = query ? `${query} AND` : ''
  return `${prefix} ${field} $${currentIndex}`
}

export {
  findCards,
  createQueryArgs,
  createQuery,
  findCardsFromForm,
  sortCards
}
