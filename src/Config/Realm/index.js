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
  RulingSchema,
  LegalitySchema
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
  RulingSchema,
  LegalitySchema
]

const defaultConfig = { schema: schemas, path: 'MTG-BD-TRES.realm' }
export const realm = new Realm(defaultConfig)
