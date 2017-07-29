// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Settings } from '../../../../src/modules/settings/containers/Settings'

const props = {
  value: 'test'
}

describe('<settings />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<Settings {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
