import { Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { CustomNavBar } from '../../../src/modules/navigation/CustomNavBar'

const placeholderComponent = (text) => {
  return (
    <Text>{text}</Text>
  )
}

const props = {
  leftRender: placeholderComponent('LEFT'),
  middleRender: placeholderComponent('MIDDLE'),
  rightRender: placeholderComponent('RIGHT')
}

describe('<CustomNavBar />', () => {
  it('Should Render CustomNavBar', () => {
    const wrapper = shallow(<CustomNavBar {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
