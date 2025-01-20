import { FlatList, StyleSheet, Text } from "react-native";
import Item from "../Item/Item";

export default function ListItems(data:any){

    return (
        <FlatList style={style.text} data={data} renderItem={(el)=>(
           <Item item={el}></Item>
        )}/>
    )

}

const style = StyleSheet.create(
  {
    text:{
      padding:20,
      textAlign:'center'
    }
  }
)