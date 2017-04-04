// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import renderer from 'react-test-renderer'
// $FlowFixMe
import AndroidDropDown from '../../../../src/Containers/Components/DropdownInputForm.android'
import iOSDropDown from '../../../../src/Containers/Components/DropdownInputForm.ios'

const props = {
  dropdownItems: ['a', 'b', 'c'],
  selectedValue: 'b',
  input: {
    name: 'label',
    onChange: () => null
  }
}

it('Should render DropdownInputForm android Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<AndroidDropDown {...props} />)
  const children = tree.props.children
  expect(tree).toMatchSnapshot()
  expect(children[0].props.label).toEqual(props.input.name)
  expect(children[1].props.selectedValue).toEqual(props.selectedValue)
  expect(children[1].props.dropdownItems).toEqual(props.dropdownItems)
})

it('Should render DropdownInputForm ios Component', () => {
  const props = {
    name: 'label',
    onChange: () => null
  }

  const tree = renderer.create(
    <iOSDropDown {...props} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.props.onChange).toEqual(props.onChange)
})
