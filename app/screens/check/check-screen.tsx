import React, {useEffect, useState, FC} from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { Screen, Text, AutoImage as Img, Button } from "../../components"
import { StackScreenProps } from "@react-navigation/stack"
import {CheckNavParamList} from '../../navigators'
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const AVATAR = require('../profile/anhdaidien.jpg')

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  flex: 1,
}



export const CheckScreen : FC<StackScreenProps<CheckNavParamList, "check">> = ({navigation}) => {
  const [disableBtnOut, setDisableBtnOut] = useState(true)
  const [btnCheckInBackGroundColor, setBtnCheckInBackGroundColor] = useState(color.blue)
  const [btnCheckOutBackGroundColor, setBtnCheckOutBackGroundColor] = useState(color.line)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useEffect(()=>{
    if(disableBtnOut)
  { 
      setBtnCheckInBackGroundColor(color.blue)
      setBtnCheckOutBackGroundColor(color.line) 
  }
  else 
  {
    setBtnCheckInBackGroundColor(color.line)
      setBtnCheckOutBackGroundColor(color.blue) 
  }
  }, [disableBtnOut])

  const workingScreenNav = () => navigation.navigate("working");


  const movToCheckDetailsScreen = () =>{
    setDisableBtnOut(!disableBtnOut)
    navigation.navigate("checkDetail")
  }

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.CARDUSER} >
        <Img source={AVATAR} style={styles.AVATAR}  /> 
        <View style={styles.CARDUSERINFOR} >
        <Text text="Dương Xử Nữ" style={styles.CARDUSERNAME} />
        <Text text="Nichietsu VN" style={styles.CARDUSERCOMPANY} />
        </View>
      </View>

      <Button text="Xem lịch sử làm việc" onPress={workingScreenNav} style={styles.WORKINGHIS} textStyle={styles.WORKINGHISTITLE} />

      <View style={styles.CARDCHECK} >
        <View style={styles.CARDCHECKHEADER} >
          <Text text="Thứ ba, 28/07/2021" style={styles.CARDCHECKTITLE} />
        </View>

        <View style={styles.CARDCHECKBODY} >
        <View style={styles.CARDCHECKINNERBODY} >
            <Text text="-- -- : -- --" style={styles.CARDCHECKBODYTIME} />
            <Button text="Vào làm" disabled={!disableBtnOut} onPress={movToCheckDetailsScreen} textStyle={styles.BTNCHECKINNERTITLE} style={[styles.BTNCHECKIINER, {backgroundColor:btnCheckInBackGroundColor}]} />
        </View>

        <View style={styles.CARDCHECKINNERBODY} >
            <Text text="-- -- : -- --" style={styles.CARDCHECKBODYTIME} />
            <Button text="Ra về" disabled={disableBtnOut}  onPress={movToCheckDetailsScreen}   textStyle={styles.BTNCHECKINNERTITLE} style={[styles.BTNCHECKIINER, {backgroundColor:btnCheckOutBackGroundColor}]} />
        </View>
        </View>
      </View>

      <Text text="Vui lòng ghi nhớ checkIn và checkOut đầy đủ" style={styles.NOTE} />
      
    </Screen>
  )
}

const styles = StyleSheet.create({
    CARDUSER:{
      flexDirection: "row",
      elevation: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
    },

    AVATAR:{
      alignSelf: "center",
      maxWidth: "100%",
      width: 60,
      height: 60,
      borderRadius: 50,
    },

    CARDUSERINFOR:{
      marginVertical: 5,
      marginHorizontal: 10,
    },

    CARDUSERNAME:{
      color:color.palette.blueText,
      fontSize: 18,
    },

    CARDUSERCOMPANY:{
      color: color.dim
    },

    WORKINGHIS:{
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      backgroundColor: color.line
    },

    WORKINGHISTITLE:{
      color: color.palette.black,
    },

    CARDCHECK:{
      borderRadius: 10,
      justifyContent:"center",
      alignItems:"center",
      marginVertical: 15,
      marginHorizontal: 20,
      borderWidth: 0.5,
      borderColor: color.line
    },

    CARDCHECKHEADER:{
        backgroundColor: color.blue,
        width:"100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        paddingVertical: 5,
    },

    CARDCHECKTITLE:{
        textAlign: "center"
    },

    CARDCHECKBODY:{
       alignItems:"center",
       justifyContent:"center",
       marginBottom: 20,
    },

    CARDCHECKINNERBODY:{
        marginVertical: 20,
        justifyContent:"center",
        alignItems:"center"
    },

    CARDCHECKBODYTIME:{
        color: color.palette.blueText,
        fontSize: 25,
        marginBottom: 10,
      
    },

    BTNCHECKINNERTITLE:{
        fontSize: 15,
        textAlign: "center"
    },

    BTNCHECKIINER:{
        backgroundColor:color.blue,
        width: 150
    },

    NOTE:{
        color:color.error,
        textAlign: "center",
        position:"absolute",
        bottom: 20,
        width:"100%"
    },

    




})