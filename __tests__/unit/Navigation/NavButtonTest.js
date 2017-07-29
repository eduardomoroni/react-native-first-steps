import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { NavButton } from '../../../src/Navigation/NavButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Metrics } from '../../../src/Styles/Themes/'
import styles from '../../../src/Styles/Navigation/NavBarItemsStyle'

const props = {
  iconProps: {
    name: 'search-plus',
    size: 30,
    style: {}
  },
  callback: jest.fn()
}

describe('<NavButton />', () => {
  it('Should Render NavButton', () => {
    const wrapper = shallow(<NavButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render default Icon props', () => {
    const wrapper = shallow(<NavButton />)
    const button = wrapper.find(Icon)
    expect(button.prop('name')).toEqual('heart')
    expect(button.prop('size')).toEqual(Metrics.icons.medium)
    expect(button.prop('style')).toEqual(styles.button)
  })

  it('should fire callback on click button', () => {
    const wrapper = shallow(<NavButton {...props} />)
    wrapper.simulate('press')
    expect(props.callback).toHaveBeenCalledWith()
  })
})
