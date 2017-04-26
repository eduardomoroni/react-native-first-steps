import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import CardDetails from '../../../../src/Containers/CardSearch/CardDetails'
import RealmResult from '../../../Assets/Stubs/RealmResult.json'

const props = {
  card: RealmResult[0]
}

describe('<CardDetails />', () => {
  it('Should Render CardDetails', () => {
    const wrapper = shallow(<CardDetails {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
