import React, {FC, useState} from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, ScrollView, TextInput, Alert } from "react-native"
import { Screen, Text, AutoImage, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import SelectDropdown from "react-native-select-dropdown"
import { StackScreenProps } from "@react-navigation/stack"
import { HomeNavParamList } from "../../navigators"
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"

const bowserLogo = require("../profile/anhdaidien.jpg")


const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

export const RegistRefillScreen:FC<StackScreenProps<HomeNavParamList,"registRefill">> = ({navigation}) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [timeFrom, setTimeFrom] = useState(new Date())
  const [showTimeFrom, setShowTimeFrom] = useState(false)

  const onChangTimeFrom = (event, selectedTime) =>{
    const currentTime = selectedTime || timeFrom

    setTimeFrom(currentTime)
    setShowTimeFrom(false)
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.USERCARD}>
        <AutoImage style={styles.BOWSER} source={bowserLogo} />
        <View style={styles.USERINFOR}>
          <Text text="Dương Xử Nữ" style={styles.USERINFORNAME} />
          <Text text="Nichietsu VN" style={styles.USERINFORCOMPANY} />
        </View>
      </View>

      <View style={styles.REFILLCONTAINER} >
          <Text text="Chế độ vào ra" style={styles.REFILLTITLECONTAINER} />
          <SelectDropdown 
            data={["Vào làm", "Ra về", "Cả hai"]}
            onSelect={(selectedItem, index)=>{

            }}
            buttonTextAfterSelection={(selectedItem, index)=>{
              return selectedItem
            }}

            rowTextForSelection={(item, index)=>{
              return item
            }}
            defaultValueByIndex={0}
            buttonStyle={styles.SELECTDROP}
            buttonTextStyle={styles.SELECTDROPTEXT}
          />


      </View>

      <View style={styles.REFILLCONTAINER} >
            <Text text="Thời gian bổ sung" style={styles.REFILLTITLECONTAINER} />
            <View style={styles.REFILLTIMEDATA} >
            <Button
                  style={styles.BTNGETTIME}
                  textStyle={styles.BTNGETTIMETITLE}
                  onPress={() => setShowTimeFrom(true)}
                  text="Chọn giờ"
                />

                <Text
                  style={styles.REFILLTIMETEXT}
                  text={moment(timeFrom).format("hh:mm A")}
                />
            {showTimeFrom&&(
              <DateTimePicker
                mode="time"
                value={timeFrom}
                is24Hour={true}
                display="clock"
                onChange={onChangTimeFrom}
              />
            )
            }
            </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  USERCARD: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: color.background,
    elevation: 10
  },

  BOWSER: {
    alignSelf: "center",
    maxWidth: "100%",
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  USERINFOR: {
    margin: 5,
  },

  USERINFORNAME: {
    color: color.blue,
    fontSize: 18,
    fontWeight: "bold",
  },

  USERINFORCOMPANY: {
    color: color.dim,
    fontSize: 15,
  },

  REFILLCONTAINER:{
    backgroundColor: color.background,
    elevation: 10,
    margin: 10,
    padding: 10,
  },

  REFILLTITLECONTAINER:{
    color: color.blue,
    fontWeight:"bold",
    fontSize: 18,
  },

  SELECTDROP: {
    width: "100%",
    alignSelf: "center",
    height: 30,
    marginVertical: 5,
    borderRadius: 5,
  },

  SELECTDROPTEXT: {
    fontSize: 15,
  },

  BTNGETTIME:{
    backgroundColor: "#EFEFEF",
    flex: 1,
    alignSelf: "center",
    borderRadius: 10,
  },

  BTNGETTIMETITLE:{
    color: color.palette.black,
    fontSize: 15,
    alignSelf: "flex-start",
  },

  REFILLTIMETEXT:{
    flex: 1.8,
    color: color.palette.black,
    marginHorizontal: 10,
    fontWeight: "bold",
  },

  REFILLTIMEDATA:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  }
})
