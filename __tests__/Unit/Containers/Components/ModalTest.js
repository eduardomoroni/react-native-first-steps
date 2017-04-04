// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { Modal } from '../../../../src/Containers/Components'

const props = {
  value: 'test'
}

// TODO: Muita preguiça de testar isso agora, procrastinando
it.skip('Should render TextInputForm Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<Modal {...props} />)
  expect(tree).toMatchSnapshot()
  expect(true).toBeFalsy()
})
