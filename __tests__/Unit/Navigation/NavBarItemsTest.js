import ReactNative from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import * as NavItems from '../../../src/Navigation/NavBarItems'
import { NavButton } from '../../../src/Navigation/NavButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

const props = {
  iconProps: {
    name: 'search-plus',
    size: 30,
    style: {}
  },
  callback: jest.fn()
}

describe('NavBarItems Tests', () => {
  it('should render <NavButton />', () => {
    const defaultButton = NavItems.navButton(props.iconProps, props.callback)
    expect(defaultButton).toEqual(<NavButton {...props} />)
  })

  it('should expose openDrawer callback', () => {
    const expectedPayload = {
      key: 'drawer',
      content: ReactNative.View,
      open: true,
      side: 'left'
    }

    NavItems.openDrawer(ReactNative.View)
    expect(NavigationActions.refresh).toHaveBeenCalledWith(expectedPayload)
  })

// Warning: Unknown props `accessible`, `allowFontScaling`, `ellipsizeMode` on <Text> tag. Remove these props from the element. For details, see https://fb.me/react-unknown-prop
  it('should render navTitle', () => {
    const wrapper = shallow(NavItems.navTitle('TITLE'))
    expect(wrapper).toMatchSnapshot()
  })

  it('should render multiples navButtons on right', () => {
    const buttons = [{
      buttonProps: {name: 'sliders'},
      callback: jest.fn()
    }, {
      buttonProps: {name: 'close'},
      callback: jest.fn()
    }]

    const wrapper = shallow(NavItems.navButtonBar(buttons))
    expect(wrapper).toMatchSnapshot()
  })

  it('should render navBackButton', () => {
    const wrapper = shallow(NavItems.navBackButton())
    expect(wrapper).toMatchSnapshot()
    wrapper.simulate('press')
    expect(NavigationActions.pop).toHaveBeenCalled()
  })
})
