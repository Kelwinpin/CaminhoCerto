import React from 'react'
import{TouchableOpacity, Text, StyleSheet} from 'react-native'

export default ({title = 'N/A', color = '#24CBAF', onPress}) =>(
    <TouchableOpacity style = {[styles.button, {backgroundColor: color}]} onPress={onPress}>
    <Text style = {styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )





const styles =  StyleSheet.create({
  button:{
    justifyContent:"center",
    height:70,
    alignItems:"center",
    borderRadius:20,
    elevation:3
  },

  text:{
    color:'white',
    fontSize:28,
    fontWeight:'bold',
    fontFamily:'roboto'
  },

})
