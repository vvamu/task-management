import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Item(item:any){
    return(<TouchableHighlight style={style.text}> <Text >{item.title}</Text></TouchableHighlight>)
}

const style = StyleSheet.create(
    {
      text:{
        padding:20,
        textAlign:'center'
      }
    }
  )