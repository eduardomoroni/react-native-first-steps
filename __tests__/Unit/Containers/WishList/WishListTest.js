// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { WishList } from '../../../../src/Containers/CardTrade/WishList'
import WishListService from '../../../../src/Services/WishListService'

const props = {
  userID: 'FAKE_USER_ID',
  value: 'test'
}

WishListService.getUserWishList = jest.fn()

describe('<WishList />', () => {
  it('Snapshot', () => {
    const wrapper = shallow(<WishList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
