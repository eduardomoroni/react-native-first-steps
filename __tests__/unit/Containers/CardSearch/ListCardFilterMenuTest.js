import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { ListCardFilterMenu } from '../../../../src/modules/cardSearch/containers/ListCardFilterMenu'

// TODO: Test this!
// NEED TO REFACTOR WHOLE CLASS
const props = {
  TDB: 'TODO'
}

describe('<ListCardFilterMenu />', () => {
  it('Should Render ListCardFilterMenu', () => {
    const wrapper = shallow(<ListCardFilterMenu {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
