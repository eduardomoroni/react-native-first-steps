import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { cardType } from '../../Types/CardType'
import { Modal } from './'

import { RkText } from 'react-native-ui-kitten'
import { Button } from 'react-native-elements'

export class AddToModal extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: true,
    }
  }

  toggleModal () {
    this.state.isVisible = !this.state.isVisible
  }

  render () {
    const { card, list } = this.props
    return (
      <Modal isVisible onModalHide={() => this.toggleModal()} >
        <View style={styles.modal}>
          <RkText style={styles.title}>
            {`ADD ${card.name} TO WANT LIST`}
          </RkText>
          <Button
            large
            iconRight
            icon={{name: 'code'}}
            onPress={() => console.log('ADD CARD TO SOMETHING')}
            title='ADD'
          />
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
    height: 400
  }
})
