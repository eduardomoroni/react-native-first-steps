import { objectForPrimaryKey } from '../../../src/Realm/RealmService'
import WishListService from '../../../src/Services/WishListService'
import * as CardService from '../../../src/Services/CardService'
import { initializeDatabase, cleanDatabase } from '../Config/RealmConfig'

describe('WishList Service', () => {
  let userID = '8ed88edb-12d1-4f0f-b42b-f59ca3a2f21f'
  let card
  let wishList
  let cardList

  beforeAll(() => {
    initializeDatabase('WishList')
    card = CardService.findCardByID('66106dba089787a1d0d5fe1b80091e7eebe29e55')
  })

  afterAll(() => {
    card = null
    wishList = null
    cardList = null
    cleanDatabase()
  })

  beforeEach(() => {
    WishListService.createWishList(userID)
    wishList = objectForPrimaryKey('WishList', userID)
    cardList = {
      multiverseid: card.multiverseid,
      card
    }
  })

  afterEach(() => {
    WishListService.deleteWishList(userID)
  })

  it('Should create a new WishList for User', () => {
    expect(wishList).toBeDefined()
    expect(wishList.lastSync).toEqual(wishList.lastUpdate)
  })

  it('Should find a CardList by multiverseid', () => {
    // TODO: Change primaryKey to multiverseId?
    const cardList = {
      multiverseid: card.multiverseid,
      card
    }

    WishListService.insertCardList(cardList)
    const amountInserted = WishListService.findCardListByMultiverseid(card.multiverseid)[0]
    expect(amountInserted.multiverseid).toEqual(card.multiverseid)
    expect(amountInserted.card).toEqual(cardList.card)
    expect(amountInserted.amount).toEqual(1)
  })

  it('Should add a Card Amount into an empty list', () => {
    const wantList = wishList.want
    WishListService.updateCardList(cardList, wantList)
    expect(wantList).toHaveLength(1)
  })

  it('Should update amount for a card in Wanted list', () => {
    const wantedList = wishList.want

    cardList.amount = 3
    WishListService.updateCardList(cardList, wantedList)

    // TODO: Figureout a way to test RealmObject to Object
    // expect(wantedList[0]).toEqual(cardList)
    expect(wantedList[0].multiverseid).toEqual(cardList.multiverseid)
    expect(wantedList[0].amount).toEqual(cardList.amount)

    cardList.amount = 4
    WishListService.updateCardList(cardList, wantedList)

    expect(wantedList[0].multiverseid).toEqual(cardList.multiverseid)
    expect(wantedList[0].amount).toEqual(4)
  })

  it('Should remove card from list if amount is lesser than 1', () => {
    const haveList = wishList.have
    cardList.amount = 2
    WishListService.updateCardList(cardList, haveList)
    expect(haveList[0].amount).toEqual(cardList.amount)

    cardList.amount = 0
    WishListService.updateCardList(cardList, haveList)
    expect(haveList).toHaveLength(0)
  })

  it('Should not share CardList Reference Between Lists', () => {
    const haveList = wishList.have
    const wantList = wishList.want

    WishListService.updateCardList(cardList, haveList)
    WishListService.updateCardList(cardList, wantList)

    cardList.amount = 0
    WishListService.updateCardList(cardList, wantList)
    cardList.amount = 3
    WishListService.updateCardList(cardList, haveList)

    expect(haveList[0].amount).toEqual(cardList.amount)
    expect(wantList).toHaveLength(0)
  })
})
