import React, {FC} from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, FlatList, ImageStyle, TextStyle, ScrollView} from "react-native"
import { Screen, Text, AutoImage, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import moment from "moment"

import { StackScreenProps } from "@react-navigation/stack"
import {HomeNavParamList} from '../../navigators'

const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

const HEADERCONTAINER: ViewStyle = {
  backgroundColor: color.blue,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  paddingHorizontal: 15,
  paddingBottom: 30
}

const USERCARD: ViewStyle = {
  flexDirection: "row",
  marginHorizontal: 20,
  marginVertical: 20,
  alignItems: "center",
}

const BOWSER: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: 70,
  height: 70,
  borderRadius: 50,
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

const LISTREFILLWORK: ViewStyle = {
  // margin: 20,
}

const ITEMREFILLCONTAINER: ViewStyle = {
  marginVertical: 10,
  borderRadius: 10,
  elevation: 10,
  backgroundColor:color.background,
  marginHorizontal: 20
  
}

const TEXTTITLE: TextStyle = {
  textAlign:"center",
  backgroundColor:color.blue,
  fontSize: 18,
  borderTopLeftRadius: 10,
  borderTopRightRadius:10,
}

const INNERCARDREFILL: ViewStyle = {
  flexDirection: "row",
  padding: 10,
}

const TEXTTYPEFILL: TextStyle = {
  color: color.dim,
  fontSize: 16,
  flex: 1
}

const TEXTTYPEINFORREFILL: TextStyle = {
  flex: 1,
  color: color.palette.black
}

const BTNREFILLWORK: ViewStyle = {
  borderRadius: 10,
  marginHorizontal: 50,
  backgroundColor: color.palette.blue,
  margin: 5,
}

const BTNREFILLWORKTITLE: TextStyle = {
  margin: 7,
  fontSize: 13,
}

export const RefillWorkScreen: FC<StackScreenProps<HomeNavParamList, "refillWork">> = ({navigation})=> {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const registRefillNav = () => navigation.navigate("registRefill")

  const data = [
    {id:1, day: moment("20112021", "DDMMYYYY"), typeRefill: "checkIn", timeRefill:moment().hours(24).minutes(0), reason:"Quên điểm danh"},
    {id:2, day: moment("21112021", "DDMMYYYY"), typeRefill: "checkOut", timeRefill:moment().hours(18).minutes(0), reason:"Quên điểm danh"},
    {id:3, day: moment("22112021", "DDMMYYYY"), typeRefill: "checkIn", timeRefill:moment().hours(19).minutes(0), reason:"Quên điểm danh"},
    {id:4, day: moment("22112021", "DDMMYYYY"), typeRefill: "checkIn", timeRefill:moment().hours(19).minutes(0), reason:"Quên điểm danh"},
  ]


  return (
  
    <Screen style={ROOT} preset="fixed">

      <FlatList 
        style={LISTREFILLWORK}
        ListHeaderComponent={
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
            <Text text="Số lần quên điểm danh" style={INFORTITLE} />
            <Text text="20" style={INFORDATA} />
            <Text text="Lần" style={INFORTITLE} />
          </View>
        </View>
      </View>
        }
        data={data}
        renderItem={({item})=>(
          <View style={ITEMREFILLCONTAINER} >
            <Text text={item.day.format("dddd-DD/MM/YYYY")} style={TEXTTITLE}/>
            <View style={INNERCARDREFILL} >
                  <Text text="Loại bù: " style={TEXTTYPEFILL} />
                  <Text text={item.typeRefill} style={TEXTTYPEINFORREFILL} />
            </View>

            <View style={INNERCARDREFILL} >
                  <Text text="Thời gian bù: " style={TEXTTYPEFILL} />
                  <Text text={item.timeRefill.format("hh:mm:A")} style={TEXTTYPEINFORREFILL} />
            </View>

            <View style={INNERCARDREFILL} >
                  <Text text="Lý do: " style={TEXTTYPEFILL} />
                  <Text text={item.reason} style={TEXTTYPEINFORREFILL} />
            </View>
          </View>)}
      />
    
      <Button text="Nhấp vào để đăng ký bù công" style={BTNREFILLWORK} textStyle={BTNREFILLWORKTITLE} onPress={registRefillNav} />
    </Screen>
 
  )
}
