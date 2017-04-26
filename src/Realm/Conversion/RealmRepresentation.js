/* @flow */
import { rulingsType } from '../../Types/CardType'
import _ from 'lodash'

export const rulingsTextAsArray = (rulings: rulingsType) => {
  return _.map(rulings, (rule) => {
    return rule.text
  })
}
