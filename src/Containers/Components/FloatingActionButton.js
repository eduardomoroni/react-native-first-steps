import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

export class FloatingActionButton extends Component {
  renderItem (item: ItemType, key: number) {
    const { name, ...itemProps } = item

    return (
      <ActionButton.Item {...itemProps} key={key}>
        <Icon name={name} style={styles.actionButtonIcon} />
      </ActionButton.Item>
    )
  }

  render () {
    return (
      <ActionButton buttonColor='rgba(231,76,60,1)'>
        {this.props.items.map(this.renderItem)}
      </ActionButton>
    )
  }
}

const ItemType = {
  name: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func
}

FloatingActionButton.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired
}

FloatingActionButton.defaultProps = {
  items: []
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
})
