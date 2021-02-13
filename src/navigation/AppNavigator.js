import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/auth/SplashScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  <Stack.Navigator>
    {state.userToken == null ? (
      <>
        <Stack.Screen
          name='SignIn'
          component={SignInScreen}
          options={{
            title: 'Sign In',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ForgetPassword' component={ForgetPasswordScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name='Home' component={HomeScreen} />
      </>
    )}
  </Stack.Navigator>;
}
