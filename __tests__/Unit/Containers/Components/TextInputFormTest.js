// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { TextInputForm } from '../../../../src/Containers/Components'

it('Should render TextInputForm Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const props = {
    keyboardType: 'default',
    maxLength: 5,
    input: {
      name: 'label',
      onChange: () => null
    }
  }

  const tree = renderer.render(<TextInputForm {...props} />)
  expect(tree).toMatchSnapshot()
})
