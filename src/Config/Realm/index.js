import Realm from 'realm'
import {
  CardSchema,
  TypeSchema,
  SubTypeSchema,
  SuperTypeSchema,
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
  SuperTypeSchema,
  ColorSchema,
  ColorIdentitySchema,
  ForeignNameSchema,
  PrintingSchema,
  RulingSchema
]

const defaultConfig = { schema: schemas, path: 'MTG-BD-TEST-sup.realm' }
export const realm = new Realm(defaultConfig)
