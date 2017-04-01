import { realm } from '../Config/Realm'
import AER from '../Assets/Cards/AER-X.json'
import { jsonToRealmCard } from '../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from '../Transform/PlaceholderToSymbol'
import {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery
} from './Conversion/CardForm'

export { findCardsFromForm, sortCards, initRealmDb }

// TODO: NEED TO CREATE A TEST
function sortCards (cards, sorting) {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

// TODO: TEST
function findCardsFromForm (form) {
  console.log('form', form)
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
  // console.log('filterResults', results, query, queryArgs)
  return results.filtered(query, ...queryArgs)
}

function findCards (query, queryArgs) {
  // console.log('find cards', query, queryArgs)
  return realm.objects('Card').filtered(query, ...queryArgs)
}

function initRealmDb () {
  realm.write(() => {
    realm.deleteAll()

    AER.cards.forEach((card) => {
      card.text = placeholdersToSymbols(card.text)
      const cardAsRealmObject = jsonToRealmCard(card)
      try {
        realm.create('Card', cardAsRealmObject, true)
      } catch (e) {
        console.log('Failed to insert ', card.name)
      }
    })
  })
}
