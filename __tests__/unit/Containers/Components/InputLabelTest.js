// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { InputLabel } from '../../../../src/Containers/Components'

const props = {
  label: 'label',
  onPress: jest.fn()
}

describe('<InputLabel />', () => {
  it('Snapshot, default onPress callback', () => {
    const wrapper = shallow(<InputLabel label='label' />)
    const defaultOnPress = wrapper.prop('onPress')

    expect(defaultOnPress()).toBeNull()
    expect(wrapper).toMatchSnapshot()
  })

  it('Might have a callback to label', () => {
    const wrapper = shallow(<InputLabel {...props} />)
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalled()
  })
})
