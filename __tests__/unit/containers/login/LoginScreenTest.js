// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { LoginScreen } from '../../../../src/containers/login/LoginScreen'

const props = {
  value: 'test'
}

describe('<LoginScreen />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<LoginScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
