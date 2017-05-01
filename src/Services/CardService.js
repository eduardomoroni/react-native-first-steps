import _ from 'lodash'
import { cardType } from '../Types'
import * as RealmService from '../Realm/RealmService.js'
import {
  jsonToRealmCard,
  placeholdersToSymbols,
  convertCardFormToRealmQueries
} from '../Realm/Conversion'

const upsertCard = (card) => {
  RealmService.create('Card', card, true)
}

const findCardByID = (multiverseid: number) : cardType => {
  return RealmService.objectForPrimaryKey('Card', multiverseid)
}

const findAllCards = () => {
  return RealmService.findAll('Card')
}

const findCardIndex = (results: any, card: cardType) => {
  return RealmService.findIndex(results, (obj) => obj.id === card.id)
}

const sortCards = (cards, sorting) => {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

const findCardsFromForm = (form) => {
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = RealmService.findAll('Card')

  _.each(realmQueries, (query) => {
    if (query !== undefined && query.length > 0) {
      results = results.filtered(query)
    }
  })

  return results
}

const importMTGJSON = (mtgJson) => {
  mtgJson.cards.forEach((card) => {
    card.text = placeholdersToSymbols(card.text)
    const cardAsRealmObject = jsonToRealmCard(card)
    try {
      upsertCard(cardAsRealmObject)
    } catch (e) {
      console.error(`Failed to insert ${card.name}:`, e)
    }
  })
}

export {
  findCardByID,
  sortCards,
  findCardsFromForm,
  importMTGJSON,
  upsertCard,
  findAllCards,
  findCardIndex
}
