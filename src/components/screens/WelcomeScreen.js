import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* App Logo Here */}
        <TouchableOpacity 
          onPress={() => this.handleRoute('SignIn')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.handleRoute('SignUp')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.handleRoute('ForgotPassword')}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Forget password ?</Text>
        </TouchableOpacity>
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
  },
  buttonStyle: {
    padding: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  }
})