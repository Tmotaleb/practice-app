import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  SafeAreaView,
  ImageBackground
} from 'react-native';

const App = () => {

 const { landscape } = useDeviceOrientation()

  return (
      <WelcomeScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

export default App;