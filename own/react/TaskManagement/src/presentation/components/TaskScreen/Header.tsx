import { useState } from "react";
import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import ItemModal from "./ItemModal";

const Header = ({ ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Tasks list</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ItemModal setModalVisible={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create new</Text>
      </Pressable>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  header: {
    backgroundColor: "gray",
    flexDirection: "row",
    padding: 20,
  },
  headerText: {
    fontFamily: "ComicSans",
    fontSize: 30,
    fontWeight: "400",
    color: "black",

    flex: 8,
    alignContent: "center",
  },
  headerBtn: {
    height: 40,
    width: 100,
    backgroundColor: "green",
    flex: 2,
  },

  centeredView: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20, marginBottom:90,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 90, paddingTop : 0, paddingBottom:0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});