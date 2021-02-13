import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'

// import { AuthContext } from '../../authContext';

function HomeScreen() {
  // const { signOut } = React.useContext(AuthContext)

  return(
      <View style={styles.container}>
        <Text>Wonderful stuff here</Text>
        <Button title="Log Out" />
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