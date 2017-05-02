import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { RkText } from 'react-native-ui-kitten'
import { SocialIcon } from 'react-native-elements'
import { loginUser, logoutUser } from '../../Redux/Actions'
import type { Dispatch } from 'redux'

export class LoginScreen extends Component {
  renderFacebookButton () {
    const { facebookLogin, facebookLogout } = this.props
    const isLogged = this.isLoggedIn()
    const onPress = isLogged ? facebookLogout : facebookLogin
    const title = isLogged ? 'Log Out' : 'Sign In With Facebook'
    return (
      <View>
        <SocialIcon
          onPress={onPress}
          title={title}
          button
          type='facebook'
        />
      </View>
    )
  }

  isLoggedIn () {
    return !!this.props.token.accessToken
  }

  render () {
    const {
      token,
      error
    } = this.props
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            <RkText style={styles.title}>
              SIGN IN
            </RkText>
          </View>
          <View>
            <RkText style={styles.error}>
              {this.isLoggedIn() ? token.userID : error.message}
            </RkText>
          </View>
          {this.renderFacebookButton()}
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    justifyContent: 'space-around',
    flex: 1
  },
  title: {
    fontSize: 42,
    textAlign: 'center'
  },
  error: {
    fontSize: 32,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  const { loading, error } = state.auth
  const token = state.user
  return { loading, token, error }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    facebookLogin: () => dispatch(loginUser()),
    facebookLogout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
