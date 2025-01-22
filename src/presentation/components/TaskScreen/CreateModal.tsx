import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import taskController from "./Functions/taskController";
import Task from "../../../application/Task";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';


const CreateModal = ({...props}) => {
  const { createItem } = taskController();     
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState(Date());
  const [taskStatus, setTaskStatus] = useState("In progress");
  const [address, setAddress] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  
  

  const handleCreateItem = () => {

    const newItem: Task = {
      id: uuidv4(), 
      title: title,
      description: description,
      executionDateTime: dateTime,
      dateCreated  :moment().date().toString(),
      address: address,
      status: taskStatus == "In progress" ? 0 : taskStatus == "Completed" ? 1 : -1,
    };

    createItem(newItem);
  
    setTitle("");
    setDescription("");
    setDateTime(moment().date.toString())
    setAddress("");
    setTaskStatus("In progress");

  };

  return (
    <View style={styles.container}>
      <View style={{ alignContent: "flex-end" }}>
        <Button title="X" color="red" onPress={props.setModalVisible} />
      </View>
      <TextInput editable={false} value="Title" style={styles.label} />

      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setTitle(text)}
        style={styles.textInput}
      />

      <TextInput editable={false} value="Description" style={styles.label} />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setDescription(text)}
        style={styles.textInput}
      />

      <TextInput
        editable={false}
        value="Expiration date"
        style={styles.label}
      />
      <Button title="Open" onPress={() => setDatePickerVisibility(true)} />
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={new Date(dateTime)}
        onConfirm={(date) => {
          setDatePickerVisibility(false);
          setDateTime(date.toString());
        }}
        onCancel={() => {
          setDatePickerVisibility(false);
        }}
      />

      <Text>Status: {taskStatus}</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        style={styles.textInput}
      />

      <TextInput editable={false} value="Adress" style={styles.label} />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setAddress(text)}
        style={styles.textInput}
      />

      <Button title="Create" onPress={handleCreateItem} />
    </View>
  );
};

export default CreateModal;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
  label: {
    margin: 2,
    padding:3
  },
});