import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

function TeamScreen() {

  return(
      <View style={styles.container}>
        <Text>Team Screen</Text>
      </View>
  )
}

export default TeamScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})