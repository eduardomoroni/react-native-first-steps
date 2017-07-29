import * as CardService from '../../../src/Services/CardService'
import { negateForm, ornithopterForm } from '../../Assets/Stubs'
import { initializeDatabase, cleanDatabase } from '../Config/RealmConfig'

const { findCardsFromForm } = CardService
describe('Card Service', () => {
  afterAll(() => {
    cleanDatabase()
  })

  it('Should import cards in JSON Format', () => {
    initializeDatabase('CardService')
    const cardsCollection = CardService.findAllCards()
    expect(cardsCollection).toHaveLength(194)
  })

  describe('', () => {
    it('Should find a card for its ID', () => {
      const card = CardService.findCardByID('bee70fe0f74f97a9cbb549775ce2fb4a55a8bae6')
      expect(card.multiverseid).toEqual(425698)
    })

    it('Should find cards based on ALL form fields', () => {
      expect(findCardsFromForm(ornithopterForm)[0].name).toEqual('Ornithopter')
      expect(findCardsFromForm(negateForm)[0].name).toEqual('Negate')
    })

    it('Should return card index in the current realm', () => {
      const {findCardIndex} = CardService
      const results = findCardsFromForm({cardName: 'aether'})
      expect(findCardIndex(results, results[0])).toEqual(0)
      expect(findCardIndex(results, results[7])).toEqual(7)
      expect(findCardIndex(results, results[13])).toEqual(13)
      expect(findCardIndex(results, {id: 'NOT_EXIST_ON_COLLECTION'})).toEqual(-1)
    })

    it('Should sort card results', () => {
      const results = findCardsFromForm({cardName: 'aether'})
      // TODO: Refactor this representation
      const sortingParam = {
        sortBy: {
          field: 'multiverseid',
          reversed: true
        }
      }

      const sortedResults = CardService.sortCards(results, sortingParam)
      sortedResults.forEach((object, index, collection) => {
        if (index + 1 === collection.length) {
          return true
        }
        const nextElementId = collection[index + 1].multiverseid
        expect(object.multiverseid).toBeGreaterThan(nextElementId)
      })
    })
  })
})
