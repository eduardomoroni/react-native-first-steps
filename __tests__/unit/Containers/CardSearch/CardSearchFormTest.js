// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Field } from 'redux-form'
import { CardSearchForm } from '../../../../src/Containers/CardSearch/CardSearchForm'
import {
  DropdownInputForm,
  Modal,
  MultiSelect,
  ManaIconsBar,
  NumericInputForm,
  ModalToggle,
  TextInputForm,
  SubmitButtonForm
} from '../../../../src/Containers/Components'

const props = {
  showModal: jest.fn(),
  searchCards: jest.fn(),
  handleSubmit: jest.fn((callback) => callback()),
  cardTypes: ['um', 'dois'],
  cardSubTypes: ['tres', 'quatro'],
  cardRarities: ['Common', 'Uncommon', 'Rare'],
  cardFormats: ['Standard', 'Modern'],
  cardSets: ['AER', 'EDM'],
  cardType: 'um',
  cardSubType: 'quatro',
  visibleModal: '',
  cardRarity: ['Commom'],
  cardSet: ['AER'],
  cardFormat: ['Standard']
}

const have = component => {
  return n => n.prop('component') === component
}

describe('<CardSearchForm />', () => {
  const wrapper = shallow(<CardSearchForm {...props} />)

  it('Should render CardSearchForm Component', () => {
    expect(wrapper.find(Modal)).toHaveLength(0)
    expect(wrapper.find(MultiSelect)).toHaveLength(0)
    expect(wrapper.find(ModalToggle)).toHaveLength(3)
    expect(wrapper.find(SubmitButtonForm)).toHaveLength(1)

    expect(wrapper.find(Field)).toHaveLength(12)
    expect(wrapper.findWhere(have(TextInputForm))).toHaveLength(5)
    expect(wrapper.findWhere(have(NumericInputForm))).toHaveLength(3)
    expect(wrapper.findWhere(have(ManaIconsBar))).toHaveLength(2)
    expect(wrapper.findWhere(have(DropdownInputForm))).toHaveLength(2)

    // Propably there's a better way to test this
    expect(wrapper.find(Field).map((node) =>
      node.prop('component').name)
    ).toMatchSnapshot()

    expect(wrapper.getNode()).toMatchSnapshot()
  })

  it('Should submit form on pressing button', () => {
    wrapper.find(SubmitButtonForm).simulate('click')
    expect(props.handleSubmit.mock.calls).toHaveLength(1)
    expect(props.searchCards.mock.calls).toHaveLength(1)
  })

  it('Should show modals', () => {
    const modalNames = ['cardRarity', 'cardSet', 'cardFormat']
    const modalItemsMap = {
      cardRarity: 'cardRarities',
      cardSet: 'cardSets',
      cardFormat: 'cardFormats'
    }
    modalNames.forEach(modalName => {
      const wrapper = shallow(<CardSearchForm {...props} visibleModal={modalName} />)
      expect(wrapper.find(Modal).children(Field).prop('name')).toEqual(modalName)
      expect(wrapper.find(Modal).children(Field).prop('items')).toEqual(props[modalItemsMap[modalName]])
    })
  })
})
