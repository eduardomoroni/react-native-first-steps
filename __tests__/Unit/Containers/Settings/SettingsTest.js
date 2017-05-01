// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Settings } from '../../../../src/Containers/Settings/Settings'

const props = {
  value: 'test'
}

describe('<Settings />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<Settings {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
