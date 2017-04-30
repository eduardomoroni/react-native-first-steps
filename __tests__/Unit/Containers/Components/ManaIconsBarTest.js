// @flow

import { TouchableOpacity } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ManaIconsBar } from '../../../../src/Containers/Components'

const props = {
  input: {
    name: 'label',
    value: [''],
    onChange: jest.fn()
  }
}
describe('<ManaIconsBar />', () => {
  const wrapper = shallow(<ManaIconsBar {...props} />)

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call callback on press', () => {
    const button = wrapper.find(TouchableOpacity).at(0)
    button.simulate('pressOut')
    expect(props.input.onChange).toHaveBeenCalled()
  })
})
