// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { LoginScreen } from '../../../../src/Containers/Login/LoginScreen'

const props = {
  loading: false,
  token: undefined,
  error: '',
  facebookLogin: jest.fn(),
  facebookLogout: jest.fn()
}

describe('<LoginScreen />', () => {
  it('Snapshot WIP', () => {
    const wrapper = shallow(<LoginScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
