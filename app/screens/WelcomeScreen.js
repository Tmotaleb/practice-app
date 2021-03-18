import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {wsStyles} from '../components/styles';
import AppButton from '../components/AppButton';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';


const WelcomeScreen = () => {
  return (
  <ImageBackground
    source={require('../assets/background.jpg')}
    style={wsStyles.background}
  >
  <View style={wsStyles.logoContainer}>
    <Image
      source={require('../assets/logo-red.png')}
      style={wsStyles.logo}
    />
    <Text>Sell What You Don't Need</Text>
  </View>
    {/* <View style={wsStyles.loginButton}>
      <Button
        title='LOGIN'
        color='white'
        onPress={()=> console.log('button tapped')}
      />
    </View> */}
    <AppButton title='login' onPress={()=> console.log('my new btn!')}/>
    <View style={wsStyles.registerButton}></View>

  </ImageBackground>
  )
}

export default WelcomeScreen;