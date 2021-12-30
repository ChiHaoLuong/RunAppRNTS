import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { Screen, Text, AutoImage } from "../../components"
import SelectDropdown from "react-native-select-dropdown"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

export const RegistOffWorkingScreen = observer(function RegistOffWorkingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  
  const data = ["Phép năm", "Việc riêng có lương", "Nghỉ bù", "Nghỉ không lương", "Nghỉ thai sản", "Nghỉ ốm", "Nghỉ sinh nhật" ]

  return (
    <Screen style={ROOT} preset="scroll">
   
        <View style={styles.USERCARD}>
          <AutoImage style={styles.BOWSER} source={bowserLogo} />
          <View style={styles.USERINFOR}>
            <Text text="Dương Xử Nữ" style={styles.USERINFORNAME} />
            <Text text="Nichietsu VN" style={styles.USERINFORCOMPANY} />
          </View> 
        </View>

        <View style={styles.CARDOFF} >
          <Text text="Loại phép nghỉ" style={styles.CARDOFFTITLE} />
          <SelectDropdown 
              statusBarTranslucent={true}
              data={data}
              onSelect={(selectedItem, index)=>{ console.log("Dong 40, regist-off-screen", selectedItem, index) }}
              buttonTextAfterSelection={(selectedItem, index)=>{
         
                return selectedItem;
              }}
              rowTextForSelection={(item, index)=>{
                return item; 
              }}
              defaultButtonText="Nhấp để chọn loại phép nghỉ"
              defaultValue={null}
              buttonStyle= {styles.SELECTDROP}
              buttonTextStyle={styles.SELECTDROPTEXT}
          />
        </View>

        <View style={styles.CARDOFF} >
            <Text text="Thời gian nghỉ" style={styles.CARDOFFTITLE} />
            <SelectDropdown 
              statusBarTranslucent={true}
              data={["Cả ngày", "Nửa ngày"]}
              onSelect={(selectedItem, index)=>{ console.log("Dong 61, regist-off-screen", selectedItem, index) }}
              buttonTextAfterSelection={(selectedItem, index)=>{
         
                return selectedItem;
              }}
              rowTextForSelection={(item, index)=>{
                return item; 
              }}
              defaultValueByIndex={0}
              buttonStyle= {styles.SELECTDROP}
              buttonTextStyle={styles.SELECTDROPTEXT}
          />
        </View>

        
    </Screen>
  )
})

const styles = StyleSheet.create({
    USERCARD:{
      flexDirection: "row",
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: "center",
      marginBottom: 10,
      backgroundColor:"white"
    },

    BOWSER:{
      alignSelf: "center",
      maxWidth: "100%",
      width: 50,
      height: 50,
      borderRadius: 50,
    },

    USERINFOR:{
      margin: 5
    },

    USERINFORNAME:{
      color: color.palette.black,
      fontSize: 18,
      fontWeight: "bold",
    },

    USERINFORCOMPANY:{
      color: color.dim,
      fontSize: 15,
    },

    CARDOFF:{
      marginVertical: 10,
      padding: 20,
      marginHorizontal:10,
      justifyContent:"center",
      backgroundColor:"white"
    },

    CARDOFFTITLE:{
      color: color.palette.blue,
      marginBottom: 5,
    },

    SELECTDROP:{
      width: "100%",
      alignSelf:"center",
      height:30,
      marginVertical: 5,
      borderRadius: 5
    },

    SELECTDROPTEXT:{
      fontSize: 15,
      
    }

})
