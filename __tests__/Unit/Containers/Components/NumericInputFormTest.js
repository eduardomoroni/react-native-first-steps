// @flow

import { TextInput } from 'react-native'
import React from 'react'
// import ReactTestUtils from 'react-addons-test-utils'
import { NumericInputForm, InputPicker } from '../../../../src/Containers/Components'
import { shallow } from 'enzyme'

const props = {
  dropdownItems: ['a', 'b', 'c'],
  input: {
    onChange: jest.fn(),
    name: 'label',
    value: {number: 1, operator: '>'}
  }
}

// TODO: Testar o caso do input.value ser undefined

describe('<NumericInputForm />', () => {
  it('Should render NumericInputForm Component', () => {
    const wrapper = shallow(<NumericInputForm {...props} />)
    const textInputProps = wrapper.find(TextInput).props()
    const inputPickerProps = wrapper.find(InputPicker).props()
    expect(inputPickerProps.dropdownItems).toEqual(props.dropdownItems)
    expect(inputPickerProps.selectedValue).toEqual(props.input.value.operator)

    inputPickerProps.onValueChange('b')
    expect(props.input.onChange).toBeCalledWith({number: 1, operator: 'b'})

    textInputProps.onChangeText('10')
    expect(props.input.onChange).lastCalledWith({number: 10, operator: '>'})

    expect(wrapper.getNode()).toMatchSnapshot()
  })

  it('Should initialize picker case input.value is undefined', () => {
    const wrapper = shallow(<NumericInputForm {...props} input={{value: undefined}} />)
    const inputPickerProps = wrapper.find(InputPicker).props()
    expect(inputPickerProps.selectedValue).toEqual('')
  })
})
