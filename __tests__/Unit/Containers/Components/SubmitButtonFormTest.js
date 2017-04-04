// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { SubmitButtonForm } from '../../../../src/Containers/Components'

const props = {
  onPress: () => 'ABABAB'
}

it('Should render SubmitButtonForm Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<SubmitButtonForm {...props} />)
  expect(tree).toMatchSnapshot()
  expect(tree.props.onPress).toEqual(props.onPress)
})
