import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { realm } from '../../Config/Realm'
import { inheritanceToArray } from '../../Realm/Conversion/JsonCard'
import { searchForCards, showFormModal } from '../../Redux/Actions'
import Styles from '../../Styles/CardSearchFormStyle'
import TextInputForm from '../Components/TextInputForm'
import ModalToggle from '../Components/ModalToggle'
import NumericInputForm from '../Components/NumericInputForm'
import DropdownInputForm from '../Components/DropdownInputForm'
import SubmitButtonForm from '../Components/SubmitButtonForm'
import ManaIconsBar from '../Components/ManaIconsBar'
import MultipleSelect from '../Components/MultiSelect'
import Modal from '../Components/Modal'

import {
  View,
  TouchableOpacity,
  Keyboard
} from 'react-native'

class CardSearchForm extends React.Component {
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
    let { visibleModal, cardSets, cardFormats } = this.props

    if (visibleModal === 'cardRarity') {
      modalContent = <Field name='cardRarity' component={MultipleSelect} items={['Common', 'Uncommon', 'Rare', 'Mythic Rare']} />
    } else if (visibleModal === 'cardSet') {
      modalContent = <Field name='cardSet' component={MultipleSelect} items={cardSets} />
    } else if (visibleModal === 'cardFormat') {
      modalContent = <Field name='cardFormat' component={MultipleSelect} items={cardFormats} />
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
            <ModalToggle label='cardFormat' onPress={showModal} selected={cardFormat} />,
        )}
          <Field name='cardColorsIdentity' component={ManaIconsBar} />
          {this.renderModal()}
        </View>
        <TouchableOpacity style={Styles.containerFooter} onPress={handleSubmit(formSubmit)} >
          <SubmitButtonForm onPress={handleSubmit(formSubmit)} />
        </TouchableOpacity>
      </View>
    )
  }
}

Field.propTypes = {
  dropdownItems: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedValue: React.PropTypes.string
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('CardSearchForm')

  const cardTypes = inheritanceToArray(realm.objects('Type').snapshot())
  const cardSubtypes = inheritanceToArray(realm.objects('SubType').snapshot())
  const printings = inheritanceToArray(realm.objects('Printing').snapshot())
  const formats = inheritanceToArray(realm.objects('Legality').snapshot())

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
    visibleModal: state.cardSearch.visibleModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCards: (cardSearchForm) => dispatch(searchForCards(cardSearchForm)),
    showModal: (modal) => dispatch(showFormModal(modal))
  }
}

const cardSearchFormDecorated = reduxForm({form: 'CardSearchForm'})(CardSearchForm)
export default connect(mapStateToProps, mapDispatchToProps)(cardSearchFormDecorated)
