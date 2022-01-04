import React, {FC} from "react"
import { observer } from "mobx-react-lite"
import { 
  ViewStyle, 
  View, 
  TextStyle, 
  ImageStyle ,
  TouchableOpacity
} from "react-native"
import { 
  Screen, 
  Text, 
  AutoImage, 
} from "../../components"

import { StackScreenProps } from "@react-navigation/stack"
import {HomeNavParamList} from '../../navigators'

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

const USERCARD: ViewStyle = {
  flexDirection: "row",
  marginHorizontal: 20,
  marginVertical: 20,
  alignItems: "center",
}

const USERINFOR: ViewStyle = {
  margin: 5,
}

const USERINFORNAME: TextStyle = {
  color: color.text,
  fontSize: 25,
}

const USERINFORCOMPANY: TextStyle = {
  color: color.line,
  fontSize: 18,
}

const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: 70,
  height: 70,
  borderRadius: 50,
}

const HEADERCONTAINER: ViewStyle = {
  backgroundColor: color.blue,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  paddingHorizontal: 15,
  paddingBottom: 30
}

const WORKINGINFOR: ViewStyle = {
  backgroundColor: color.background,
  flexDirection: "row",
  borderRadius: 10,
  padding: 2,
}

const MONTHINFOR: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  margin: 5,
}

const INFORTITLE: TextStyle = {
  color: color.blue,
  textAlign: "center",
  fontWeight: "400",
  fontSize: 18,
}

const INFORDATA: TextStyle = {
  color: color.palette.blueText,
  margin: 1,
  fontSize: 30,
  fontWeight: "bold",
}

const CATEGORIESITEMSROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  
}

const CATEGORIESITEM: ViewStyle = {
  flex: 1,
  alignItems:"center",
  backgroundColor: color.background,
  marginTop: 20,
  marginHorizontal: 10,
  borderRadius: 10,
  elevation: 20,

}

const CATEGORY: TextStyle = {
  color: color.palette.blue,
  fontSize: 18,
  margin: 10
}

export const HomeScreen: FC<StackScreenProps<HomeNavParamList,"home">> = observer(
  ({navigation}) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
 
  const workingScreenNav =()=> navigation.navigate("working")
  const offWorkingScreenNav = () => navigation.navigate("offworking")
  const oTScreenNav = () => navigation.navigate("overtime")
  const refillWorkNav = () => navigation.navigate("refillWork")

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADERCONTAINER}>
        <View style={USERCARD}>
          <AutoImage style={BOWSER} source={bowserLogo} />

          <View style={USERINFOR}>
            <Text text="Dương Xử Nữ" style={USERINFORNAME} />
            <Text text="Nichietsu VN" style={USERINFORCOMPANY} />
          </View>
        </View>

        <View style={WORKINGINFOR}>
          <View style={MONTHINFOR}>
            <Text text="Ngày làm" style={INFORTITLE} />
            <Text text="20" style={INFORDATA} />
            <Text text="Ngày" style={INFORTITLE} />
          </View>

          <View style={MONTHINFOR}>
            <Text text="Ngày nghỉ" style={INFORTITLE} />
            <Text text="1" style={INFORDATA} />
            <Text text="Ngày" style={INFORTITLE} />
          </View>

          <View style={MONTHINFOR}>
            <Text text="Tăng ca" style={INFORTITLE} />
            <Text text="20" style={INFORDATA} />
            <Text text="Giờ" style={INFORTITLE} />
          </View>
        </View>
      </View>

      
          <View style={CATEGORIESITEMSROW}>
            <TouchableOpacity onPress={workingScreenNav} style={CATEGORIESITEM}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <MaterialIcons name="work" size={80} color={color.blue}  />
              <Text text="Công việc" style={CATEGORY} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={offWorkingScreenNav} style={CATEGORIESITEM}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <MaterialIcons name="work-off" size={80} color={color.blue}  />
              <Text text="Nghỉ phép" style={CATEGORY} />
            </View>
            </TouchableOpacity>
          </View>

          <View style={CATEGORIESITEMSROW}>
            <TouchableOpacity onPress={oTScreenNav} style={CATEGORIESITEM}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <MaterialIcons name="more-time" size={80} color={color.blue}  />
              <Text text="Tăng ca" style={CATEGORY} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={refillWorkNav} style={CATEGORIESITEM}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <MaterialIcons name="wysiwyg" size={80} color={color.blue}  />
              <Text text="Bù công" style={CATEGORY} />
            </View>
            </TouchableOpacity>
          </View>
          

          
    </Screen>
  )
})
