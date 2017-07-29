import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, Modal as ReactNativeModal, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { View } from 'react-native-animatable'

// https://github.com/react-native-community/react-native-modal
export class Modal extends Component {
  state = {
    isVisible: false,
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
  };

  componentWillReceiveProps (nextProps) {
    if (!this.state.isVisible && nextProps.isVisible) {
      this.setState({ isVisible: true })
    }
  }

  componentWillMount () {
    if (this.props.isVisible) {
      this.setState({ isVisible: true })
    }
  }

  componentDidMount () {
    if (this.state.isVisible) {
      this._open()
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.isVisible && !prevState.isVisible) {
      this._open()
    } else if (!this.props.isVisible && prevProps.isVisible) {
      this._close()
    }
  }

  _open = () => {
    this.backdropRef.transitionTo(
      { opacity: this.props.backdropOpacity },
      this.props.backdropTransitionInTiming
    )
    this.contentRef[this.props.animationIn](this.props.animationInTiming).then(() => {
      this.props.onModalShow()
    })
  };

  _close = async () => {
    try {
      this.backdropRef.transitionTo({ opacity: 0 }, this.props.backdropTransitionOutTiming)
      this.contentRef[this.props.animationOut](this.props.animationOutTiming).then(() => {
        this.setState({ isVisible: false })
        this.props.onModalHide()
      })
    } catch (e) {
      console.log(e)
    }
  };

  _closeOnBack = () => {
    if (this.props.hideOnBack) {
      this._close()
    }
  };

  _handleLayout = event => {
    const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height
    if (deviceWidth !== this.state.deviceWidth || deviceHeight !== this.state.deviceHeight) {
      this.setState({ deviceWidth, deviceHeight })
    }
  };

  _renderCloseButton = (text) => (
    <TouchableOpacity onPress={this._close} style={styles.closeButton}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  render () {
    const {
      backdropColor,
      children,
      ...otherProps
    } = this.props
    const { deviceWidth, deviceHeight } = this.state
    const viewStyle = [styles.backdrop, { backgroundColor: backdropColor, width: deviceWidth, height: deviceHeight }]
    const modalContentStyle = [{ margin: deviceWidth * 0.08 }, styles.content]
    return (
      <ReactNativeModal
        transparent
        animationType={'none'}
        visible={this.state.isVisible}
        onRequestClose={this._closeOnBack}
        {...otherProps}
      >
        <View onLayout={this._handleLayout} ref={ref => { this.backdropRef = ref }} style={viewStyle} />
        <View
          ref={ref => { this.contentRef = ref }}
          style={modalContentStyle}
          {...otherProps}
        >
          {children}
          {this._renderCloseButton('Fechar')}
        </View>
      </ReactNativeModal>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: 'black'
  },
  content: {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  closeButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
})

Modal.propTypes = {
  animationIn: PropTypes.string,
  animationInTiming: PropTypes.number,
  animationOut: PropTypes.string,
  animationOutTiming: PropTypes.number,
  backdropColor: PropTypes.string,
  backdropOpacity: PropTypes.number,
  backdropTransitionInTiming: PropTypes.number,
  backdropTransitionOutTiming: PropTypes.number,
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onModalShow: PropTypes.func,
  onModalHide: PropTypes.func,
  hideOnBack: PropTypes.bool,
  style: PropTypes.any
}

Modal.defaultProps = {
  animationIn: 'slideInUp',
  animationInTiming: 300,
  animationOut: 'slideOutDown',
  animationOutTiming: 300,
  backdropColor: 'black',
  backdropOpacity: 0.70,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  onModalShow: () => null,
  onModalHide: () => null,
  isVisible: false,
  hideOnBack: true
}
