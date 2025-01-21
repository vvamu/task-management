import { FlatList, StyleSheet, Text } from "react-native";
import ListItem from "./ListItem";
import Task from "../../../application/Task";

const ListItems = ({ tasks }: { tasks: Task[] }) => (
  <FlatList
    contentContainerStyle={{ borderRadius: 6, overflow: "hidden" }}
    style={style.text}
    data={tasks}
    renderItem={({ item }) => <ListItem item={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
);
const style = StyleSheet.create({
    text:{
      padding:20,
      textAlign:'center'
    }
})

export default ListItems;