// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { MultiSelect } from '../../../../src/Containers/Components'

const props = {
  name: 'label'
}

// TODO: Muita preguiça de testar isso agora, procrastinando
it.skip('Should render MultiSelect Component', () => {
  const tree = shallow(<MultiSelect {...props} />)
  expect(tree).toMatchSnapshot()
  expect(true).toBeFalsy()
})
