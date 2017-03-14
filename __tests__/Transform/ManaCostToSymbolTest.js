import test from 'ava'
import { placeholdersToSymbols } from '../../src/Transform/manaCostToSymbol'

test('Should convert manaCost to Mana Symbol', t => {
  const testString = '{10}{W}{G}'
  const expectedString = `${unicodeChar('e60f')}${unicodeChar('e600')}${unicodeChar('e604')}`

  t.is(placeholdersToSymbols(testString), expectedString)
})

test('Should replace symbol placeholder for Unicode Symbol on card text', t => {
  const unicodeRep = String.fromCharCode(parseInt('e907', 16)) + String.fromCharCode(parseInt('e907', 16))
  const text = 'Text {E}{E} Text.'
  const expectedText = `Text ${unicodeRep} Text.`

  t.is(placeholdersToSymbols(text), expectedText)
})

test('Should return empty string if receives undefined arg', t => {
  t.is(placeholdersToSymbols(undefined), '')
})

const unicodeChar = (value) => {
  return String.fromCharCode(parseInt(value, 16))
}
