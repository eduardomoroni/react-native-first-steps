// https://github.com/tableflip/react-native-select-multiple
// https://facebook.github.io/react/docs/forms.html#controlled-components
import React, { Component, PropTypes } from 'react'
import { View, ListView, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../Styles/MultipleSelectStyle'
import checkbox from '../../Assets/Images/icon-checkbox.png'
import checkboxChecked from '../../Assets/Images/icon-checkbox-checked.png'

const itemType = PropTypes.oneOfType(
  PropTypes.string,
  PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
)

// A customiseable ListView that allows you to select multiple rows
export default class SelectMultiple extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemType).isRequired,
    selectedItems: PropTypes.arrayOf(itemType),
    onSelectionsChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    selectedItems: []
  }

  constructor (props) {
    super(props)
    const rows = this.getRowData(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.value !== r2.value || r1.selected !== r2.selected
    }).cloneWithRows(rows)

    this.state = { dataSource }
  }

  componentWillReceiveProps (nextProps) {
    const rows = this.getRowData(nextProps)
    const dataSource = this.state.dataSource.cloneWithRows(rows)
    this.setState({ dataSource })
  }

  getRowData ({ items, selectedItems }) {
    items = items.map(this.toLabelValueObject)
    selectedItems = (selectedItems || []).map(this.toLabelValueObject)

    items.forEach((item) => {
      item.selected = selectedItems.some((i) => i.value === item.value)
    })

    return items
  }

  onRowPress (row) {
    row = Object.assign({}, row)

    let { selectedItems } = this.props

    selectedItems = (selectedItems || []).map(this.toLabelValueObject)

    const index = selectedItems.findIndex((selectedItem) => selectedItem.value === row.value)

    if (index > -1) {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem.value !== row.value)
    } else {
      selectedItems = selectedItems.concat(row)
    }

    this.props.onSelectionsChange(selectedItems, row)
  }

  toLabelValueObject (obj) {
    if (Object.prototype.toString.call(obj) === '[object String]') {
      return { label: obj, value: obj }
    } else {
      return { label: obj.label, value: obj.value }
    }
  }

  render () {
    const { dataSource } = this.state
    const { style } = this.props
    const { renderItemRow } = this
    return <ListView style={style} dataSource={dataSource} renderRow={renderItemRow} />
  }

  renderItemRow = (row) => {
    return (
      <TouchableOpacity onPress={() => this.onRowPress(row)}>
        <View style={styles.row}>
          <Image style={styles.checkbox} source={row.selected ? checkboxChecked : checkbox} />
          <Text style={styles.label}>{row.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
