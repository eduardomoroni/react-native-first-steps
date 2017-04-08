// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ManaIconsBar } from '../../../../src/Containers/Components'

const props = {
  input: {
    name: 'label',
    value: [''],
    onChange: () => null
  }
}

// TODO: This test is raising a warn
it('Should render TextInputForm Component', () => {
  const tree = shallow(<ManaIconsBar {...props} />)
  expect(tree.getNode()).toMatchSnapshot()
})
