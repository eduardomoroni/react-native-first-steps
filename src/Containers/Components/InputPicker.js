import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from '../../Styles/FormStyle'
import { Picker } from 'react-native'

export class InputPicker extends PureComponent {
  renderPickerItem = (value, key) => {
    return <Picker.Item label={value} value={value} key={key} />
  }

  render () {
    const { selectedValue, onValueChange, dropdownItems } = this.props

    return (
      <Picker
        style={styles.dropdown}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        { dropdownItems.map(this.renderPickerItem) }
      </Picker>
    )
  }
}

InputPicker.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

InputPicker.defaultProps = {
  selectedValue: ''
}
