import { objectForPrimaryKey } from '../../../src/Realm/RealmService'
import WishListService from '../../../src/Services/WishListService'
import * as CardService from '../../../src/Services/CardService'
import { initializeDatabase, cleanDatabase } from '../Config/RealmConfig'

describe('WishList Service', () => {
  let userID = '8ed88edb-12d1-4f0f-b42b-f59ca3a2f21f'
  let card
  let wishList
  let cardAmount

  beforeAll(() => {
    initializeDatabase('WishList')
    card = CardService.findCardByID('66106dba089787a1d0d5fe1b80091e7eebe29e55')
  })

  afterAll(() => {
    card = null
    wishList = null
    cardAmount = null
    cleanDatabase()
  })

  beforeEach(() => {
    WishListService.createWishList(userID)
    wishList = objectForPrimaryKey('WishList', userID)
    cardAmount = {
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

  it('Should find a CardAmount by multiverseid', () => {
    // TODO: Change primaryKey to multiverseId?
    const cardAmount = {
      multiverseid: card.multiverseid,
      card
    }

    WishListService.insertCardAmount(cardAmount)
    const amountInserted = WishListService.findCardAmountByMultiverseid(card.multiverseid)[0]
    expect(amountInserted.multiverseid).toEqual(card.multiverseid)
    expect(amountInserted.card).toEqual(cardAmount.card)
    expect(amountInserted.amount).toEqual(1)
  })

  it('Should add a Card Amount into an empty list', () => {
    const wantList = wishList.want
    WishListService.updateCardAmount(cardAmount, wantList)
    expect(wantList).toHaveLength(1)
  })

  it('Should update amount for a card in Wanted list', () => {
    const wantedList = wishList.want

    cardAmount.amount = 3
    WishListService.updateCardAmount(cardAmount, wantedList)

    // TODO: Figureout a way to test RealmObject to Object
    // expect(wantedList[0]).toEqual(cardAmount)
    expect(wantedList[0].multiverseid).toEqual(cardAmount.multiverseid)
    expect(wantedList[0].amount).toEqual(cardAmount.amount)

    cardAmount.amount = 4
    WishListService.updateCardAmount(cardAmount, wantedList)

    expect(wantedList[0].multiverseid).toEqual(cardAmount.multiverseid)
    expect(wantedList[0].amount).toEqual(4)
  })

  it('Should remove card from list if amount is lesser than 1', () => {
    const haveList = wishList.have
    cardAmount.amount = 2
    WishListService.updateCardAmount(cardAmount, haveList)
    expect(haveList[0].amount).toEqual(cardAmount.amount)

    cardAmount.amount = 0
    WishListService.updateCardAmount(cardAmount, haveList)
    expect(haveList).toHaveLength(0)
  })

  it('Should not share CardAmount Reference Between Lists', () => {
    const haveList = wishList.have
    const wantList = wishList.want

    WishListService.updateCardAmount(cardAmount, haveList)
    WishListService.updateCardAmount(cardAmount, wantList)

    cardAmount.amount = 0
    WishListService.updateCardAmount(cardAmount, wantList)
    cardAmount.amount = 3
    WishListService.updateCardAmount(cardAmount, haveList)

    expect(haveList[0].amount).toEqual(cardAmount.amount)
    expect(wantList).toHaveLength(0)
  })
})
