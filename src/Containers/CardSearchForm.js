import React from 'react'
import I18n from 'react-native-i18n'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Input, Label, Header, Button, Text, Picker } from 'native-base'
import R from 'ramda'

const selector = formValueSelector('CardSearchForm')

const cardTypes = {
  land: 'land',
  creature: 'creature',
  enchantment: 'enchantment'
}

const cardSubTypes = {
  goblin: 'goblin',
  human: 'human'
}

const submit = values => {
  console.log('submitting form' + JSON.stringify(values))
}

const renderInput = (payload) => {
  const { onChange, name } = payload.input
  return (
    <Item inlineLabel>
      <Label>{I18n.t(name)}</Label>
      <Input onChangeText={onChange} />
    </Item>
  )
}

const renderPickerItem = (value, key) => {
  return (
    <Picker.Item label={key} value={value} />
  )
}

const renderDropdown = ({ input: { onChange, name, value }, dropdownItems, selectedValue }) => {
  return (
    <Item inlineLabel>
      <Label>{I18n.t(name)}</Label>
      <Picker
        iosHeader={I18n.t(name)}
        mode='dropdown'
        selectedValue={selectedValue}
        onValueChange={onChange}>
        { R.mapObjIndexed(renderPickerItem, dropdownItems) }
      </Picker>
    </Item>
  )
}

let CardSearchForm = props => {
  const { handleSubmit, cardType, cardSubType } = props
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Field name='cardName' component={renderInput} />
          <Field name='cardType' component={renderDropdown} dropdownItems={cardTypes} selectedValue={cardType} />
          <Field name='cardSubType' component={renderDropdown} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
          <Field name='cardText' component={renderInput} />
        </Form>
        <Button full onPress={handleSubmit(submit)}>
          <Text>{I18n.t('search')}</Text>
        </Button>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    cardName: selector(state, 'cardName'),
    cardType: selector(state, 'cardType'),
    cardSubType: selector(state, 'cardSubType'),
    cardText: selector(state, 'cardText')
  }
}

CardSearchForm = reduxForm({
  form: 'CardSearchForm'
})(CardSearchForm)

CardSearchForm = connect(mapStateToProps)(CardSearchForm)

export default CardSearchForm
