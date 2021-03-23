// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {waterScn} from '../components/styles';
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


const WaterScreen = () => {

  return (
    <SafeAreaView style={waterScn.container}>
      <Text>Hello</Text>
      <View style={waterScn.btnBox}>
        <TouchableOpacity style={waterScn.btn} onPress={() => console.log('i am water btn')}>
          <Text>+</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


export default WaterScreen;