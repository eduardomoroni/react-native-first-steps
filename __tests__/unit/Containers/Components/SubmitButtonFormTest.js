// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { SubmitButtonForm } from '../../../../src/Containers/Components'

const props = {
  onPress: jest.fn()
}

describe('<SubmitButtonForm />', () => {
  const wrapper = shallow(<SubmitButtonForm {...props} />)

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should trigger callback onPress', () => {
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalled()
  })
})
