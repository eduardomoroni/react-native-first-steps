// @flow
import { rulingsType } from '../../../modules/types/CardType'
import _ from 'lodash'

export const rulingsTextAsArray = (rulings: rulingsType) => {
  return _.map(rulings, (rule) => {
    return rule.text
  })
}
