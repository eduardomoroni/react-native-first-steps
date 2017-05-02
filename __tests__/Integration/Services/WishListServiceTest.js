import { objectForPrimaryKey } from '../../../src/Realm/RealmService'
import WishListService from '../../../src/Services/WishListService'
import * as CardService from '../../../src/Services/CardService'
import { initializeDatabase, cleanDatabase } from '../Config/RealmConfig'

describe('WishList Service', () => {
  let userID = '8ed88edb-12d1-4f0f-b42b-f59ca3a2f21f'
  let card
  let wishList

  beforeAll(() => {
    initializeDatabase('WishList')
    card = CardService.findCardByID('66106dba089787a1d0d5fe1b80091e7eebe29e55')
  })

  afterAll(() => {
    card = null
    wishList = null
    cleanDatabase()
  })

  beforeEach(() => {
    wishList = WishListService.createWishList(userID)
  })

  afterEach(() => {
    WishListService.deleteWishList(userID)
  })

  // FIXME: If this test do not run first is getting error
  it('Should Get User WishList or Create if not exists', () => {
    const newUserID = 'NEW_USER_ID'
    expect(objectForPrimaryKey('WishList', newUserID)).not.toBeDefined()
    const createdWishList = WishListService.getUserWishList(newUserID)
    const retrievingWishList = WishListService.getUserWishList(newUserID)

    expect(createdWishList).toBeDefined()
    expect(createdWishList).toEqual(objectForPrimaryKey('WishList', newUserID))
    expect(retrievingWishList).toEqual(createdWishList)
  })

  it('Should create a CardAmount representation based on card and amount', () => {
    const cardAmountRep = {
      multiverseid: card.multiverseid,
      amount: 3,
      card: card
    }

    expect(WishListService.toCardAmount(card, 3)).toEqual(cardAmountRep)
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

    WishListService.insertCardAmount(card)
    const amountInserted = WishListService.findCardAmountByMultiverseid(card.multiverseid)[0]
    expect(amountInserted.multiverseid).toEqual(card.multiverseid)
    expect(amountInserted.card).toEqual(cardAmount.card)
    expect(amountInserted.amount).toEqual(1)
  })

  it('Should add a Card Amount into an empty list', () => {
    const wantList = wishList.want
    expect(wantList).toHaveLength(0)
    WishListService.updateCardAmount(card, 1, wantList)
    expect(wantList).toHaveLength(1)
  })

  it('Should update amount for a card in Wanted list', () => {
    const wantedList = wishList.want

    WishListService.updateCardAmount(card, 3, wantedList)

    // TODO: Figureout a way to test RealmObject to Object
    // expect(wantedList[0]).toEqual(3)
    expect(wantedList[0].multiverseid).toEqual(card.multiverseid)
    expect(wantedList[0].amount).toEqual(3)

    WishListService.updateCardAmount(card, 4, wantedList)

    expect(wantedList[0].multiverseid).toEqual(card.multiverseid)
    expect(wantedList[0].amount).toEqual(4)
  })

  it('Should remove card from list if amount is lesser than 1', () => {
    const haveList = wishList.have

    WishListService.updateCardAmount(card, 2, haveList)
    expect(haveList[0].amount).toEqual(2)

    WishListService.updateCardAmount(card, 0, haveList)
    expect(haveList).toHaveLength(0)
  })

  it('Should not share CardAmount Reference Between Lists', () => {
    const haveList = wishList.have
    const wantList = wishList.want

    WishListService.updateCardAmount(card, 1, haveList)
    WishListService.updateCardAmount(card, 1, wantList)

    WishListService.updateCardAmount(card, 0, wantList)
    WishListService.updateCardAmount(card, 3, haveList)

    expect(haveList[0].amount).toEqual(3)
    expect(wantList).toHaveLength(0)
  })
})
