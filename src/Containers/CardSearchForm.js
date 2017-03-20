import React from 'react'
import I18n from 'react-native-i18n'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { realm } from '../Config/Realm'
import { inheritanceToArray } from '../Realm/Conversion/Realm-utils'
import { Metrics, Colors } from '../Styles/Themes'
import { searchForCards } from '../Redux/Actions'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Picker,
  TextInput,
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

const renderInput = (fieldProps) => {
  const { onChange, name } = fieldProps.input
  return (
    <TextInput
      style={Styles.input}
      placeholder={I18n.t(name)}
      onChangeText={onChange}
    />
  )
}

const renderDropdown = (fieldProps) => {
  const { input, dropdownItems, selectedValue } = fieldProps
  const { onChange } = input

  const renderPickerItem = (value, key) => {
    return <Picker.Item label={value} value={value} key={key} />
  }

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onChange}>
      { dropdownItems.map(renderPickerItem) }
    </Picker>
  )
}

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
      <Field name='cardName' component={renderInput} />
      <Field name='cardType' component={renderDropdown} dropdownItems={cardTypes} selectedValue={cardType} />
      <Field name='cardSubType' component={renderDropdown} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
      <Field name='cardText' component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={Styles.button}>{I18n.t('search')}</Text>
      </TouchableOpacity>
    </View>
  )
}

Field.propTypes = {
  dropdownItems: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedValue: React.PropTypes.string
}

const Styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.navBarHeight
  },
  input: {
    height: 40
  },
  button: {
    backgroundColor: Colors.facebook,
    color: 'white',
    height: 40,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    cardTypes: inheritanceToArray(realm.objects('Type').snapshot()),
    cardSubTypes: inheritanceToArray(realm.objects('SubType').snapshot()),
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
