/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Keyboard } from 'react-native'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { searchForCards, showFormModal } from '../../Redux/Actions'
import Styles from '../../Styles/CardSearchFormStyle'
import { valuesOf } from '../../Realm/RealmService'
import type { Dispatch } from 'redux'
import {
  DropdownInputForm,
  Modal,
  MultiSelect,
  ManaIconsBar,
  SubmitButtonForm,
  NumericInputForm,
  ModalToggle,
  TextInputForm
} from '../Components'

export class CardSearchForm extends Component {
  renderThreeFieldInRow (fieldOne, fieldTwo, fieldThree) {
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

  renderTwoFieldInRow (leftField, rightField) {
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

  renderModal () {
    let modalContent = {}
    let { visibleModal, cardSets, cardFormats, cardRarities } = this.props

    if (visibleModal === 'cardRarity') {
      modalContent = <Field name='cardRarity' component={MultiSelect} items={cardRarities} />
    } else if (visibleModal === 'cardSet') {
      modalContent = <Field name='cardSet' component={MultiSelect} items={cardSets} />
    } else if (visibleModal === 'cardFormat') {
      modalContent = <Field name='cardFormat' component={MultiSelect} items={cardFormats} />
    } else {
      return <View />
    }
    return (
      <Modal isVisible onModalHide={() => this.props.showModal('')} >
        {modalContent}
      </Modal>
    )
  }

  render () {
    const {
      handleSubmit,
      cardTypes,
      cardSubTypes,
      cardType,
      cardSubType,
      showModal,
      searchCards,
      cardRarity,
      cardSet,
      cardFormat
    } = this.props

    const formSubmit = (formValues) => {
      Keyboard.dismiss()
      console.log('Form sent: ', formValues)
      searchCards(formValues)
    }

    const numericOperators = ['', '<', '<=', '=', '>=', '=']

    return (
      <View style={Styles.container}>
        <View style={Styles.formContainer}>
          <Field name='cardName' component={TextInputForm} />
          <Field name='cardText' component={TextInputForm} />
          { this.renderTwoFieldInRow(
            <Field name='cardType' component={DropdownInputForm} dropdownItems={cardTypes} selectedValue={cardType} />,
            <Field name='cardSubType' component={DropdownInputForm} dropdownItems={cardSubTypes} selectedValue={cardSubType} />
        )}
          { this.renderThreeFieldInRow(
            <Field name='cardPower' component={NumericInputForm} dropdownItems={numericOperators} />,
            <Field name='cardToughness' component={NumericInputForm} dropdownItems={numericOperators} />,
            <Field name='cardCMC' component={NumericInputForm} dropdownItems={numericOperators} />
        )}
          <Field name='cardColors' component={ManaIconsBar} />
          {/* Secundary Options */}
          <Field name='cardFlavorText' component={TextInputForm} />
          { this.renderTwoFieldInRow(
            <Field name='cardArtist' component={TextInputForm} />,
            <Field name='cardCollectionNumber' component={TextInputForm} keyboardType={'numeric'} maxLength={3} />
        )}
          { this.renderThreeFieldInRow(
            <ModalToggle label='cardRarity' onPress={showModal} selected={cardRarity} />,
            <ModalToggle label='cardSet' onPress={showModal} selected={cardSet} />,
            <ModalToggle label='cardFormat' onPress={showModal} selected={cardFormat} />
        )}
          <Field name='cardColorsIdentity' component={ManaIconsBar} />
          {this.renderModal()}
        </View>
        <View style={Styles.containerFooter}>
          <SubmitButtonForm onPress={handleSubmit(formSubmit)} />
        </View>
      </View>
    )
  }
}

Field.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string),
  selectedValue: PropTypes.string
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchForm')

  const cardRarities = ['Common', 'Uncommon', 'Rare', 'Mythic Rare']
  const cardTypes = valuesOf('Type')
  const cardSubtypes = valuesOf('SubType')
  const printings = valuesOf('Printing')
  const formats = valuesOf('Legality')

  cardTypes.unshift('')
  cardSubtypes.unshift('')

  return {
    cardType: selector(state, 'cardType'),
    cardSubType: selector(state, 'cardSubType'),
    cardSubTypes: cardSubtypes,
    cardTypes: cardTypes,
    cardSets: printings,
    cardFormats: formats,
    cardRarity: selector(state, 'cardRarity'),
    cardSet: selector(state, 'cardSet'),
    cardFormat: selector(state, 'cardFormat'),
    visibleModal: state.cardSearch.visibleModal,
    cardRarities: cardRarities
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    searchCards: (cardSearchForm) => dispatch(searchForCards(cardSearchForm)),
    showModal: (modal) => dispatch(showFormModal(modal))
  }
}

const cardSearchFormDecorated = reduxForm({form: 'CardSearchForm'})(CardSearchForm)
export default connect(mapStateToProps, mapDispatchToProps)(cardSearchFormDecorated)
