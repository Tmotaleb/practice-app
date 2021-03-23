import {StyleSheet} from 'react-native';
import colors from './colors';

const wsStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center'
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
  },
  tagline: {
    fontSize:25,
    fontWeight:'600',
    paddingVertical: 20,
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
});

const buttonContainer = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  // loginBtn: {
  //   width: '100%',
  //   height: 45,
  //   backgroundColor:'pink',
  //   backgroundColor: '#fc5c65',
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   padding: 10,
  //   alignItems: 'center',
  // },
  // registerBtn: {
  //   width: '100%',
  //   height: 45,
  //   backgroundColor: '#4ECDC4',
  //   borderRadius: 25,
  //   justifyContent: 'center',
  //   padding: 10,
  //   alignItems: 'center',
  // },
  // text: {
  //   color: 'white',
  //   fontSize: 18,
  //   textTransform: 'uppercase',
  //   fontWeight: 'bold'
  // }
})


const appButton = StyleSheet.create({
  btn: {
    backgroundColor: '#fc5c65',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})




const waterScn = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  btnBox: {

  }
})

export {wsStyles, vsStyles, buttonContainer, appButton, waterScn};