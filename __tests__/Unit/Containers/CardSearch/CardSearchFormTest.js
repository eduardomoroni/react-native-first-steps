// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { CardSearchForm } from '../../../../src/Containers/CardSearch/CardSearchForm'
import {
  // DropdownInputForm,
  // Modal,
  // MultiSelect,
  // ManaIconsBar,
  // NumericInputForm,
  // ModalToggle,
  // TextInputForm,
  SubmitButtonForm
} from '../../../../src/Containers/Components'
// TODO: TEST THIS
const props = {
  handleSubmit: jest.fn((callback) => callback()),
  searchCards: jest.fn(),
  cardTypes: ['um', 'dois'],
  cardSubTypes: ['tres', 'quatro'],
  cardType: 'um',
  cardSubType: 'quatro',
  showModal: '', // TODO: Test all scenarios
  cardRarity: ['commom'],
  cardSet: ['AER'],
  cardFormat: ['Standard']
}

describe('<CardSearchForm />', () => {
  const wrapper = shallow(<CardSearchForm {...props} />)

  it('Should render CardSearchForm Component', () => {
    expect(wrapper.getNode()).toMatchSnapshot()
  })

  it('Should submit form on pressing button', () => {
    wrapper.find(SubmitButtonForm).simulate('click')
    expect(props.handleSubmit.mock.calls).toHaveLength(1)
    expect(props.searchCards.mock.calls).toHaveLength(1)
  })
})
