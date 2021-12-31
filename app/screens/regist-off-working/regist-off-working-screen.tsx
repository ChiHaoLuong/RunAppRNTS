import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { Screen, Text, AutoImage, Button } from "../../components"
import SelectDropdown from "react-native-select-dropdown"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment"
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

  const data = ["Phép năm", "Việc riêng có lương", "Nghỉ bù", "Nghỉ không lương", "Nghỉ thai sản", "Nghỉ ốm", "Nghỉ sinh nhật"]
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  

  const onChangeFrom = (event, selectedDate) => {
    const currentDate  = selectedDate || dateFrom

    setDateFrom(currentDate);
    setShowFrom(false)
    console.log("Dong 32, regist-off-working-day", currentDate)
  };

  const onChangeTo = (event, selectedDate) => {
    const currentDate  = selectedDate || dateTo

    setDateTo(currentDate);
    setShowTo(false)
    console.log("Dong 32, regist-off-working-day", currentDate)
  };



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
          onSelect={(selectedItem, index) => { console.log("Dong 40, regist-off-screen", selectedItem, index) }}
          buttonTextAfterSelection={(selectedItem, index) => {

            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText="Nhấp để chọn loại phép nghỉ"
          defaultValue={null}
          buttonStyle={styles.SELECTDROP}
          buttonTextStyle={styles.SELECTDROPTEXT}
        />
      </View>

      <View style={styles.CARDOFF} >
        <Text text="Thời gian nghỉ" style={styles.CARDOFFTITLE} />
        <SelectDropdown
          statusBarTranslucent={true}
          data={["Cả ngày", "Nửa ngày"]}
          onSelect={(selectedItem, index) => { console.log("Dong 61, regist-off-screen", selectedItem, index) }}
          buttonTextAfterSelection={(selectedItem, index) => {

            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultValueByIndex={0}
          buttonStyle={styles.SELECTDROP}
          buttonTextStyle={styles.SELECTDROPTEXT}
        />

        <View style={styles.OFFDAYCARD} >
          <View style={styles.OFFDAYINNERCARD} >
            <Text text="Ngày bắt đầu" style={styles.OFFDAYCARDLEFTTITLE} />
          
            <Button
             style={styles.BTNGETDATE} 
             textStyle={styles.BTNGETDATETITLE} 
             onPress={()=>setShowFrom(true)} 
             text={dateFrom.getDate()+"/"+(dateFrom.getMonth()+1)+"/"+dateFrom.getFullYear()} />

            {showFrom && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateFrom}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeFrom}
              />
            )}
          </View>

          <View style={styles.OFFDAYINNERCARD} >
          <Text text="Ngày bắt đầu" style={styles.OFFDAYCARDLEFTTITLE} />
          
          <Button
           style={styles.BTNGETDATE} 
           textStyle={styles.BTNGETDATETITLE} 
           onPress={()=>setShowTo(true)} 
           text={dateTo.getDate()+"/"+(dateTo.getMonth()+1)+"/"+dateTo.getFullYear()} />

          {showTo && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateTo}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeTo}
            />
          )}
          
          </View>

          
        </View>
      </View>


    </Screen>
  )
})

const styles = StyleSheet.create({
  USERCARD: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: color.blue
  },

  BOWSER: {
    alignSelf: "center",
    maxWidth: "100%",
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  USERINFOR: {
    margin: 5
  },

  USERINFORNAME: {
    color: color.palette.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  USERINFORCOMPANY: {
    color: color.line,
    fontSize: 15,
  },

  CARDOFF: {
    marginVertical: 10,
    padding: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    elevation: 5,
 
  },

  CARDOFFTITLE: {
    color: color.palette.blue,
    marginBottom: 5,
  },

  SELECTDROP: {
    width: "100%",
    alignSelf: "center",
    height: 30,
    marginVertical: 5,
    borderRadius: 5
  },

  SELECTDROPTEXT: {
    fontSize: 15,

    },

  OFFDAYCARD: {
    flexDirection: "row",
    justifyContent:"space-between"
  },

  OFFDAYINNERCARD: {
    marginTop: 10,
    flex:1,
  },

  OFFDAYCARDLEFTTITLE: {
    color: color.dim,
    fontSize: 14,
  },

  BTNGETDATE:{
    backgroundColor: "#EFEFEF",
    width:"98%",
    alignSelf:"center",
    borderRadius:10,
  },

  BTNGETDATETITLE:{
    color: color.palette.black,
    fontWeight:"bold",
    fontSize: 14,
    alignSelf:"flex-start"
  },




})
