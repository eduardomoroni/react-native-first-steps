import Realm from 'realm'
import AER from '../../Assets/Cards/AER.json'
import _ from 'lodash'
import { jsonToRealmCard } from '../../Realm/Conversion/Realm-utils'
import {
  CardSchema,
  TypeSchema,
  SubTypeSchema,
  ColorSchema,
  ColorIdentitySchema
} from './Schemas'

const schemas = [CardSchema, TypeSchema, SubTypeSchema, ColorSchema, ColorIdentitySchema]
const realmConfig = {path: 'dummyTestDB.realm', schema: schemas}

export const realm = new Realm(realmConfig)

export const initRealmDb = () => {
  realm.write(() => {
    realm.deleteAll()

    _.forEach(AER.cards, (card) => {
      realm.create('Card', jsonToRealmCard(card), true)
    })
  })
}
