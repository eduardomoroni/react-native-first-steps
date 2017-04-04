// @flow

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { InputLabel } from '../../../../src/Containers/Components'

it('Should render InputLabel Component', () => {
  const tree = renderer.create(
    <InputLabel label='label' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
