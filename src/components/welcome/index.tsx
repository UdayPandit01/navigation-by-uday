import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// import SignUp from '../signup';
// import Login from '../login';
// import asyncStorage from '../asyncStorage';


const Welcome = () => {
  const navigator = useNavigation(); 

  const onClick = () => {
    console.log('clicked');
    navigator.navigate('SignUp');
  };
  const onTap = () => {
    console.log('clicked');
    navigator.navigate('Login');
  };

  const press = () => {
    console.log('clicked');
    navigator.navigate('asyncStorage');
  };


  return (
    <View>
       <TouchableOpacity onPress={onClick}>
        <Text>click here to signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onTap}>
        <Text>click here to login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={press}>
        <Text>async storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;