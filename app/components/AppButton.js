import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {appBtn} from '../components/styles'

function AppButton({title, onPress}) {
  return (
    <TouchableOpacity style={appBtn.button} onPress={onPress}>
      <Text style={appBtn.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;