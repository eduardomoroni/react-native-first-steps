import { placeholdersToSymbols } from '../../../../src/Realm/Conversion/Placeholder'

it('Should convert manaCost to Mana Symbol', () => {
  const testString = '{10}{W}{G}'
  const expectedString = `${unicodeChar('e60f')}${unicodeChar('e600')}${unicodeChar('e604')}`

  expect(placeholdersToSymbols(testString)).toBe(expectedString)
})

it('Should replace symbol placeholder for Unicode Symbol on card text', () => {
  const unicodeRep = String.fromCharCode(parseInt('e907', 16)) + String.fromCharCode(parseInt('e907', 16))
  const text = 'Text {E}{E} Text.'
  const expectedText = `Text ${unicodeRep} Text.`

  expect(placeholdersToSymbols(text)).toBe(expectedText)
})

it('Should return empty string if receives undefined arg', () => {
  expect(placeholdersToSymbols(undefined)).toBe('')
})

const unicodeChar = (value) => {
  return String.fromCharCode(parseInt(value, 16))
}
