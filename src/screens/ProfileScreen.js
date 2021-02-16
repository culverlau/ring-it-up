import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

function ProfileScreen() {

  return(
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})