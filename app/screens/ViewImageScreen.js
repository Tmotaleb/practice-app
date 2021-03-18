import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import colors from '../config/colors'
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
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode='contain'
        source={require('../assets/chair.jpg')}
        style={styles.image}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left:30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top:40,
    right:30
  },
  image: {
    width: '100%',
    height: '100%',
  }

})


export default ViewImageScreen;