// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { SubmitButtonForm } from '../../../../src/Containers/Components'

const props = {
  onPress: () => 'ABABAB'
}

it('Should render SubmitButtonForm Component', () => {
  const wrapper = shallow(<SubmitButtonForm {...props} />)
  expect(wrapper.getNode()).toMatchSnapshot()
  expect(wrapper.props().onPress).toEqual(props.onPress)
})
