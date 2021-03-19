import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {appButton} from './styles';
import colors from './colors';

const AppButton = ({onPress, title, color='primary'}) => {

  return (
    <TouchableOpacity style={[appButton.btn, {backgroundColor:colors[color]}]} onPress={onPress}>
      <Text style={appButton.text}>{title}</Text>
    </TouchableOpacity>
  );
}



export default AppButton;