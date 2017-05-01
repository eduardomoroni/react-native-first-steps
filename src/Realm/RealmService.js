import Realm from 'realm'
import { inheritanceToArray } from '../Realm/Conversion'

export {
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
  remove,
  closeRealm
}

let realm

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

function create (type: any, properties: any, update: boolean = true) {
  let inserted = null

  realm.write(() => {
    inserted = realm.create(type, properties, update)
  })

  return inserted
}

function closeRealm () {
  realm.close()
}

function objectForPrimaryKey (type: any, key: number | string) {
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

function findIndex (results: any, callback: any) {
  return results.findIndex(callback)
}
