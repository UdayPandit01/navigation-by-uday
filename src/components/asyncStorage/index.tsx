import { View, Text,StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {StyleSheet} from 'react-native'

const Email = () => {
  const [email, setEmail] = useState('')
  const [valueInput, setValueInput] = useState()
  // 
  
  const saveEmail = async () => {
    await AsyncStorage.setItem('email', email)
    ToastAndroid.show("Email saved", 5000)
  }

  const showEmail = async () => {
    let result = await AsyncStorage.getItem('email')
    ToastAndroid.show(result, 5000)
  }
  return (
    <View>
      <TextInput onChangeText={(val)=>{setEmail(val); console.log(val)}} value={valueInput} placeholder="Enter your email" style={styles.input}/>
      <TouchableOpacity onPress={saveEmail} style={styles.save}> 
        <Text style={{textAlign:'center'}}> Save Email</Text>
      </TouchableOpacity>    
      
      <TouchableOpacity onPress={showEmail} style={styles.show}> 
        <Text style={{textAlign:'center'}} >Click To Show Data </Text>
      </TouchableOpacity> 
        <Text>{email}</Text>
    </View>
    

// {/* <TouchableOpacity style={styles.save} onPress={press}>
// <Text>Save Email</Text>
// </TouchableOpacity> */}
  )
}

export default Email;

const styles=StyleSheet.create({
  input:{
    borderWidth:3,
    borderColor:'black',
    borderRadius:12, 
    // padding:10,  
    margin:10, 
    // backgroundColor:"cyan",

  },

  save:{
    backgroundColor: 'cyan',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    margin:10,
    marginTop:50,
    textAlign:''
    // textAlign:'center'
    },

    show:{
      backgroundColor: 'cyan',
      borderWidth:1,
      borderRadius:10,
      padding:10,
      margin:10,
      // marginHorizontal:130,
      // width:10,
      // height:15,

    },


})

