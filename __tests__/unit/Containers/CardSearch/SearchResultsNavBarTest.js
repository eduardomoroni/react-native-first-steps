import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { SearchResultsNavBar } from '../../../../src/Containers/CardSearch/SearchResultsNavBar'
import * as NavBarItems from '../../../../src/Navigation/NavBarItems'
NavBarItems.openDrawer = jest.fn()
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

const props = {
  showCardsAs: 'list',
  switchDisplayMode: jest.fn()
}

describe('<SearchResultsNavBar />', () => {
  it('Should Render SearchResultsNavBar', () => {
    const wrapper = shallow(<SearchResultsNavBar {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
