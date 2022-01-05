import React, { FC, useState, useEffect } from "react"
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

export const RegistRefillScreen: FC<StackScreenProps<HomeNavParamList, "registRefill">> = ({
  navigation,
}) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [timeFrom, setTimeFrom] = useState(new Date())
  const [showTimeFrom, setShowTimeFrom] = useState(false)
  const [timeTo, setTimeTo] = useState(new Date())
  const [showTimeTo, setShowTimeTo] = useState(false)
  const [day, setDay] = useState(new Date())
  const [showDay, setShowDay] = useState(false)
  const [reasonEdt, setReasonEdt] = useState("")
  const [isCheckIn, setIsCheckIn] = useState(true)
  const [isCheckOut, setIsCheckOut] = useState(false)
  const [errMsg, setErrMsg] = useState("") 

  useEffect(()=>{

    const diffTimeFromTimeTo = moment(timeTo).diff(moment(timeFrom), "hours")
    if(moment(day).isAfter(moment())) 
    {
      setErrMsg("Vui lòng chọn ngày hôm nay hoặc quá khứ")

    }
    else if(!reasonEdt) setErrMsg("Nhập lý do ")
    else if(isCheckIn && isCheckOut)
    {
      if(diffTimeFromTimeTo <= 0) 
      {
        setErrMsg("Giờ làm và giờ ra về phải cách nhau 1 tiếng")
      }
      else setErrMsg("")
    }
    else setErrMsg("")
  },[timeFrom, timeTo, day, isCheckIn, isCheckOut, reasonEdt])

  const onChangeTimeFrom = (event, selectedTime) => {
    const currentTime = selectedTime || timeFrom

    setTimeFrom(currentTime)
    setShowTimeFrom(false)
  }

  const onChangeTimeTo = (event, selectedTime) => {
    const currentTime = selectedTime || timeTo

    setTimeTo(currentTime)
    setShowTimeTo(false)
  }

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || day

    setDay(currentDate)
    setShowDay(false)
  }

  const acpListener = () =>{
    if(errMsg)
    {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ và đúng thông tin")
    }
    else 
    {
      Alert.alert("Thành công", "Bạn đã đăng ký ")
      navigation.navigate("refillWork")

    }
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <ScrollView>      
        <View style={styles.USERCARD}>
        <AutoImage style={styles.BOWSER} source={bowserLogo} />
        <View style={styles.USERINFOR}>
          <Text text="Dương Xử Nữ" style={styles.USERINFORNAME} />
          <Text text="Nichietsu VN" style={styles.USERINFORCOMPANY} />
        </View>
      </View>

      <View style={styles.REFILLCONTAINER}>
        <Text text="Chế độ vào ra" style={styles.REFILLTITLECONTAINER} />
        <SelectDropdown
          data={["Vào làm", "Ra về", "Cả hai"]}
          onSelect={(selectedItem, index) => {
            switch(selectedItem)
            {
              case "Vào làm":
                setIsCheckIn(true)
                setIsCheckOut(false)
                break
              case "Ra về": 
                setIsCheckOut(true)
                setIsCheckIn(false)  
      
                break
              default:
                setIsCheckIn(true)
                setIsCheckOut(true)
            }
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          defaultValueByIndex={0}
          buttonStyle={styles.SELECTDROP}
          buttonTextStyle={styles.SELECTDROPTEXT}
        />
      </View>

      <View style={styles.REFILLCONTAINER}>
        <Text text="Ngày điểm danh bổ sung" style={styles.REFILLTITLECONTAINER} />
        <View style={styles.REFILLTIMEDATA}>
          <Button
            style={styles.BTNGETTIME}
            textStyle={styles.BTNGETTIMETITLE}
            onPress={() => setShowDay(true)}
            text="Chọn ngày"
          />

          <Text style={styles.REFILLTIMETEXT} text={moment(day).format("dddd/DD/MM/YYYY")} />
          {showDay && (
            <DateTimePicker
              mode="date"
              value={day}
              is24Hour={true}
              display="calendar"
              onChange={onChangeDate}
            />
          )}
        </View>
      </View>

      <View style={styles.REFILLCONTAINER}>
        <Text text="Thời gian điểm danh bổ sung" style={styles.REFILLTITLECONTAINER} />
        {isCheckIn && (
          <View style={styles.REFILLTIMEDATA}>
          <Button
            style={styles.BTNGETTIME}
            textStyle={styles.BTNGETTIMETITLE}
            onPress={() => setShowTimeFrom(true)}
            text="Chọn giờ vào làm"
          />

          <Text style={styles.REFILLTIMETEXT} text={moment(timeFrom).format("hh:mm A")} />
          {showTimeFrom && (
            <DateTimePicker
              mode="time"
              value={timeFrom}
              is24Hour={true}
              display="clock"
              onChange={onChangeTimeFrom}
            />
          )}
        </View>
        )}

{isCheckOut && (
          <View style={styles.REFILLTIMEDATA}>
          <Button
            style={styles.BTNGETTIME}
            textStyle={styles.BTNGETTIMETITLE}
            onPress={() => setShowTimeTo(true)}
            text="Chọn giờ ra về"
          />

          <Text style={styles.REFILLTIMETEXT} text={moment(timeTo).format("hh:mm A")} />
          {showTimeTo && (
            <DateTimePicker
              mode="time"
              value={timeTo}
              is24Hour={true}
              display="clock"
              onChange={onChangeTimeTo}
            />
          )}
        </View>
        )}
      </View>

      <View style={styles.REFILLCONTAINER} >
          <Text text="Lý do (*)" style={styles.REFILLTITLECONTAINER} />
          <TextInput
            placeholder="Nhập lý do xin nghỉ..."
            onChangeText={setReasonEdt}
            clearButtonMode="always"
            style={styles.REASONINPUT}
          />
      </View>
      </ScrollView>

            <Text text={errMsg} style={{color: color.error, textAlign:"center", marginTop: 10}} />

      <Button
          onPress={acpListener}
          text="Xác nhận điểm danh bổ sung"
          style={styles.BTNACCEPT}
          textStyle={styles.BTNACCEPTTITLE}
        />
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
    elevation: 10,
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
    fontSize: 20,
    fontWeight: "bold",
  },

  USERINFORCOMPANY: {
    color: color.dim,
    fontSize: 15,
  },

  REFILLCONTAINER: {
    backgroundColor: color.background,
    elevation: 10,
    margin: 10,
    padding: 10,
  },

  REFILLTITLECONTAINER: {
    color: color.blue,
    fontWeight: "bold",
    fontSize: 16,
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

  BTNGETTIME: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    alignSelf: "center",
    borderRadius: 10,
  },

  BTNGETTIMETITLE: {
    color: color.palette.black,
    fontSize: 15,
    alignSelf: "flex-start",
  },

  REFILLTIMETEXT: {
    flex: 1.2,
    color: color.palette.black,
    marginHorizontal: 10,
    fontWeight: "bold",
  },

  REFILLTIMEDATA: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  
  REASONINPUT: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    marginTop: 5
  },

  BTNACCEPT: {
    marginHorizontal: 45,
    backgroundColor: color.blue,
    borderRadius: 5,
    marginVertical: 20
  },

  BTNACCEPTTITLE: {
    paddingVertical: 5,
    fontSize: 16,
  },

  TEXTERROR:{
    textAlign: "center",
    color: color.error
  },
})
