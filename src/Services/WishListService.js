import * as RealmService from '../Realm/RealmService.js'

const createWishList = (userId: string) => {
  const wishList = {
    id: userId,
    lastUpdate: new Date(),
    lastSync: new Date()
  }

  return RealmService.create('WishList', wishList, false)
}

const toCardAmount = (card: any, amount: number = 1) => {
  return {
    multiverseid: card.multiverseid,
    card,
    amount
  }
}

const getUserWishList = (userID: string) => {
  const userWishList = RealmService.objectForPrimaryKey('WishList', userID)
  // TODO: RealmService.objectForPrimaryKey is Not Synchronous, should raise a warning
  return userWishList || createWishList(userID)
}

const insertCardAmount = (card: any, amount: number) => {
  return RealmService.create('CardAmount', toCardAmount(card, amount), false)
}

const updateCardAmount = (card: any, amount: number, list: any) => {
  const cardAmount = toCardAmount(card, amount)
  const realmRepresentation = list.filtered('multiverseid = $0', cardAmount.multiverseid)[0] // Ideally use find

  if (cardAmount.amount <= 0) {
    return RealmService.remove(realmRepresentation)
  }

  if (list.length === 0) {
    const insertedAmount = insertCardAmount(card, amount)

    RealmService.write(() => {
      list.push(insertedAmount)
    })
  } else {
    RealmService.write(() => {
      realmRepresentation.amount = amount
    })
  }
}

const deleteWishList = (userId: string) => {
  RealmService.deleteCollectionByKey('WishList', userId)
}

const findCardAmountByMultiverseid = (multiverseid: number) => {
  return RealmService.findBy('CardAmount', `multiverseid = ${multiverseid}`)
}

export default {
  createWishList,
  updateCardAmount,
  insertCardAmount,
  findCardAmountByMultiverseid,
  deleteWishList,
  getUserWishList,
  toCardAmount
}
