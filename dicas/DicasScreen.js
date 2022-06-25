import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import CustomButton from '../home/CustomButton'

import {buscarTodas} from './DicasAPI'

export default () => {

  const [dicas, setDicas] = useState()

  useEffect(()=>{
    carregarDicas()
  }, [])

  const carregarDicas= async()=>{
    const dados = await buscarTodas()
    setDicas(dados)
  }
  return(
    <View style={styles.container}>
      <View style={{backgroundColor:'white', flex:1}}>
      <Text>{JSON.stringify(dicas)}</Text>
      </View>

      <View style={styles.buttons}>
        <CustomButton title='SIM' color='red'/>
        <CustomButton title='NÃO' color='red'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  buttons:{
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center"
  }
})