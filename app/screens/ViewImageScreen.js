import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {vsStyles} from '../components/styles';
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


const ViewImageScreen = () => {
  return (
    <View style={vsStyles.container}>
      <View style={vsStyles.closeIcon}></View>
      <View style={vsStyles.deleteIcon}></View>
      <Image
        resizeMode='contain'
        source={require('../assets/chair.jpg')}
        style={vsStyles.image}
      ></Image>
    </View>
  )
}


export default ViewImageScreen;