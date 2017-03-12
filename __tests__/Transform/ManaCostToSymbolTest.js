import test from 'ava'
import { manaCostToSymbol } from '../../src/Transform/manaCostToSymbol'

test('Should convert manaCost to Mana Symbol', t => {
  const testString = '{10}{W}{G}'
  const expectedString = `${unicodeChar('e60f')}${unicodeChar('e600')}${unicodeChar('e604')}`

  t.is(manaCostToSymbol(testString), expectedString)
})

const unicodeChar = (value) => {
  return String.fromCharCode(parseInt(value, 16))
}
