import React, {FC, useState} from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ScrollView, TextStyle, ImageStyle } from "react-native"
import { Screen, Text, AutoImage, FormRow, Button, } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"


import { StackScreenProps } from "@react-navigation/stack"
import {HomeNavParamList} from '../../navigators'

const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}


const USERCARD: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingVertical: 20,
  alignItems: "center",
  backgroundColor: color.blue,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  marginBottom: 10,
}

const USERINFOR: ViewStyle = {
  margin: 5,

}

const USERINFORNAME: TextStyle = {
  color: color.text,
  fontSize: 25,
  fontWeight: "bold",
}

const USERINFORCOMPANY: TextStyle = {
  color: color.line,
  fontSize: 18,
}

const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: 80,
  height: 80,
  borderRadius: 50,
}

const CARDOFFWORKING : ViewStyle = {
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: color.background,
    borderRadius: 10,
    elevation: 15,
}

const CARDTITLE : ViewStyle = {
  flexDirection: "row",
  backgroundColor: color.blue,
  borderBottomWidth: 0.5,
  padding: 10,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  justifyContent: "center"
}

const TEXTTITLE: TextStyle = {
  color: color.text,
  fontWeight: "bold",
  fontSize: 15,
}

const CARDBODY: ViewStyle = {
  flexDirection: "row",
  padding: 10,
  paddingHorizontal: 10,
  
}

const INNERLEFTCARD: TextStyle = {
  color: color.dim,
  flex: 1.5
}

const INNERRIGHTCARD: TextStyle = {
  color: color.palette.black,
  flex: 1
}

const DAYOFNUM : TextStyle = {
  color: color.error,
  textAlign: "center",
  margin: 10
}

const BTNOFFWORKING: ViewStyle = {
    borderRadius: 20,
    marginHorizontal: 50,
    backgroundColor: color.palette.blue,
    margin: 5,
}

const BTNTEXTOFFWORKING: TextStyle = {
  margin: 7,
  fontSize: 13,
}

export const OffWorkingScreen: FC<StackScreenProps<HomeNavParamList, "registOffWorking">> = observer(
  ({navigation}) => {

    const registOffWorkingNav = () => {navigation.navigate("registOffWorking")}
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
        <View style={CARDOFFWORKING} >
          <View style={CARDTITLE} >
            <Text text="03/09/2021" style={TEXTTITLE} />
            <Text text="  -  " style={TEXTTITLE} />
            <Text text="04/09/2021" style={TEXTTITLE} />
          </View>

          <View style={CARDBODY} >
              <Text text="Lý do:" style={INNERLEFTCARD} />
              <Text text="Mệt mỏi quá trời quá đất luôn á hi" style={INNERRIGHTCARD} />
          </View>

          <View style={CARDBODY} >
              <Text text="Tổng số ngày nghỉ:" style={INNERLEFTCARD} />
              <Text text="2" style={INNERRIGHTCARD} />
          </View>
        </View>

        <View style={CARDOFFWORKING} >
          <View style={CARDTITLE} >
            <Text text="03/09/2021" style={TEXTTITLE} />
            <Text text="  -  " style={TEXTTITLE} />
            <Text text="04/09/2021" style={TEXTTITLE} />
          </View>

          <View style={CARDBODY} >
              <Text text="Lý do:" style={INNERLEFTCARD} />
              <Text text="Mệt mỏi quá trời quá đất luôn á hi" style={INNERRIGHTCARD} />
          </View>

          <View style={CARDBODY} >
              <Text text="Tổng số ngày nghỉ:" style={INNERLEFTCARD} />
              <Text text="2" style={INNERRIGHTCARD} />
          </View>
        </View>

        <View style={CARDOFFWORKING} >
          <View style={CARDTITLE} >
            <Text text="03/09/2021" style={TEXTTITLE} />
            <Text text="  -  " style={TEXTTITLE} />
            <Text text="04/09/2021" style={TEXTTITLE} />
          </View>
          <View style={CARDBODY} >
              <Text text="Lý do:" style={INNERLEFTCARD} />
              <Text text="Mệt mỏi quá trời quá đất luôn á hi" style={INNERRIGHTCARD} />
          </View>

          <View style={CARDBODY} >
              <Text text="Tổng số ngày nghỉ:" style={INNERLEFTCARD} />
              <Text text="2" style={INNERRIGHTCARD} />
          </View>
        </View>
      </ScrollView>
      <Text text="Bạn còn 10 ngày phép trong tháng" style={DAYOFNUM} />

      <Button style={BTNOFFWORKING} onPress={registOffWorkingNav}  text="ĐĂNG KÝ NGHỈ PHÉP" textStyle={BTNTEXTOFFWORKING} />
      

    </Screen>
  )
})
