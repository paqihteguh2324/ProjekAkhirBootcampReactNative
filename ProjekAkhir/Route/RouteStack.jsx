import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons, Feather, Fontisto, AntDesign } from '@expo/vector-icons';
import LoginPage from '../Page/LoginPage';
import HomePage from '../Page/HomePage';
import RetgisterPage from '../Page/RegisterPage';
import AboutPage from "../Page/AboutPage";
import Credits from '../Page/Credits'
import DetailPage from "../Page/DetailPage";
import React from 'react'


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function RouteStack(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage" >
      <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}}/>
      <Stack.Screen name='HomePage' component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name='RegisterPage' component={RetgisterPage} options={{headerShown: false}}/>
      <Stack.Screen name='RouteBottom' component={RouteBottom} options={{headerShown: false}}/>
      <Stack.Screen name='DetailPage' component={DetailPage} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const RouteBottom = () => {
  // console.log(route.route.params.email.email)
  // const email= route.route.params.email.email;
  return (
    <Tab.Navigator
    activeColor="#ffffff"
    inactiveColor="#962995"
    initialRouteName="Film"
    barStyle={{backgroundColor:"#15024E", paddingBottom: 5}}
     >
       <Tab.Screen name="User" component={Credits} 
       options={{headerShown: false,    tabBarIcon: ({color}) => (
        <AntDesign name="user" size={20} color={color} />
      )}}/>
      <Tab.Screen name="Film" component={HomePage} options={{headerShown: false,    tabBarIcon: ({color}) => (
        <Fontisto name="film" size={20} color={color}/>
      )}}
      />
      <Tab.Screen name="AboutPage" component={AboutPage} options={{headerShown: false,    tabBarIcon: ({color}) => (
        <SimpleLineIcons name="info" size={20} color={color}/>
      )}}/>
    </Tab.Navigator>
  );
}
