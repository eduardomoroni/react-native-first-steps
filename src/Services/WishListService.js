import * as RealmService from '../Realm/RealmService.js'

// TODO: Create Get WishList(Create if not exists)

const createWishList = (userId: string) => {
  const wishList = {
    id: userId,
    lastUpdate: new Date(),
    lastSync: new Date()
  }

  return RealmService.create('WishList', wishList, false)
}

const getUserWishList = (userID: string) => {
  const userWishList = RealmService.objectForPrimaryKey('WishList', userID)
  // TODO: RealmService.objectForPrimaryKey is Not Synchronous, should raise a warning
  return userWishList ? userWishList : createWishList(userID)
}

const insertCardList = (cardList: any) => {
  return RealmService.create('CardList', cardList, false)
}

const updateCardList = (cardList: any, list: any) => {
  const realmRepresentation = list.filtered('multiverseid = $0', cardList.multiverseid)[0] // Ideally use find

  if (cardList.amount <= 0) {
    return RealmService.remove(realmRepresentation)
  }

  if (list.length === 0) {
    const insertedAmount = insertCardList(cardList)

    RealmService.write(() => {
      list.push(insertedAmount)
    })
  } else {
    RealmService.write(() => {
      realmRepresentation.amount = cardList.amount
    })
  }
}

const deleteWishList = (userId: string) => {
  RealmService.deleteCollectionByKey('WishList', userId)
}

const findCardListByMultiverseid = (multiverseid: number) => {
  return RealmService.findBy('CardList', `multiverseid = ${multiverseid}`)
}

export default {
  createWishList,
  updateCardList,
  insertCardList,
  findCardListByMultiverseid,
  deleteWishList,
  getUserWishList
}
