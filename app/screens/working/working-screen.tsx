import React from "react"
import { observer } from "mobx-react-lite"
import { 
  ViewStyle,
  TextStyle,
  ImageStyle,
  View,
  ScrollView,
 
} from "react-native"
import { 
  Screen, 
  Text, 
  AutoImage,
} from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.line,
  flex: 1,
}

const USERCARD: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingVertical: 20,
  alignItems: "center",
  backgroundColor: color.background,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
}

const USERINFOR: ViewStyle = {
  margin: 5
}

const USERINFORNAME: TextStyle = {
  color: color.palette.blueText,
  fontSize: 25,
}

const USERINFORCOMPANY: TextStyle = {
  color: color.palette.black,
  fontSize: 18,
}

const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: 80,
  height: 80,
  borderRadius: 50,
}

const CARDWORKING : ViewStyle = {
    margin: 10,
    borderRadius: 15,
    backgroundColor: color.background,
    paddingBottom: 20,
}

const TITLECARD : TextStyle = {
    color: color.text,
    fontWeight: "bold",
    backgroundColor: color.blue,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    textAlign: "center",
    fontSize: 18,
}

const CHECKCARD : ViewStyle = {
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent:"center",
  margin: 10,
}

const CHECK : ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent:"center"
}

const TIMECHECK: TextStyle = {
  color: color.palette.blueText,
  fontSize: 25,
  fontWeight: "bold",
  marginBottom: 10,
}


const BTNTEXTCHECK: TextStyle = {
   fontSize: 20,
   color: color.palette.black,

}

export const WorkingScreen = observer(function WorkingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={USERCARD}>
          <AutoImage style={BOWSER} source={bowserLogo} />

          <View style={USERINFOR}>
            <Text text="Dương Xử Nữ" style={USERINFORNAME} />
            <Text text="Nichietsu VN" style={USERINFORCOMPANY} />
          </View>
      </View>    

      <ScrollView >
      <View style={CARDWORKING} >
            <Text text="Thứ ba, 28/20/2021" style={TITLECARD} />
            <View style={CHECKCARD} >
                <View style={CHECK} >
                    <Text text="9:45" style={TIMECHECK} />
                    <Text text="VÀO LÀM" style={BTNTEXTCHECK} />
                </View>

                <View style={CHECK} >
                    <Text text="18:00" style={TIMECHECK} />
                    <Text text="RA VỀ" style={BTNTEXTCHECK} />
                </View>
            </View>
      </View>

      <View style={CARDWORKING} >
            <Text text="Thứ ba, 28/20/2021" style={TITLECARD} />
            <View style={CHECKCARD} >
                <View style={CHECK} >
                    <Text text="9:45" style={TIMECHECK} />
                    <Text text="VÀO LÀM" style={BTNTEXTCHECK} />
                </View>

                <View style={CHECK} >
                    <Text text="18:00" style={TIMECHECK} />
                    <Text text="RA VỀ" style={BTNTEXTCHECK} />
                </View>
            </View>
      </View>

      <View style={CARDWORKING} >
            <Text text="Thứ ba, 28/20/2021" style={TITLECARD} />
            <View style={CHECKCARD} >
                <View style={CHECK} >
                    <Text text="9:45" style={TIMECHECK} />
                    <Text text="VÀO LÀM" style={BTNTEXTCHECK} />
                </View>

                <View style={CHECK} >
                    <Text text="18:00" style={TIMECHECK} />
                    <Text text="RA VỀ" style={BTNTEXTCHECK} />
                </View>
            </View>
      </View>

      <View style={CARDWORKING} >
            <Text text="Thứ ba, 28/20/2021" style={TITLECARD} />
            <View style={CHECKCARD} >
                <View style={CHECK} >
                    <Text text="9:45" style={TIMECHECK} />
                    <Text text="VÀO LÀM" style={BTNTEXTCHECK} />
                </View>

                <View style={CHECK} >
                    <Text text="18:00" style={TIMECHECK} />
                    <Text text="RA VỀ" style={BTNTEXTCHECK} />
                </View>
            </View>
      </View>
      </ScrollView>
    </Screen>
  )
})
