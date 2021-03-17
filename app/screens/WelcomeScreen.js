import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  SafeAreaView,
  ImageBackground
} from 'react-native';


const WelcomeScreen = () => {
  return (
  <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.background}
  >
  <View style={styles.loginButton}>

  </View>

  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  }
})

export default WelcomeScreen;