// @flow

import _ from 'lodash'

const convertionMap = {
  types: 'type',
  subtypes: 'subType',
  colors: 'color',
  colorIdentity: 'colorIdentity'
}

export const jsonToRealmCard = (jsonCard: Object) => {
  let realmObject = _.cloneDeep(jsonCard)

  _.forEach(realmObject, (value, key) => {
    if (convertionMap[key]) {
      realmObject[key] = _.map(jsonCard[key], fieldValue => {
        return {[convertionMap[key]]: fieldValue}
      })
    }
  })

  return realmObject
}

export const inheritanceToArray = (realmRepresentation: Object) => {
  const detectKeyValue = (obj) => {
    const objKeys = _.keys(obj)
    return obj[objKeys[0]]
  }

  const withoutFieldName = _.mapValues(realmRepresentation, detectKeyValue)
  return _.toArray(withoutFieldName)
}
