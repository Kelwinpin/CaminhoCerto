import React ,{useState, useEffect}from 'react'
import{View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native'
import Contato from './Contato'
import foto from '../assets/filha.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button as ButtonPaper, Paragraph, Dialog, Portal, Provider, TextInput, TextInputMask} from 'react-native-paper'
import uuid from 'react-native-uuid';
/*
const listaContatos = [
  ,
  {id:2, nome:'KAMILA', telefone:'(31)98888-0088', tipo:'FILHA'},
  {id:3, nome:'ANA CLARA', telefone:'(31)98888-0077', tipo:'FILHA'},
  {id:4, nome:'ANA LUIZA', telefone:'(31)98888-0066', tipo:'FILHA'},
  {id:5, nome:'NATALIA', telefone:'(31)98888-0055', tipo:'FILHA'}
]
*/
export default ({navigation})=>{
  const [listaContatos, setListaContatos] = useState([])
  const [visible, setVisible] = useState(false)
  const [tipo, setTipo] = useState("")
  const [telefone, setTelefone] = useState("")
  const [nome, setNome] = useState("")



  async function loading(){
    const myObject = await AsyncStorage.getItem('@contatosSOS').then(JSON.parse) || []
    
      setListaContatos(myObject)
    
  }

  useEffect(()=>{
    loading()
  },[])

  const addContatos = async() =>{
    
    const contatos = await AsyncStorage.getItem('@contatosSOS').then(JSON.parse)||[]
    

    contatos.push({id:uuid.v4(), nome, telefone, tipo})

    await AsyncStorage.setItem('@contatosSOS',JSON.stringify(contatos))
    setListaContatos(contatos)
    setVisible(false)
  }

  const removeContatos = async(id)=>{
    const novaListaContatos=listaContatos.filter(c => c.id != id)

    await AsyncStorage.setItem('@contatosSOS',JSON.stringify(novaListaContatos))
    setListaContatos(novaListaContatos)
  }

  const renderItem = ({item}) =>{
    const{id, nome, telefone, tipo} = item
    
    return(
      <TouchableOpacity
        onPress = {()=> navigation.navigate('sos', {nome, telefone, tipo})}
      >
        <Contato style = {styles.contato}
          foto = {foto}
          nome = {item.nome}
          tipo = {item.tipo}
          telefone = {item.telefone}
          onDelete = {() => removeContatos(id)}
        />
      </TouchableOpacity>
    )
  }
  return(
   <Provider> 
    <View style = {styles.container}>
      <FlatList 
      data = {listaContatos}
      renderItem = {renderItem}
      />

      <Button 
      title='Add Contatos'
      onPress={()=>setVisible(true)}
      />

    </View>
    <Portal>
      <Dialog visible={visible} onDismiss={()=>setVisible(false)}>
        <Dialog.Title>Novo contatos</Dialog.Title>
        <Dialog.Content>
           <TextInput
            label='Nome'
            value={nome}
            onChangeText={(text) => setNome(text)}
            mode='outlined'
          />
          <TextInput
            label='Telefone'
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            mode='outlined'
          />
         <TextInput
            label='Tipo'
            value={tipo}
            onChangeText={(text) => setTipo(text)}
            mode='outlined'
          />
        </Dialog.Content>
        <Dialog.Actions>
          <ButtonPaper
            onPress={addContatos}
          >
            SALVAR
          </ButtonPaper> 
          <ButtonPaper>CANCELAR</ButtonPaper>         
        </Dialog.Actions>
      </Dialog>
    </Portal>   
   </Provider> 
  )
}

 const styles = StyleSheet.create({
   container: {
     
   },

 })