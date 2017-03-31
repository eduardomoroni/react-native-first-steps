import Realm from 'realm'
import AER from '../../Assets/Cards/AER-X.json'
import { jsonToRealmCard } from '../../Realm/Conversion/JsonCard'
import { placeholdersToSymbols } from '../../Transform/PlaceholderToSymbol'

import {
  CardSchema,
  TypeSchema,
  SubTypeSchema,
  ColorSchema,
  ColorIdentitySchema,
  ForeignNameSchema,
  PrintingSchema,
  RulingSchema
} from './Schemas'

export const schemas = [
  CardSchema,
  TypeSchema,
  SubTypeSchema,
  ColorSchema,
  ColorIdentitySchema,
  ForeignNameSchema,
  PrintingSchema,
  RulingSchema
]

const realmConfig = { schema: schemas, path: 'MTG-BD-TEST.realm' }

export const realm = new Realm(realmConfig)

export const initRealmDb = () => {
  realm.write(() => {
    realm.deleteAll()

    AER.cards.forEach((card) => {
      delete card.printings // This field is not working, non patience to figure out
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
