import _ from 'lodash'
import * as Schemas from './Schemas'

export const schemas = _.flatMap(Schemas)
export const defaultConfig = { schema: schemas, path: 'MTG-BD-PRE.realm' }
