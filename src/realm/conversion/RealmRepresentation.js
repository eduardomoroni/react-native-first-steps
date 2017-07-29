/* @flow */
import { rulingsType } from '../../types/CardType'
import _ from 'lodash'

export const rulingsTextAsArray = (rulings: rulingsType) => {
  return _.map(rulings, (rule) => {
    return rule.text
  })
}
