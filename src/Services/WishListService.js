import * as RealmService from '../Realm/RealmService.js'

const createWishList = (userId: string) => {
  const wishList = {
    id: userId,
    lastUpdate: new Date(),
    lastSync: new Date()
  }

  RealmService.create('WishList', wishList, false)
}

const insertCardAmount = (cardAmount: any) => {
  return RealmService.create('CardAmount', cardAmount, false)
}

const updateCardAmount = (cardAmount: any, list: any) => {
  const realmRepresentation = list.filtered('multiverseid = $0', cardAmount.multiverseid)[0] // Ideally use find

  if (cardAmount.amount <= 0) {
    return RealmService.remove(realmRepresentation)
  }

  if (list.length === 0) {
    const insertedAmount = insertCardAmount(cardAmount)

    RealmService.write(() => {
      list.push(insertedAmount)
    })
  } else {
    RealmService.write(() => {
      realmRepresentation.amount = cardAmount.amount
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
  deleteWishList
}
