// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
// $FlowFixMe
import AndroidDropDown from '../../../../src/Containers/Components/DropdownInputForm.android'
import iOSDropDown from '../../../../src/Containers/Components/DropdownInputForm.ios'
import { InputLabel, InputPicker } from '../../../../src/Containers/Components'

const props = {
  dropdownItems: ['a', 'b', 'c'],
  selectedValue: 'b',
  input: {
    name: 'label',
    onChange: () => null
  }
}

describe('<DropdownInputForm />', () => {
  it('Should render android Component', () => {
    const wrapper = shallow(<AndroidDropDown {...props} />)
    const pickerProps = wrapper.find(InputPicker).props()

    expect(wrapper.find(InputLabel).prop('label')).toEqual(props.input.name)
    expect(pickerProps.selectedValue).toEqual(props.selectedValue)
    expect(pickerProps.dropdownItems).toEqual(props.dropdownItems)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should render ios Component', () => {
    const props = { name: 'label', onChange: () => null }

    const wrapper = shallow(<iOSDropDown {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props().onChange).toEqual(props.onChange)
  })
})
