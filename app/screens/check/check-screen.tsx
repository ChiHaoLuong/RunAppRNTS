import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import MapView from 'react-native-maps';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const MAP: ViewStyle = {
  width: "100%",
  height: "100%"
}

export const CheckScreen = observer(function CheckScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
          <MapView
          style={MAP}
    initialRegion={{
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

    </Screen>
  )
})
