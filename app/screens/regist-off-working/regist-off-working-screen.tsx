import React, { useState, FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, ScrollView, TextInput, Alert } from "react-native"
import { Screen, Text, AutoImage, Button } from "../../components"
import SelectDropdown from "react-native-select-dropdown"
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"
import { StackScreenProps } from "@react-navigation/stack"
import { HomeNavParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
const bowserLogo = require("../profile/anhdaidien.jpg")

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}

export const RegistOffWorkingScreen: FC<StackScreenProps<HomeNavParamList, "registOffWorking">> = ({
  navigation,
}) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const data = [
    "Phép năm",
    "Việc riêng có lương",
    "Nghỉ bù",
    "Nghỉ không lương",
    "Nghỉ thai sản",
  ]
  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const [showFrom, setShowFrom] = useState(false)
  const [showTo, setShowTo] = useState(false)
  const [reasonEdt, setReasonEdt] = useState("")
  const [offDaysTotal, setOfDaysTotal] = useState(0)
  const [colorErr, setColorErr] = useState(color.error)
  const [halfDay, setHalfDay] = useState(false)

  const DataOffDate: Date[] = [
    // Date(YYYY, M-1, D+1)
    new Date(2022, 3, 11), // Giổ tổ Hùng Vương
    new Date(2022, 4, 2), // Giải phóng miền Nam
    new Date(2022, 4, 3), // Quốc tế lao động
    new Date(2022, 8, 4), // Quốc khánh
    new Date(2022, 0, 31), // Nghỉ tết Âm
    new Date(2022, 1, 1),
    new Date(2022, 1, 2),
    new Date(2022, 1, 3),
    new Date(2022, 1, 4),
  ]

  useEffect(() => {
    if(!halfDay)
    {
      var diff = moment(dateTo).diff(dateFrom, "days")
    if (diff < 0) 
    {
      setColorErr(color.error)
      setOfDaysTotal(diff)
    } 
    else 
    {
      var dateArray: Date[] = getDates(dateFrom, dateTo)
      diff = dateArray.length
      for (let i = 0; i < dateArray.length; i++) {
        // console.log("Dong 64, Thứ xin nghỉ tổng: ", dateArray[i].getDay() + " -- " + dateArray[i].getDate()+"/"+(dateArray[i].getMonth()+1))
        if (dateArray[i].getDay() == 6 || dateArray[i].getDay() == 0) {
          diff--
        }

        for (let j = 0; j < DataOffDate.length; j++) {
          // console.log("Dong 69 Ngày được nghỉ: ", (DataOffDate[j].getDate())+"/"+(DataOffDate[j].getMonth()+1))
          if (
            dateArray[i].getDate() == DataOffDate[j].getDate() &&
            dateArray[i].getMonth() == DataOffDate[j].getMonth()
          ) {
            // console.log("Dong 72 Ngày nghỉ trùng: ", (dateArray[i].getDate())+"/"+(dateArray[i].getMonth()+1+"/////"+DataOffDate[j].getDate())+"/"+(DataOffDate[j].getMonth()+1))

            diff--
          }
          // console.log("Dong 76 Tổng ngày chọn nghỉ: ", (dateArray[i].getDate())+"/"+(dateArray[i].getMonth()+1))
        }
      }
      if (diff > 0) setColorErr(color.blue)
      else setColorErr(color.error)
      setOfDaysTotal(diff)
    }
    }
    else
    {
      setOfDaysTotal(0.5)
      setDateTo(dateFrom)
      setColorErr(color.blue)
    }
    
  }, [dateFrom, dateTo, halfDay])

  function getDates(startDate: Date, stopDate: Date) {
    var dateArray = new Array()
    var currentDate = startDate
    while (currentDate <= stopDate) {
      dateArray.push(currentDate)
      currentDate = addDays(1, currentDate)
    }
    return dateArray
  }

  function addDays(days: number, currentDate: Date) {
    var dat = new Date(currentDate)
    dat.setDate(dat.getDate() + days)
    return dat
  }

  const onChangeFrom = (event, selectedDate) => {
    const currentDate = selectedDate || dateFrom

    setDateFrom(currentDate)
    setShowFrom(false)
  }

  const onChangeTo = (event, selectedDate) => {
    const currentDate = selectedDate || dateTo

    setDateTo(currentDate)
    setShowTo(false)
  }

  const acceptOff = () => {
    var diffFromNow = moment(dateFrom).diff(moment(), "days")
    if (diffFromNow < 0) Alert.alert("Lỗi", "Ngày bạn chọn đã là quá khứ rồi")
    // if (offDaysTotal < 0)
    // {
    //   Alert.alert("Lỗi", "Ngày kết thúc không được lớn hơn hoặc bằng ngày bắt đầu");
    // }
    // else if (reasonEdt == "") Alert.alert("Lỗi", "Vui lòng nhập lý do nghỉ")
    // else {
    //   Alert.alert("Thành công", "Xin nghỉ thành công")
    //   navigation.navigate("offworking");
    else 
    {
      if (reasonEdt == "") Alert.alert("Lỗi", "Vui lòng nhập lý do nghỉ")
      else 
      {
        if (colorErr === color.error) Alert.alert("Lỗi", "Vui lòng chọn đúng ngày")
        else 
        {
          if(halfDay)
          {
            Alert.alert
          (
            "Thành công",
            "Xin nghỉ thành công nửa ngày: " + dateFrom 
          )
          navigation.navigate("offworking")
          }
          else
          {
            Alert.alert
          (
            "Thành công",
            "Xin nghỉ thành công từ ngày: " + dateFrom + "Đến ngày: " + dateTo,
          )
          navigation.navigate("offworking")
          }
        }
      }
    }
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

      <ScrollView>
        <View style={styles.CARDOFF}>
          <Text text="Loại phép nghỉ" style={styles.CARDOFFTITLE} />
          <SelectDropdown
            statusBarTranslucent={true}
            data={data}
            onSelect={(selectedItem, index) => {
              console.log("Dong 86, regist-off-screen", selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            defaultButtonText="Nhấp để chọn loại phép nghỉ"
            defaultValue={null}
            buttonStyle={styles.SELECTDROP}
            buttonTextStyle={styles.SELECTDROPTEXT}
          />
        </View>

        <View style={styles.CARDOFF}>
          <Text text="Thời gian nghỉ" style={styles.CARDOFFTITLE} />
          <SelectDropdown
            statusBarTranslucent={true}
            data={["Cả ngày", "Nửa ngày"]}
            onSelect={(selectedItem, index) => {
             if(selectedItem=="Nửa ngày") setHalfDay(true)
             else setHalfDay(false)
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

          <View style={styles.OFFDAYCARD}>
            <View style={styles.OFFDAYINNERCARD}>
              <Text text="Ngày bắt đầu" style={styles.CARDOFFTITLE} />

              <View style={styles.OFFDAYDATA}>
                <Button
                  style={styles.BTNGETDATE}
                  textStyle={styles.BTNGETDATETITLE}
                  onPress={() => setShowFrom(true)}
                  text="Chọn ngày"
                />

                <Text
                  style={styles.OFFDAYDATE}
                  text={moment(dateFrom).format("dddd-DD/MM/YYYY").toString()}
                />
              </View>
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

            {!halfDay &&
            <View style={styles.OFFDAYINNERCARD}>
            <Text text="Ngày kết thúc" style={styles.CARDOFFTITLE} />

            <View style={styles.OFFDAYDATA}>
              <Button
                style={styles.BTNGETDATE}
                textStyle={styles.BTNGETDATETITLE}
                onPress={() => setShowTo(true)}
                text="Chọn ngày"
              />

              <Text
                style={styles.OFFDAYDATE}
                text={moment(dateTo).format("dddd-DD/MM/YYYY").toString()}
              />
            </View>
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
            }

            <Text
              text={"Tổng số ngày nghỉ: " + offDaysTotal}
              style={[styles.CARDOFFTITLE, { marginTop: 10, color: colorErr }]}
            />
          </View>
        </View>

        <View style={styles.CARDOFF}>
          <Text text="Lý do nghỉ" style={styles.CARDOFFTITLE} />
          <TextInput
            placeholder="Nhập lý do xin nghỉ..."
            onChangeText={setReasonEdt}
            clearButtonMode="always"
            style={styles.REASONINPUT}
          />
        </View>

        <Button
          onPress={acceptOff}
          text="Xác nhận xin nghỉ"
          style={styles.BTNACCEPT}
          textStyle={styles.BTNACCEPTTITLE}
        />
      </ScrollView>
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
    backgroundColor: color.blue,
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
    backgroundColor: color.background,
  },

  CARDOFFTITLE: {
    color: color.palette.blue,
    marginBottom: 5,
    fontWeight: "bold",
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

  OFFDAYCARD: {},

  OFFDAYINNERCARD: {
    marginTop: 10,
  },

  BTNGETDATE: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    alignSelf: "center",
    borderRadius: 10,
  },

  OFFDAYDATA: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  BTNGETDATETITLE: {
    color: color.palette.black,
    fontSize: 15,
    alignSelf: "flex-start",
  },

  OFFDAYDATE: {
    flex: 1.8,
    color: color.palette.black,
    marginHorizontal: 10,
    fontWeight: "bold",
  },

  REASONINPUT: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
  },

  BTNACCEPT: {
    marginHorizontal: 40,
    backgroundColor: color.blue,
    borderRadius: 5,
  },

  BTNACCEPTTITLE: {
    paddingVertical: 10,
    fontSize: 18,
  },
})
