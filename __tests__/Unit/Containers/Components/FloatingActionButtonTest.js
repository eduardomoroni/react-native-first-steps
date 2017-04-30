// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import ActionButton from 'react-native-action-button'
import { FloatingActionButton } from '../../../../src/Containers/Components'

const mockFunc = jest.fn()
const props = {
  items: [
    { name: 'md-share',
      buttonColor: '#9b59b6',
      title: 'Share',
      onPress: mockFunc
    }, {
      name: 'md-folder-open',
      buttonColor: '#3498db',
      title: 'Add to Deck',
      onPress: mockFunc
    }, {
      name: 'md-swap',
      buttonColor: '#1abc9c',
      title: 'Add to TradeList',
      onPress: mockFunc
    }
  ]
}

describe('<FloatingActionButton />', () => {
  const wrapper = shallow(<FloatingActionButton {...props} />)

  it('Should render InputLabel Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should trigger callback on pressing button', () => {
    const button = wrapper.find(ActionButton.Item).at(0)
    button.simulate('press')
    expect(mockFunc).toHaveBeenCalled()
  })
})
