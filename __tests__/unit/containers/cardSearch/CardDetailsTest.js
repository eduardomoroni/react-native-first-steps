import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import CardDetails from '../../../../src/containers/cardSearch/CardDetails'
import RealmResult from '../../../assets/Stubs/RealmResult.json'

const props = {
  card: RealmResult[0]
}

describe('<CardDetails />', () => {
  it('Should Render CardDetails', () => {
    const wrapper = shallow(<CardDetails {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
