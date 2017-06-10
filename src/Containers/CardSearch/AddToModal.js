import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { cardType } from '../../Types/CardType'
import { Modal, SubmitButtonForm, DropdownInputForm } from '../Components'
import WishListService from '../../Services/WishListService'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import { RkText } from 'react-native-ui-kitten'

export class AddToModal extends Component {
  constructor () {
    super()
    this.state = {
      isVisible: true
    }
  }

  toggleModal () {
    this.state.isVisible = !this.state.isVisible
  }

  addCardAmountToList (listName, card, amount) {
    const { wishList } = this.props
    console.log(wishList[listName], listName, amount)
    WishListService.updateCardAmount(card, 2, wishList.have)
  }

  render () {
    const {
      card,
      wishList,
      howMuchCards,
      whichTradeList
    } = this.props

    const tradeLists = ['want', 'have']
    const numberRange = ['1', '2', '3', '4']

    console.log(wishList)
    return (
      <Modal isVisible onModalHide={() => this.toggleModal()} >
        <View style={styles.modal}>
          <RkText style={styles.title}>
            {`Add to TradeList`}
          </RkText>
          <Field name='whichTradeList' component={DropdownInputForm} dropdownItems={tradeLists} selectedValue={whichTradeList} />
          <Field name='howMuchCards' component={DropdownInputForm} dropdownItems={numberRange} selectedValue={howMuchCards} />
        </View>
        <View>
          <SubmitButtonForm onPress={() => this.addCardAmountToList(whichTradeList, card, howMuchCards)} />
        </View>
      </Modal>
    )
  }
}

AddToModal.propTypes = {
  card: cardType.isRequired,
  listToAdd: PropTypes.any
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  },
  modal: {
    backgroundColor: 'white',
    height: 400,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  }
})

const mapStateToProps = (state) => {
  const selector = formValueSelector('AddToModalForm')

  return {
    whichTradeList: selector(state, 'whichTradeList'),
    howMuchCards: selector(state, 'howMuchCards')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const AddToModalDecorated = reduxForm({form: 'AddToModalForm'})(AddToModal)
export default connect(mapStateToProps, mapDispatchToProps)(AddToModalDecorated)
