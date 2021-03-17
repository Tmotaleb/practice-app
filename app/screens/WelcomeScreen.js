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
  ImageBackground,
  Image
} from 'react-native';


const WelcomeScreen = () => {
  return (
  <ImageBackground
    source={require('../assets/background.jpg')}
    style={styles.background}
  >
  <View style={styles.logoContainer}>
    <Image
      source={require('../assets/logo-red.png')}
      style={styles.logo}
    />
    <Text>Sell What You Don't Need</Text>
  </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>

  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ECDC4'
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  logo:{
    width: 100,
    height: 100,
  }
})

export default WelcomeScreen;