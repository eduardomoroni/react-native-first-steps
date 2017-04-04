// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { ManaIconsBar } from '../../../../src/Containers/Components'

const props = {
  input: {
    name: 'label',
    value: [''],
    onChange: () => null
  }
}

// TODO: This test is raising a warn
it('Should render TextInputForm Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<ManaIconsBar {...props} />)
  expect(tree).toMatchSnapshot()
})
