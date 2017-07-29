import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { CardSwiper } from '../../../../src/Containers/CardSearch/CardSwiper'
import Swiper from 'react-native-swiper'
import _ from 'lodash'
import RealmResult from '../../../Assets/Stubs/RealmResult.json'
import * as RealmService from '../../../../src/Realm/RealmService'

const cardIndex = 1
const props = {
  cards: _.flatMap(RealmResult),
  card: RealmResult[cardIndex]
}

describe('<CardSwiper />', () => {
  RealmService.getIndex = jest.fn((cards, card) => cardIndex)

  const wrapper = shallow(<CardSwiper {...props} />)
  const cardSwiperInstance = wrapper.instance()
  const swiper = wrapper.find(Swiper)

  it('Should Render CardSwiper with card as initial slide', () => {
    expect(swiper.prop('index')).toBe(cardIndex)
    expect(cardSwiperInstance.props.card).toBe(props.card)
    expect(wrapper).toMatchSnapshot()
  })

  xit('Should change navBarTitle when swipe cards', () => {
    // Enzyme instance is behaving different in this component, FIGURE THIS OUT (LATER)
    expect(swiper.prop('onMomentumScrollEnd')).toBe(cardSwiperInstance.updateScreenTitle)
  })
})
