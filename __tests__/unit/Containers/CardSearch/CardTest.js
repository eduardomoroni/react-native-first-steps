import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { Card, getLastPrinting } from '../../../../src/Containers/CardSearch/Card'
import * as Convertion from '../../../../src/Realm/Conversion/Placeholder'

const props = {
  showCardText: true,
  card: {
    name: 'CardName',
    text: 'CardText',
    manaCost: '{1}{W}{B}',
    type: 'CardType',
    power: 2,
    toughness: 4,
    printings: { '0': { printing: 'AER' } }
  }
}

const hasKey = key => {
  return n => n.key() === key
}

const findRenderedTextFromKey = (wrapper, key) => {
  return wrapper.findWhere(hasKey(key)).childAt(0).text()
}

describe('<Card />', () => {
  const {
    name,
    manaCost,
    type,
    text,
    power,
    toughness,
    printings
  } = props.card
  Convertion.placeholdersToSymbols = jest.fn(text => `placeholdersToSymbols(${text})`)

  it('should render Card component', () => {
    const wrapper = shallow(<Card {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(findRenderedTextFromKey(wrapper, 'cardName')).toEqual(name)
    expect(findRenderedTextFromKey(wrapper, 'cardManaCost')).toEqual(Convertion.placeholdersToSymbols(manaCost))
    expect(findRenderedTextFromKey(wrapper, 'cardType')).toEqual(type)
    expect(findRenderedTextFromKey(wrapper, 'cardEdition')).toEqual(getLastPrinting(printings))
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual(text)
    expect(findRenderedTextFromKey(wrapper, 'cardPowerAndToughness')).toEqual(`${power}/${toughness}`)
    expect(Convertion.placeholdersToSymbols).toHaveBeenCalledWith(props.card.manaCost)
  })

  it('should hide card text', () => {
    const wrapper = shallow(<Card {...props} showCardText={false} />)
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual('')

    wrapper.setProps({...props, showCardText: true})
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual(props.card.text)
  })

  it('should show only the lastest printing as cardEdition', () => {
    const printExamples = { '0': { printing: 'STH' }, '1': { printing: 'TPR' }, '2': { printing: 'EXP' } }
    const wrapper = shallow(<Card card={{printings: printExamples}} />)
    expect(findRenderedTextFromKey(wrapper, 'cardEdition')).toEqual('EXP')
  })
  it('should extract last printing from Realm representation', () => {
    const realmRepresentation = { '0': { printing: 'STH' }, '1': { printing: 'TPR' }, '2': { printing: 'AER' } }
    expect(getLastPrinting(realmRepresentation)).toEqual('AER')
  })
})
