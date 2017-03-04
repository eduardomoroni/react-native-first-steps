import React from 'react'
import I18n from 'react-native-i18n'
import { reduxForm, Field } from 'redux-form'
import { Container, Content, Form, Item, Input, Label, Header, Button, Text } from 'native-base'

const submit = values => {
  console.log('submitting form', values)
}

// { input: { onChange, ...restInput }} = payload
const renderInput = (payload) => {
  const { onChange, name } = payload.input
  return (
    <Item floatingLabel>
      <Label>{I18n.t(name)}</Label>
      <Input onChangeText={onChange} />
    </Item>
  )
}

const CardSearchForm = props => {
  const { handleSubmit } = props

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Field name='cardName' test='testevar' component={renderInput} />
        </Form>
      </Content>
      <Button full onPress={handleSubmit(submit)}>
        <Text>Primary</Text>
      </Button>
    </Container>
  )
}

export default reduxForm({
  form: 'CardSearchForm'
})(CardSearchForm)
