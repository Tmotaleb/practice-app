import {StyleSheet} from 'react-native';
import colors from './colors';

const wsStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#fc5c65',
    borderRadius: 20,
    margin: 10,
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

const vsStyles = StyleSheet.create({
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

const appBtn = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#fc5c65',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

export {wsStyles, vsStyles, appBtn};