import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { realm } from '../Config/Realm'
import { inheritanceToArray } from '../Realm/Conversion/Realm-utils'
import { Metrics } from '../Styles/Themes'
import { searchForCards } from '../Redux/Actions'
import TextInputForm from './Components/TextInputForm'
import DropdownInputForm from './Components/DropdownInputForm'
import SubmitButtonForm from './Components/SubmitButtonForm'

import {
  StyleSheet,
  View,
  Keyboard
} from 'react-native'

type CardSearchFormProps = {
  cardTypes: any,
  cardSubTypes: any,
  cardType: string,
  cardSubType: string,
  searchCards: () => void,
  handleSubmit: any
}

const selector = formValueSelector('CardSearchForm')

let CardSearchForm = (props: CardSearchFormProps) => {
  const {
    handleSubmit,
    cardTypes,
    cardSubTypes,
    searchCards
  } = props

  const {
    cardType,
    cardSubType
  } = props

  const submit = values => {
    Keyboard.dismiss()
    searchCards(values)
  }

  return (
    <View style={Styles.container}>
      <Field name='cardName' component={TextInputForm} />
      <Field name='cardText' component={TextInputForm} />
      <Field name='cardType' component={DropdownInputForm} dropdownItems={cardTypes} selectedValue={cardType} />
      <Field name='cardSubType' component={DropdownInputForm} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
      <SubmitButtonForm onPress={handleSubmit(submit)} />
    </View>
  )
}

Field.propTypes = {
  dropdownItems: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedValue: React.PropTypes.string
}

const Styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.navBarHeight + 15
  }
})

const mapStateToProps = (state) => {
  const cardTypes = inheritanceToArray(realm.objects('Type').snapshot())
  const cardSubtypes = inheritanceToArray(realm.objects('SubType').snapshot())

  cardTypes.unshift('')
  cardSubtypes.unshift('')

  return {
    cardTypes: cardTypes,
    cardSubTypes: cardSubtypes,
    cardName: selector(state, 'cardName'),
    cardType: selector(state, 'cardType'),
    cardSubType: selector(state, 'cardSubType'),
    cardText: selector(state, 'cardText')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCards: (cardSearchForm) => dispatch(searchForCards(cardSearchForm))
  }
}

CardSearchForm = reduxForm({form: 'CardSearchForm'})(CardSearchForm)
export default connect(mapStateToProps, mapDispatchToProps)(CardSearchForm)
