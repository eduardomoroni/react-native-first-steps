// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
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
  const wrapper = shallow(<AndroidDropDown {...props} />)
  const children = wrapper.props().children
  expect(children[0].props.label).toEqual(props.input.name)
  expect(children[1].props.selectedValue).toEqual(props.selectedValue)
  expect(children[1].props.dropdownItems).toEqual(props.dropdownItems)
  expect(wrapper.getNode()).toMatchSnapshot()
})

it('Should render DropdownInputForm ios Component', () => {
  const props = {
    name: 'label',
    onChange: () => null
  }

  const wrapper = shallow(<iOSDropDown {...props} />)
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.props().onChange).toEqual(props.onChange)
})
