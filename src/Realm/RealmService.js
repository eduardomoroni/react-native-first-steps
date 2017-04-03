import Realm from 'realm'
import _ from 'lodash'
import { realm as defaultRealm } from '../Config/Realm'
import { jsonToRealmCard } from '../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from './Conversion/Placeholder'
import { simpleParamQuery, simpleParamQueryArgs, composedParamQueryArgs, composedParamQuery, convertCardFormToRealmQueries } from './Conversion/CardForm'

export { findCardsFromForm, sortCards, importMTGJSON, changeRealm, deleteAll, newFindCards }

let realm = defaultRealm

function changeRealm (realmConfig) {
  realm = new Realm(realmConfig)
}

function sortCards (cards, sorting) {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

// CHANGE THIS NAME
function newFindCards (form) {
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = realm.objects('Card')

  _.each(realmQueries, (query) => {
    if (query !== undefined) {
      results = results.filtered(query)
    }
  })

  return results
}

function findCardsFromForm (form) {
  const query = simpleParamQuery(form)
  const queryArgs = simpleParamQueryArgs(form)
  const simpleParamsResults = findCards(query, queryArgs)

  const composedQuery = composedParamQuery(form)
  const composedQueryArgs = composedParamQueryArgs(form)
  if (composedQuery) {
    return filterResults(simpleParamsResults, composedQuery, composedQueryArgs)
  } else {
    return simpleParamsResults
  }
}

function filterResults (results, query, queryArgs) {
  return results.filtered(query, ...queryArgs)
}

function findCards (query, queryArgs) {
  return realm.objects('Card').filtered(query, ...queryArgs)
}

function deleteAll () {
  realm.write(() => {
    realm.deleteAll()
  })
}

function importMTGJSON (mtgJson) {
  mtgJson.cards.forEach((card) => {
    card.text = placeholdersToSymbols(card.text)
    const cardAsRealmObject = jsonToRealmCard(card)
    try {
      upsertCard(cardAsRealmObject)
    } catch (e) {
      console.log('Failed to insert ', card.name, e)
    }
  })
}

function upsertCard (card) {
  realm.write(() => {
    realm.create('Card', card, true)
  })
}
