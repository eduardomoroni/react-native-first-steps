// @flow

import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { Spinner } from './Components'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'
import { loginUser } from '../Redux/Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

type LoginScreenProps = {
  user: any,
  error: string,
  loading: boolean,
  dispatch: () => any,
  attemptLogin: () => void
}

class LoginScreen extends React.Component {
  props: LoginScreenProps

  state: {
    email: string,
    password: string,
    visibleHeight: number,
    topLogo: {
      width: number
    }
  }

  constructor (props: LoginScreenProps) {
    super(props)
    this.state = {
      email: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()

    if (newProps.user !== null) {
      NavigationActions.pop()
    } else {
      this.state.password = ''
    }
  }

  handlePressLogin = () => {
    const { email, password } = this.state

    this.props.attemptLogin({ email, password })
  }

  handleChangeEmail = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  renderButtons () {
    const { loading } = this.props

    if (loading) {
      return (
        <View style={[Styles.loginRow]}>
          <Spinner size='large' />
        </View>
      )
    }

    return (
      <View style={[Styles.loginRow]}>
        <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
          <View style={Styles.loginButton}>
            <Text style={Styles.loginText}>{I18n.t('signIn')}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.loginButtonWrapper} onPress={NavigationActions.pop}>
          <View style={Styles.loginButton}>
            <Text style={Styles.loginText}>{I18n.t('cancel')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { email, password } = this.state
    const { loading } = this.props
    const editable = !loading
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly

    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} />
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{I18n.t('email')}</Text>
            <TextInput
              ref='email'
              style={textInputStyle}
              value={email}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeEmail}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder={I18n.t('email')} />
          </View>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{I18n.t('password')}</Text>
            <TextInput
              ref='password'
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder={I18n.t('password')} />
          </View>

          {this.renderButtons()}

          <View>
            <Text style={Styles.rowLabel}>{this.props.error}</Text>
          </View>
        </View>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading, error } = state.auth
  const { user } = state.user

  return {
    loading: loading,
    error: error,
    user: user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (credentials) => dispatch(loginUser(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
