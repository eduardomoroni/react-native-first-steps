// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { TextInputForm } from '../../../../src/Containers/Components'

it('Should render TextInputForm Component', () => {
  const props = {
    keyboardType: 'default',
    maxLength: 5,
    input: {
      name: 'label',
      onChange: () => null
    }
  }

  const tree = shallow(<TextInputForm {...props} />)
  expect(tree).toMatchSnapshot()
})
