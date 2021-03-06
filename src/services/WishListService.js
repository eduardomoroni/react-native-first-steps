import * as RealmService from './realm'

const createWishList = (userId: string) => {
  const wishList = {
    id: userId,
    lastUpdate: new Date(),
    lastSync: new Date()
  }

  RealmService.create('WishList', wishList, false)
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
  deleteWishList
}
