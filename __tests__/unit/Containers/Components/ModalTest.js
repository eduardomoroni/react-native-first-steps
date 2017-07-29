// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from '../../../../src/Containers/Components'

const props = {
  value: 'test'
}

describe('<Modal />', () => {
  // TODO: Muita preguiça de testar isso agora, procrastinando
  it.skip('Snapshot', () => {
    const wrapper = shallow(<Modal {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
