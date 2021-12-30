import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  CheckScreen,
  WorkingScreen,
  CheckDetailScreen,

} from "../../screens"

export type CheckNavParamList = {
  check: undefined,
  checkDetail: undefined,
  working: undefined
}

const Stack = createStackNavigator<CheckNavParamList>()
export const CheckNav = () => {
  return (
    <Stack.Navigator initialRouteName="check" screenOptions={{ cardStyle: { backgroundColor: "transparent" }, }}>
      <Stack.Screen name="check" component={CheckScreen} />
      <Stack.Screen name="checkDetail" component={CheckDetailScreen} />
      <Stack.Screen name="working" component={WorkingScreen} />
    </Stack.Navigator>
  )
}
