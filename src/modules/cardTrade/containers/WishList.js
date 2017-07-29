import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'

export class WishList extends Component {
  render () {
    return (
      <View style={styles.container} />
    )
  }
}

WishList.propTypes = {
  foo: PropTypes.any
}

WishList.defaultProps = {
  foo: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
