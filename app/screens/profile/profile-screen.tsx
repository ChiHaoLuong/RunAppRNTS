import React, {useState} from "react"
import { observer } from "mobx-react-lite"
import { 
  ViewStyle,
  View,
  TextStyle,
  ImageStyle,
  ScrollView,
} from "react-native"
import { 
  Screen, 
  Text,
  AutoImage as Image
} from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const bowserLogo = require("./anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.blue,
  flex: 1,
}

const HEADER: ViewStyle = {
  flex: 1,
}

const TEXTTITLE: TextStyle = {
  fontSize: 22,
  margin: 20
}

const AVATARCONTAINER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  margin: 20
}

const AVATAR: ImageStyle = {
  borderRadius: 100,

}

const BODY: ViewStyle = {
  backgroundColor: color.background,
  flex: 1.3,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  paddingTop: 15,
}

const USERNAME: TextStyle = {
  color: color.primary,
  textAlign: "center",
  margin: 5,
  fontSize: 20,
  fontWeight: "bold"
}

const USEREMAIL: TextStyle = {
  color: color.palette.black,
  fontSize: 17,
  textAlign: "center",

}

const COMPANYINFOR: ViewStyle = {
  backgroundColor: color.background,
  margin: 20,
  borderRadius: 10,
  elevation: 15,
}

const COMPANYINFORTITLE: TextStyle = {
  color: color.palette.black,
  padding: 10,
  fontWeight: "bold"
}

const LEFTANDRIGHTINFOR: ViewStyle = {
  flexDirection: "row",
  paddingBottom: 10,
  paddingHorizontal: 10,
  justifyContent:"space-between"
}

const LEFTINFOR: TextStyle = {
  color: color.dim,
  flex: 1
}

const RIGHTINFOR: TextStyle = {
  color: color.palette.black,
  flex: 1
}

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER}>
        <Text text="Thông tin chung" style={TEXTTITLE} />
        <View style={AVATARCONTAINER} >
        <Image source={bowserLogo} style={AVATAR} width={200} height={200} />
        </View>
      </View>

      <View style={BODY} >
          <ScrollView >
          <Text text="Dương Xử Nữ" style={USERNAME} />
          <Text text="nudx@nichietsuvn.com" style={USEREMAIL} />

          <View style={COMPANYINFOR} >
            <Text text="Thông tin công việc" style={COMPANYINFORTITLE} />
            <View style={LEFTANDRIGHTINFOR} >
              <Text text="Công ty: " style={LEFTINFOR} />
              <Text text="Nichietsu VN" style={RIGHTINFOR} />
            </View>

            <View style={LEFTANDRIGHTINFOR} >
              <Text text="Chức vụ: " style={LEFTINFOR} />
              <Text text="Nhân viên" style={RIGHTINFOR} />
            </View>

            <View style={LEFTANDRIGHTINFOR} >
              <Text text="Ngày vào làm: " style={LEFTINFOR} />
              <Text text="27/12/2021" style={RIGHTINFOR} />
            </View>

            <View style={LEFTANDRIGHTINFOR} >
              <Text text="Địa điểm làm việc: " style={LEFTINFOR} />
              <Text text="70 Nguyễn Ngọc Phương, Phường 19, Bình Thạnh, Thành phố Hồ Chí Minh 72323, Việt Nam" style={RIGHTINFOR} />
            </View>
          </View>
          
          <View style={COMPANYINFOR} >
              <Text text="Lý lịch cơ bản" style={COMPANYINFORTITLE} />

              <View style={LEFTANDRIGHTINFOR} >
              <Text text="Họ tên: " style={LEFTINFOR} />
              <Text text="Dương Xử Nữ" style={RIGHTINFOR} />
              </View>

              <View style={LEFTANDRIGHTINFOR} >
              <Text text="Email: " style={LEFTINFOR} />
              <Text text="nudx@nichietsuvn.com" style={RIGHTINFOR} />
              </View>

              <View style={LEFTANDRIGHTINFOR} >
              <Text text="Số điện thoại: " style={LEFTINFOR} />
              <Text text="0123456789" style={RIGHTINFOR} />
              </View>

              <View style={LEFTANDRIGHTINFOR} >
              <Text text="Ngày sinh: " style={LEFTINFOR} />
              <Text text="20/12/2000" style={RIGHTINFOR} />
              </View>
              
              <View style={LEFTANDRIGHTINFOR} >
              <Text text="Giới tính: " style={LEFTINFOR} />
              <Text text="Nữ" style={RIGHTINFOR} />
              </View>

             
          </View>
          </ScrollView>
      </View>

    </Screen>
  )
})
