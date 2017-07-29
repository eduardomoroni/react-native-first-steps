// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { WishList } from '../../../../src/modules/cardTrade/containers/WishList'

const props = {
  value: 'test'
}

describe('<WishList />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<WishList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
