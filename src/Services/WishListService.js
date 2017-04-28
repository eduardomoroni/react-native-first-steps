import * as RealmService from '../Realm/RealmService.js'
import {cardType} from '../Types'

const createWishList = (userId: string) => {
  const wishList = {
    id: userId,
    lastUpdate: new Date(),
    lastSync: new Date()
  }

  RealmService.create('WishList', wishList, false)
}

const upsertCardAmount = (cardAmount: any) => {
  console.log(typeof (cardAmount.id))
  console.log(typeof (cardAmount.amount))
  console.log(typeof (cardAmount.card))

  RealmService.create('CardAmount', cardAmount, true)
}

const addWantedCard = (userID: string, card: cardType, amount: number = 1) => {
  const wishList = RealmService.objectForPrimaryKey('WishList', userID)
  const cardAmount = {id: card.multiverseid, card}
  const wantList = wishList.want
  console.log(wantList)
  console.log(cardAmount)
  RealmService.getRealm().write(() => {
    wantList.push(cardAmount)
  })
}

export default {
  createWishList,
  addWantedCard,
  upsertCardAmount
}
