import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

import { Auth } from 'aws-amplify';

function HomeScreen() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  return(
      <View style={styles.container}>
        <Text>Home page! Ring it up!</Text>
        <Button title="Sign Out" color="tomato" onPress={signOut} />
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})