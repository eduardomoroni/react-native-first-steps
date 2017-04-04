// @flow

import 'react-native'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { MultiSelect } from '../../../../src/Containers/Components'

const props = {
  name: 'label'
}

// TODO: Muita preguiça de testar isso agora, procrastinando
it.skip('Should render MultiSelect Component', () => {
  const renderer = ReactTestUtils.createRenderer()
  const tree = renderer.render(<MultiSelect {...props} />)
  expect(tree).toMatchSnapshot()
  expect(true).toBeFalsy()
})
