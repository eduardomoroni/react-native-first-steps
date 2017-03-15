import Realm from 'realm'
import AER from '../../Assets/Cards/AER-X.json'
import { jsonToRealmCard } from '../../Realm/Conversion/Realm-utils'
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

const schemas = [
  CardSchema,
  TypeSchema,
  SubTypeSchema,
  ColorSchema,
  ColorIdentitySchema,
  ForeignNameSchema,
  PrintingSchema,
  RulingSchema]

const realmConfig = {path: 'MTG-BD-TEST.realm', schema: schemas}

export const realm = new Realm(realmConfig)

export const initRealmDb = () => {
  realm.write(() => {
    realm.deleteAll()

    AER.cards.forEach((card) => {
      delete card.printings // This field is not working, non patience to figure out
      card.text = placeholdersToSymbols(card.text)
      realm.create('Card', jsonToRealmCard(card), true)
    })
  })
}
