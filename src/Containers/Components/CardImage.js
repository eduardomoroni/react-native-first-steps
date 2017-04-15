/* @flow */

import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native'

type CardImageProps = {
  card: any
}

type CardImageState = {
  loading: boolean
}

export class CardImage extends PureComponent {
  props: CardImageProps
  state: CardImageState

  constructor () {
    super()
    this.state = { loading: true }
  }

  render () {
    const { multiverseid } = this.props.card
    const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`

    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' style={this.state.loading ? styles.spinner : styles.hidden} />
        <Image
          style={this.state.loading ? styles.hidden : styles.image}
          source={{uri: IMG_URL}}
          onLoad={(e) => this.setState({loading: false})}
          onLoadStart={(e) => this.setState({loading: true})}
          onError={() => console.error('Error while loading card image')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  spinner: {
    flex: 1,
    justifyContent: 'center'
  },
  hidden: {
    width: 0,
    height: 0
  }
})
