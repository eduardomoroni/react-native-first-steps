import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

type SpinnerProps = {
  size: string
}

const Spinner = (props: SpinnerProps) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Spinner
