// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ManaSymbol, ValidColors } from '../../../../src/Containers/Components/ManaSymbol'

const props = {
  color: ValidColors[2],
  style: {backgroundColor: 'blue'}
}

describe('<ManaSymbol />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<ManaSymbol {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
