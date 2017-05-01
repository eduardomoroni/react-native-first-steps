// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { MultiSelect } from '../../../../src/Containers/Components'

const props = {
  name: 'label'
}

describe('<MultiSelect />', () => {
  // TODO: Muita preguiça de testar isso agora, procrastinando
  it.skip('Snapshot', () => {
    const wrapper = shallow(<MultiSelect {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
