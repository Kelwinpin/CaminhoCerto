import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './home/HomeScreen.js'
import ListaContatosScreen from './contatosSOS/ListaContatosScreen'
import SOSScreen from './SOS/sosScreen'
import RastreioScreen from './rastreio/rastreioScreen'
import DicasScreen from './dicas/DicasScreen'

const Stack = createNativeStackNavigator();

export default() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'home' screenOptions={{
        headerStyle:{backgroundColor:'#24CBAF'},
        headerTintColor:'#fff',
        headerTitleStyle:{
          color: 'white'
        }
      }}
      >

        <Stack.Screen 
        name = 'home' 
        component = {HomeScreen} 
        options={{headerShown:false}}
        />

        <Stack.Screen 
        name = 'contatos' 
        component = {ListaContatosScreen} 
        options={{title:'Contatos SOS'}}
        />

        <Stack.Screen 
        name='sos' 
        component={SOSScreen}
        options={{title:'SOS'}}
        />

        <Stack.Screen 
        name='rastreio' 
        component={RastreioScreen}
        options={{title:'Rastreio'}}
        />

        <Stack.Screen
        name='dicas'
        component={DicasScreen}
        options={{title:'Dicas'}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )  
}