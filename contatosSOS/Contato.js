import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons';


export default ({foto, tipo, nome, telefone,onDelete}) =>(
  <View style={styles.container}>

    <Image source = {foto} style={styles.imagem}/>

      <View>
        <Text>{tipo}</Text>
        <Text>{nome}</Text>
        <Text>{telefone}</Text>
      </ View>
      
      <AntDesign name="edit" size={30} color="black" />

      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="delete" size={30} color="black" />
      </TouchableOpacity>

  </View>
)

 const styles = StyleSheet.create({
   container:{
     flexDirection:'row',
     padding: 5,
     justifyContent: 'space-between',
     alignItems:'center'
   },

   imagem:{
     height:90,
     width:70,
     borderRadius:15,
   },

 })