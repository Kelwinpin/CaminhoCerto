import React ,{useLayoutEffect, useState, useEffect} from 'react'
import{View, Text, StyleSheet, Image} from 'react-native'
import MapView ,{Marker}from 'react-native-maps'
import CustomButton from '../home/CustomButton'
import foto from '../assets/map-2.png'
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';

export default({navigation, route})=>{
  const {nome, telefone, tipo} = route.params
  const[location, setLocation] = useState(null)
  
  useLayoutEffect(()=> {
    navigation.setOptions({title:nome})
  },[navigation, nome])

  useEffect(
    ()=> {
      getCurrentPosition()
    },
    []
  )

  async function getCurrentPosition(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status === 'granted'){
       let location = await Location.getCurrentPositionAsync({});
      //setLocation(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });

    }else{
      alert('Habilite a localização do seu celular')
    }

  }

  function enviarLocalizacao(){
    if(location){
      const url = `https://www.google.com.br/maps/@${location.latitude},${location.longitude},15z`
      const text = 'Preciso da sua ajuda estou nesse local \n'+url

      Linking.openURL(`whatsapp://send?text=${text}&phone+55${telefone}`)
    }
  }
  return(
    <View style = {styles.container}>
      <View style ={styles.mapa}>
        <MapView style={styles.mapaView}
           initialRegion={location}
            > 
            {
              location &&
              <Marker coordinate ={location}>
              </Marker>
            }
        </MapView>
      </View>
       <View style = {styles.buttons}>
        <CustomButton 
        title='Localização'
        onPress={enviarLocalizacao}
        />

        <CustomButton 
        title='Discar'
        onPress={()=>Linking.openURL('tel:'+telefone)}
        />
      </View>  
    </View>
    
  )
}   

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    mapa:{
     flex:1
    },
    mapaView:{
      height:'100%',
      witdh: '100%'
    },
    buttons:{
      height:200,
      padding:10,
      justifyContent:'space-evenly'
    }
  })