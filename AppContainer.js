import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

import DetailsOneScreen from "./src/screens/DetailsScreen/DetailsOneScreen";
import DetailsSecondScreen from "./src/screens/DetailsScreen/DetailsSecondScreen";



import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import NotificationsScreen from './src/screens/ProfileScreen/NotificationsScreen';

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

import {Button } from "react-native";






const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator  headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen}  />
    </HomeStack.Navigator>
);


const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
);


const NotificationsStack = createStackNavigator();
const NotificationsStackScreen = () => (
  <NotificationsStack.Navigator headerMode="none">
      <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} />
    </NotificationsStack.Navigator>
);



const ProfileTab = createBottomTabNavigator();
const ProfileTabScreen = () => (
  <ProfileTab.Navigator headerMode="none">
    <ProfileTab.Screen name="Profile" component={ProfileStackScreen} /> 
    <ProfileTab.Screen name="Notifications" component={NotificationsStackScreen} />
  </ProfileTab.Navigator>
);


const DetailsStack = createStackNavigator();
const DetailsStackScreen = () => (
  <DetailsStack.Navigator headerMode="none">
      <DetailsStack.Screen name="DetailsOne" component={DetailsOneScreen} />
      <DetailsStack.Screen name="DetailsSecond" component={DetailsSecondScreen}/>
    </DetailsStack.Navigator>
);




const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
  headerMode="none">
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      
    />
    <AuthStack.Screen
      name="Register"
      component={RegisterScreen}
     
    />
   
  </AuthStack.Navigator>
);


const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator drawerPosition="right" >
    <Drawer.Screen name="Home" component={HomeStackScreen} options={{
            drawerIcon: config => <Button title="Icon"/>
        }} />
    <Drawer.Screen name="Profile" component={ProfileTabScreen} options={{
            drawerIcon: config => <Button title="Here"/>
        }} />
    <Drawer.Screen name="Details" component={DetailsStackScreen} options={{
            drawerIcon: config => <Button title="!"/>
        }} />
  </Drawer.Navigator>
);




const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
     <RootStack.Screen 
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          
        }}
        
        
        
        
      />
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
         
        }}
     
      />
     
  </RootStack.Navigator>
);



export default () => {
  

  return (
    
      <NavigationContainer>
        <RootStackScreen  />
      </NavigationContainer>
   
  );
};


