import { deleteAll, changeRealm, objectForPrimaryKey, importMTGJSON } from '../../../src/Realm/RealmService'
import WishListService from '../../../src/Services/WishListService'
import CardService from '../../../src/Services/CardService'
import { schemas } from '../../../src/Config/Realm'
import AER from '../../../src/Assets/Cards/AER-X.json'

describe('WishList Service', () => {
  beforeAll(() => {
    changeRealm({ schema: schemas, path: 'database/INTEGRATION_TEST.realm' })
    deleteAll()
    importMTGJSON(AER)
  })

  afterAll(() => {
    deleteAll()
  })

  it('Should create a new WishList for User', () => {
    const userID = '8ed88edb-12d1-4f0f-b42b-f59ca3a2f21f'
    WishListService.createWishList(userID)

    const wishList = objectForPrimaryKey('WishList', userID)
    expect(wishList).toBeDefined()
    expect(wishList.lastSync).toEqual(wishList.lastUpdate)
  })

  it.only('Should add a CardAmount Object on Realm', () => {
    // TODO: Change primaryKey to multiverseId?
    const card = CardService.findCardByID('66106dba089787a1d0d5fe1b80091e7eebe29e55')
    const cardAmount = {
      id: card.multiverseid,
      card
    }

    WishListService.upsertCardAmount(cardAmount)
    const amountInserted = objectForPrimaryKey('CardAmount', card.multiverseid)
    expect(amountInserted.id).toEqual(card.multiverseid)
    expect(amountInserted.card).toEqual(cardAmount.card)
    expect(amountInserted.amount).toEqual(1)
  })

  it('Should add a card to Wanted WishList', () => {
    const userID = 'ba0d2b11-e469-49f2-959a-b90d0ef258e4'
    const cardWanted = CardService.findCardByID('66106dba089787a1d0d5fe1b80091e7eebe29e55')
    WishListService.createWishList(userID)

    WishListService.addWantedCard(userID, cardWanted)
    const wishList = objectForPrimaryKey('WishList', userID)
    console.log(wishList)
    expect(wishList.want).toContainEqual(cardWanted)
  })
})
