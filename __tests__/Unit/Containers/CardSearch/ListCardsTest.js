import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Component } from '../../../../src/Containers/CardSearch/Component'

const props = {

}

describe('<Component />', () => {
  it('Should Render Component', () => {
    const tree = shallow(<Component {...props} />)
    expect(tree).toMatchSnapshot()
  })
})

