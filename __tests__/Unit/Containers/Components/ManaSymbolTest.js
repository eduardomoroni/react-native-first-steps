// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { ManaSymbol, ValidColors } from '../../../../src/Containers/Components/ManaSymbol'

const props = {
  color: ValidColors[2],
  style: {backgroundColor: 'blue'}
}

it('Should render TextInputForm Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<ManaSymbol {...props} />)
  expect(tree).toMatchSnapshot()
})
