import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../components/login';
import SignUp from '../components/signup';
import Welcome from '../components/welcome';
import AsyncStorage from '../components/asyncStorage';

const stack=createStackNavigator();

const Navigation=()=>{
    return(
     <NavigationContainer> 
        <stack.Navigator initialRouteName="Welcome">
        <stack.Screen name="Login" component={Login}/>
        <stack.Screen name="Welcome" component={Welcome}/> 
        <stack.Screen name="SignUp" component={SignUp}/>
        <stack.Screen name="asyncStorage" component={AsyncStorage}/>
        
        </stack.Navigator>
    </NavigationContainer>
    );
};

export default Navigation;