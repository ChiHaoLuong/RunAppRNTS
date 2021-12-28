import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  HomeScreen,
  WorkingScreen,
  OffWorkingScreen
} from "../../screens"

export type HomeNavParamList = {
  home: undefined,
  working: undefined,
  offworking: undefined,
}

const Stack = createStackNavigator<HomeNavParamList>()
export const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="working" component={WorkingScreen} />
      <Stack.Screen name="offworking" component={OffWorkingScreen} />
    </Stack.Navigator>
  )
}
