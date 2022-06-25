import React from 'react'
import{View, Text, StyleSheet, Image} from 'react-native'

import logo from '../assets/logo.png'

export default () =>(
  <View style = {styles.view}>
    <Text style = {styles.text}>Caminho Certo</Text>
    <Image source={logo} style = {styles.img} />
  </View>
)


const styles = StyleSheet.create({
  text:{
    fontFamily:'roboto',
    fontWeight:'bold',
    fontSize:26,
    color:'white'
  },
  view:{
    alignItems:"center",
    padding:10,
    backgroundColor:'#24CBAF'
  },
  img:{
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'black',
    borderRadius:100

  }
})

