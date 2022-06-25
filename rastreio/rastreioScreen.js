import React from 'react'
import {View, Text, Image, StyleSheet, Touchable} from 'react-native'

import CustomButton from '../home/CustomButton'

export default({navigation})=>{
  return(
    <View style = {styles.container}>

      <Text style={styles.title}>RASTREIO</Text>

      <View style={styles.firstBallon}>
        <Text style={{color:'white', fontSize:22}}>
          O rastreio é composto de varias perguntas sobre diferentes fatores de risco.
        </Text>
      </View>

      <View style={styles.secondBallon}>
        <Text style={{color:'white', fontSize:22}}>
          Sempre que sua resposta apresentar um fator de risco recebera uma orientação em video.
        </Text>
      </View>

      <CustomButton title='Continuar' onPress={()=>navigation.navigate('dicas')}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:'space-evenly',
    
  },
  firstBallon:{
    backgroundColor:'#0D5145',
    borderRadius: 10,
    padding:10,
    margin:10
  },
  secondBallon:{
    backgroundColor:'#24CBAF',
    borderRadius: 10,
    padding:10,
    margin:10

  },
  title:{
    fontSize:30,
    fontFamily:'roboto',
    textAlign:'center',
    color:'#24CBAF'
  }
})