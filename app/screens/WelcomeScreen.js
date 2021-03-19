import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {wsStyles, buttonContainer} from '../components/styles';
import AppButton from '../components/AppButton';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
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

    <View style={buttonContainer.container}>

      <AppButton
        title='login'
        onPress={()=> console.log('login pressed')}
      />

      <AppButton
        title='register'
        onPress={()=> console.log('register btn pressed')}
        color='secondary'
      />

    </View>




  </ImageBackground>
  )
}

export default WelcomeScreen;