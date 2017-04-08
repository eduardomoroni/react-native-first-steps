// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { InputLabel } from '../../../../src/Containers/Components'

it('Should render InputLabel Component', () => {
  const tree = shallow(<InputLabel label='label' />)
  expect(tree).toMatchSnapshot()
})
