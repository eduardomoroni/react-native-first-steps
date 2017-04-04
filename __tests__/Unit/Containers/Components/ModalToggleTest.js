// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { ModalToggle } from '../../../../src/Containers/Components'

const props = {
  label: 'Label',
  onPress: jest.fn(),
  selected: []
}

it('Should render ModalToggle Component properly', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<ModalToggle {...props} />)
  expect(tree).toMatchSnapshot()
  expect(tree.props.style[1]).toEqual({})
})

it('Should change background color in case of some selected value', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<ModalToggle {...props} selected={['blue']} />)
  expect(tree.props.style[1]).toEqual({ backgroundColor: 'cornsilk' })
})

it('onPress should call onPress prop function passing label as param', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<ModalToggle {...props} />)
  // Invoking onPress on component and child
  tree.props.onPress()
  tree.props.children.props.onPress()

  expect(props.onPress).toBeCalledWith(props.label)
  expect(props.onPress.mock.instances).toHaveLength(2)
  expect(props.onPress.mock.calls).toHaveLength(2)
})
