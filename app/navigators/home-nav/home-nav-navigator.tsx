import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  HomeScreen,
  WorkingScreen,
  OffWorkingScreen,
  OtScreen,
  RegistOffWorkingScreen
} from "../../screens"

export type HomeNavParamList = {
  home: undefined,
  working: undefined,
  offworking: undefined,
  overtime: undefined,
  registOffWorking: undefined
}

const Stack = createStackNavigator<HomeNavParamList>()
export const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="working" component={WorkingScreen} />
      <Stack.Screen name="offworking" component={OffWorkingScreen} />
      <Stack.Screen name="overtime" component={OtScreen}/>
      <Stack.Screen name="registOffWorking" component={RegistOffWorkingScreen} />
    </Stack.Navigator>
  )
}
