import Realm from 'realm'
import { realm as defaultRealm } from '../Config/Realm'
import { jsonToRealmCard } from '../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from '../Transform/PlaceholderToSymbol'
import { simpleParamQuery, simpleParamQueryArgs, composedParamQueryArgs, composedParamQuery } from './Conversion/CardForm'

export { findCardsFromForm, sortCards, importMTGJSON, changeRealm, deleteAll }

let realm = defaultRealm

function changeRealm (realmConfig) {
  realm = new Realm(realmConfig)
}

function sortCards (cards, sorting) {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
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
      console.log('Failed to insert ', card.name)
    }
  })
}

function upsertCard (card) {
  realm.write(() => {
    realm.create('Card', card, true)
  })
}
