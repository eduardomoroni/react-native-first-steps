// @flow

import _ from 'lodash'

const convertionMap = {
  types: 'type',
  subtypes: 'subType',
  colors: 'color',
  colorIdentity: 'colorIdentity',
  printings: 'printing',
  supertypes: 'superType'
}

export const jsonToRealmCard = (jsonCard: Object) => {
  let realmObject = _.cloneDeep(jsonCard)

  _.forEach(realmObject, (value, key) => {
    if (isArrayOfString(key)) {
      realmObject[key] = _.map(jsonCard[key], fieldValue => {
        return {[convertionMap[key]]: fieldValue}
      })
    } else if (shouldBeAndInt(key)) {
      realmObject[key] = parseInt(value) // TODO: Test this
    }
  })

  return realmObject
}

const shouldBeAndInt = (key) => {
  const intProperties = ['cmc', 'multiverseid', 'power', 'toughness']
  return intProperties.includes(key)
}

const isArrayOfString = (key) => {
  return convertionMap[key]
}

export const inheritanceToArray = (realmRepresentation: Object) => {
  const detectKeyValue = (obj) => {
    const objKeys = _.keys(obj)
    return obj[objKeys[0]]
  }

  const withoutFieldName = _.mapValues(realmRepresentation, detectKeyValue)
  return _.toArray(withoutFieldName)
}
