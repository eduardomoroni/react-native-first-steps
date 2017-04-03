import Realm from 'realm'
import _ from 'lodash'
import { realm as defaultRealm } from '../Config/Realm'
import { jsonToRealmCard } from '../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from './Conversion/Placeholder'
import { convertCardFormToRealmQueries } from './Conversion/CardForm'

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
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = realm.objects('Card')

  _.each(realmQueries, (query) => {
    if (query !== undefined) {
      results = results.filtered(query)
    }
  })

  return results
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
      console.error('Failed to insert ', card.name, e)
    }
  })
}

function upsertCard (card) {
  realm.write(() => {
    realm.create('Card', card, true)
  })
}
