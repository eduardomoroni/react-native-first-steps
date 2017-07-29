import _ from 'lodash'
import * as Schemas from './schemas'

export const schemas = _.flatMap(Schemas)
export const defaultConfig = { schema: schemas, path: 'MTG-BD.realm' }
