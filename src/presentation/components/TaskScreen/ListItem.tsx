import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Task from "../../../application/Task";


const ListItem = ( {item }: { item: Task }) => {
  return (
    <TouchableHighlight style={style.text}>
      <View style={{ backgroundColor: "white" }}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create(
    {
      text:{
        padding:20,
        textAlign:'center'
      }
    }
  )
export default ListItem;