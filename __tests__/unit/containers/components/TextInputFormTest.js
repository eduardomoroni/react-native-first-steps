// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { TextInputForm } from '../../../../src/containers/components'

const props = {
  keyboardType: 'default',
  maxLength: 5,
  input: {
    name: 'label',
    onChange: () => null
  }
}

describe('<TextInputForm />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<TextInputForm {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
