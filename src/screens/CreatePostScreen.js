import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

function CreatePostScreen() {

  return(
      <View style={styles.container}>
        <Text>Create Post Here</Text>
      </View>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})