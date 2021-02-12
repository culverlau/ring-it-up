import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wonderful stuff here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})