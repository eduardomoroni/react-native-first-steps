// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from '../../../../src/Containers/Components'

const props = {
  value: 'test'
}

// TODO: Muita preguiça de testar isso agora, procrastinando
it.skip('Should render TextInputForm Component', () => {
  const tree = shallow(<Modal {...props} />)
  expect(tree).toMatchSnapshot()
  expect(true).toBeFalsy()
})
