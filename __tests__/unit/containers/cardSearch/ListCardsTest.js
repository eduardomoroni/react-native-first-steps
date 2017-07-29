import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ListCards } from '../../../../src/modules/cardSearch/containers/ListCards'
import { Card } from '../../../../src/modules/cardSearch/containers/Card'
import { CardImage } from '../../../../src/modules/shared/components'
import RealmResult from '../../../assets/Stubs/RealmResult.json'
import styles from '../../../../src/modules/theme/ListCardStyles'

const props = {
  showCardsAs: 'list',
  showCardText: true,
  cards: RealmResult
}

describe('<ListCards />', () => {
  const wrapper = shallow(<ListCards {...props} />)

  it('Should Render ListCards', () => {
    expect(wrapper.prop('dataSource')._dataBlob.s1).toEqual(props.cards)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should have list and image display modes', () => {
    const rowData = {dummy: 'test'}

    // renderRow as images
    wrapper.setProps({ showCardsAs: 'image' })
    const imageRow = shallow(wrapper.instance().renderRow(rowData))
    expect(wrapper.instance().isDisplayingAsImage()).toBeTruthy()
    expect(imageRow.find(CardImage).exists()).toEqual(true)
    expect(wrapper.prop('contentContainerStyle')).toEqual(styles.contentContainer)

    // renderRow as CardList
    wrapper.setProps({ showCardsAs: 'list' })
    const listRow = shallow(wrapper.instance().renderRow(rowData))
    expect(wrapper.instance().isDisplayingAsImage()).toEqual(false)
    expect(listRow.find(Card).exists()).toBeTruthy()
    expect(wrapper.prop('contentContainerStyle')).toEqual({})
  })

  it('Should hide CardInfo text', () => {
    const rowData = {dummy: 'test'}

    wrapper.setProps({ ...props, showCardText: true })
    const row = shallow(wrapper.instance().renderRow(rowData))
    expect(row.find(Card).prop('showCardText')).toEqual(true)

    wrapper.setProps({ ...props, showCardText: false })
    const rowWithoutText = shallow(wrapper.instance().renderRow(rowData))
    expect(rowWithoutText.find(Card).prop('showCardText')).toEqual(false)
  })
})
