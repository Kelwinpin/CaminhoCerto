import React from 'react'
import{View, Text, StyleSheet, Button} from 'react-native'

import Constants from 'expo-constants'

import CustomButton from './CustomButton'

import Header from './Header'

const onClick = () => {
  alert('Clique no botão')
}

export default(props) => {

  const navigation = props.navigation
  

  return(

    <View style ={styles.container}>

      <Header></Header>

      <View style={styles.buttons}>

        <CustomButton 
        title = 'SOS' 
        color = 'red' 
        onPress = {()=> navigation.navigate('contatos')}/>

        <CustomButton title = 'registro' color = '#24CBAF' onPress = {onClick}/>

        <CustomButton title = 'rastreio' color = '#24CBAF'  
        onPress = {()=> navigation.navigate('rastreio')}/>

      </View>  

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },

  buttons: {
    flex:1,
    justifyContent: "space-around",
    padding:20,
  }
})