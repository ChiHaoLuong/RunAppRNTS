import React from "react"

import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { HomeScreen, ProfileScreen } from "../../screens"

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { HomeNav } from "../home-nav/home-nav-navigator"

import { CheckScreen } from "../../screens/check/check-screen"
export type BottomNavParamList = {
  check: undefined 
  homeNav: undefined,
  profile: undefined,
}


// Option
const NavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,

}

const HomeScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: (props: { focused; color; size }) =>(
    <FontAwesome name="home" color={props.color} size={props.size} />
  )
}

const checkScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: (props: { focused; color; size }) =>(
    <FontAwesome name="plus" color={props.color} size={props.size} />
  )
}

const profileScreenOptions: BottomTabNavigationOptions = {
  tabBarIcon: (props: { focused; color; size }) =>(
    <FontAwesome name="user" color={props.color} size={props.size} />
  )
}


const Stack = createBottomTabNavigator<BottomNavParamList>()
export const BottomNav = () => {
  return (
    <Stack.Navigator screenOptions={NavigatorOptions} initialRouteName="homeNav">
      <Stack.Screen name="homeNav" options={HomeScreenOptions} component={HomeNav} />
      <Stack.Screen name="check" options={checkScreenOptions} component={CheckScreen} />
      <Stack.Screen name="profile" options={profileScreenOptions} component={ProfileScreen}  />
    </Stack.Navigator>
  )
}
