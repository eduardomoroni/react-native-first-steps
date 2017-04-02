import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { realm } from '../../Config/Realm'
import { inheritanceToArray } from '../../Realm/Conversion/JsonCard'
import { searchForCards } from '../../Redux/Actions'
import Styles from '../../Styles/CardSearchFormStyle'
import TextInputForm from '../Components/TextInputForm'
import NumericInputForm from '../Components/NumericInputForm'
import DropdownInputForm from '../Components/DropdownInputForm'
import SubmitButtonForm from '../Components/SubmitButtonForm'
import ManaIconsBar from '../Components/ManaIconsBar'
import MultipleSelect from '../Components/MultipleSelect'

import {
  View,
  TouchableOpacity,
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
    searchCards,
    cardType,
    cardSubType
  } = props

  const submit = values => {
    Keyboard.dismiss()
    console.log('FORM', values)
    searchCards(values)
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <Field name='cardName' component={TextInputForm} />
        { renderTwoFieldInRow(
          <Field name='cardType' component={DropdownInputForm} dropdownItems={cardTypes} selectedValue={cardType} />,
          <Field name='cardSubType' component={DropdownInputForm} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
        )}
        <Field name='cardText' component={TextInputForm} />
        <Field name='cardColors' component={ManaIconsBar} />
        { renderThreeFieldInRow(
          <Field name='cardPower' component={NumericInputForm} />,
          <Field name='cardToughness' component={NumericInputForm} />,
          <Field name='cardCMC' component={NumericInputForm} />
        )}
        <Field name='cardRarity' component={MultipleSelect} items={['a', 'b', 'c']} selectedItems={['b']} onSelectionsChange={(value) => { console.log(value) }} />
      </View>
      <TouchableOpacity style={Styles.containerFooter} onPress={handleSubmit(submit)} >
        <SubmitButtonForm onPress={handleSubmit(submit)} />
      </TouchableOpacity>
    </View>
  )
}

const renderTwoFieldInRow = (leftField, rightField) => {
  return (
    <View style={Styles.multipleFieldsPerLine}>
      <View style={Styles.leftField}>
        {leftField}
      </View>
      <View style={Styles.rightField}>
        {rightField}
      </View>
    </View>
  )
}

const renderThreeFieldInRow = (fieldOne, fieldTwo, fieldThree) => {
  return (
    <View style={Styles.multipleFieldsPerLine}>
      <View style={Styles.leftField}>
        {fieldOne}
      </View>
      <View style={Styles.middleField}>
        {fieldTwo}
      </View>
      <View style={Styles.rightField}>
        {fieldThree}
      </View>
    </View>
  )
}

Field.propTypes = {
  dropdownItems: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedValue: React.PropTypes.string
}

const mapStateToProps = (state) => {
  const cardTypes = inheritanceToArray(realm.objects('Type').snapshot())
  const cardSubtypes = inheritanceToArray(realm.objects('SubType').snapshot())

  cardTypes.unshift('')
  cardSubtypes.unshift('')

  return {
    cardType: selector(state, 'cardType'),
    cardSubType: selector(state, 'cardSubType'),
    cardSubTypes: cardSubtypes,
    cardTypes: cardTypes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCards: (cardSearchForm) => dispatch(searchForCards(cardSearchForm))
  }
}

CardSearchForm = reduxForm({form: 'CardSearchForm'})(CardSearchForm)
export default connect(mapStateToProps, mapDispatchToProps)(CardSearchForm)
