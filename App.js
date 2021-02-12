import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
import WelcomeScreen from './src/components/screens/WelcomeScreen'
import SignUpScreen from './src/components/screens/SignUpScreen'
import SignInScreen from './src/components/screens/SignInScreen'
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen'

const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`,
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})

const NavSwitch = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator
})

const App = createAppContainer(NavSwitch)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})