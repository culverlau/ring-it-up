import React from 'react';
import { StyleSheet, View, Text, Button, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Amplify, { Auth } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config);

// import { AuthProvider } from './src/contexts/authContext';

// import SplashScreen from './src/screens/SplashScreen';
// import AppNavigator from './src/navigation/AppNavigator';

function App() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  return (
    // <NavigationContainer>
    //   <AuthProvider>
    //     <AppNavigator />
    //   </AuthProvider>
    // </NavigationContainer>
    <View style={styles.container}>
      <Text> Home page! Ring it up! </Text>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
      <StatusBar style='auto' />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aa73b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
