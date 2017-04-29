import Realm from 'realm'
import _ from 'lodash'
import { defaultConfig } from '../Config/Realm'
import { jsonToRealmCard } from '../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from './Conversion/Placeholder'
import { convertCardFormToRealmQueries } from './Conversion/CardForm'
import { inheritanceToArray } from './Conversion/JsonCard'

export {
  findCardsFromForm,
  sortCards,
  importMTGJSON,
  changeRealm,
  deleteAll,
  valuesOf,
  findIndex,
  findAll,
  create,
  objectForPrimaryKey,
  findBy,
  write,
  deleteCollectionByKey,
  remove
}

let realm = changeRealm(defaultConfig)
type objectType = string

function changeRealm (realmConfig) {
  realm = new Realm(realmConfig)
}

function write (callback) {
  realm.write(callback)
}

function findAll (collection: string) {
  return realm.objects(collection)
}

function findBy (collection: string, query: string) {
  return realm.objects(collection).filtered(query)
}

function create (type: objectType, properties: any, update: boolean = true) {
  let inserted = null

  realm.write(() => {
    inserted = realm.create(type, properties, update)
  })

  return inserted
}

function objectForPrimaryKey (type: objectType, key: number | string) {
  return realm.objectForPrimaryKey(type, key)
}

function valuesOf (realmClass: string) {
  return inheritanceToArray(realm.objects(realmClass).snapshot())
}

function deleteAll () {
  realm.write(() => {
    realm.deleteAll()
  })
}

function deleteCollectionByKey (collection, primaryKey) {
  realm.write(() => {
    realm.delete(objectForPrimaryKey(collection, primaryKey))
  })
}

function remove (realmObject) {
  write(() => {
    realm.delete(realmObject)
  })
}

// REFACTOR BELOW
function findIndex (results: any, callback: any) {
  return results.findIndex(callback)
}

function sortCards (cards, sorting) {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

function findCardsFromForm (form) {
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = realm.objects('Card')

  _.each(realmQueries, (query) => {
    if (query !== undefined && query.length > 0) {
      results = results.filtered(query)
    }
  })

  return results
}

function importMTGJSON (mtgJson) {
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

function upsertCard (card) {
  realm.write(() => {
    realm.create('Card', card, true)
  })
}
