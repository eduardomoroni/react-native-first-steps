// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { CardSearchForm } from '../../../../src/Containers/CardSearch/CardSearchForm'

describe('<CardSearchForm />', () => {
  it('Should render InputLabel Component', () => {
    const tree = shallow(<CardSearchForm />)
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
})
