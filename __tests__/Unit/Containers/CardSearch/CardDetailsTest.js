import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { CardDetails } from '../../../../src/Containers/CardSearch/CardDetails'

const props = {
  card: {
    TDB: 'To de defined'
  }
}

describe('<CardDetails />', () => {
  it('Should Render CardDetails', () => {
    const wrapper = shallow(<CardDetails {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
