import * as RealmService from '../Realm/RealmService.js'
import {cardType} from '../Types'

const findCardByID = (multiverseid: number) : cardType => {
  return RealmService.objectForPrimaryKey('Card', multiverseid)
}

export default {
  findCardByID
}
