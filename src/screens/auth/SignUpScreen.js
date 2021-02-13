import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

import Amplify from '@aws-amplify/core'
import {Authenticator} from 'aws-amplify-react-native'
import config from "../../aws-exports"

Amplify.configure(config)


const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

export default class SignUpScreen extends React.Component {
  state = {
		name: "",
		todos: []
	}

	onChangeText = (key, val) => {
		this.setState({ [key]: val })
	}

	addTodo = () => {}

  render() {
    return (
      <View style={styles.container}>
				<StatusBar barStyle="dark-content" />
        <Authenticator 
          usernameAttributes="email"
          signUpConfig={signUpConfig} />
			</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
		paddingTop: 50
	},
	input: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "blue",
		marginVertical: 10
	},
	buttonContainer: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
    alignItems: "center"
	},
	buttonText: {
		color: "#fff",
		fontSize: 24
	}
})