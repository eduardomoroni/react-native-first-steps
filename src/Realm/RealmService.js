import { realm } from '../Config/Realm'
import {
  simpleParamQuery,
  simpleParamQueryArgs,
  composedParamQueryArgs,
  composedParamQuery
} from './Conversion/CardForm'

export { findCardsFromForm, sortCards }

// TODO: NEED TO CREATE A TEST
function sortCards (cards, sorting) {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

function findCardsFromForm (form) {
  const query = simpleParamQuery(form)
  const queryArgs = simpleParamQueryArgs(form)
  const simpleParamsResult = findCards(query, queryArgs)

  const composedQuery = composedParamQuery(form)
  const composedQueryArgs = composedParamQueryArgs(form)
  return filterResults(simpleParamsResult, composedQuery, composedQueryArgs)
}

function filterResults (results, query, queryArgs) {
  // console.log(results[0])
  return results.filtered(query, ...queryArgs)
}

function findCards (query, queryArgs) {
  return realm.objects('Card').filtered(query, ...queryArgs)
}
