// TODO: Mock Config/Realm/index export
import _ from 'lodash'
import * as Schemas from './Schemas'

export const schema = _.flatMap(Schemas)
export const defaultConfig = { path: 'database/INTEGRATION_TEST.realm', schema }
