import { FlatList, StyleSheet,TouchableHighlight, Text } from "react-native";
import Task from "../../../application/Task";
import { useState } from "react";

const ListItems = ({ tasks }: { tasks: Task[] }) => (
  <FlatList
    contentContainerStyle={{ borderRadius: 6, overflow: "hidden" }}
    style={styles.text}
    data={tasks}
    renderItem={({ item }) => <ListItem item={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
);


const ListItem = ( {item }: { item: Task }) => {

  const [statusModelVisible, setStatusModelVisible] = useState(false);
  

  return (
    <TouchableHighlight style={styles.cart}>
      <View style={{ backgroundColor: "white" }}>
        <FontAwesome6 name="circle" color={item.status=="In progress" ? "#74C0FC" : item.status == "Missed" ? "red" : "green"} iconStyle="solid" style={{flex:2}} />
        <Text style={{flex:6;padding:5}}>{item.title}</Text>

        <Pressable
            style={[styles.button, styles.buttonOpen] , {}}
            onPress={() => setStatusModelVisible(true)}
        >

            
        </Pressable>
      </View>

    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({

  cart:{
    padding:20,
    textAlign:'center',
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
}
)

export default ListItems;