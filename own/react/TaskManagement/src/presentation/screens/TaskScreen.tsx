/*import type {PropsWithChildren} from 'react';*/

import Header from "../components/TaskScreen/Header";
import ListItems from "../components/TaskScreen/ListItems";
import { useEffect, useState } from "react";
import Task from "../../application/Task";
import AsyncStorage from "@react-native-community/async-storage";
import taskManager from "../components/TaskScreen/Functions/taskManager";
import { Text, View } from "react-native";

const TaskScreen = () => {
  const { items, createItem, updateItems, clearItems } = taskManager();

  useEffect(() => {
    clearItems();
    
  }, []);

  return (
    <View>
      <Header createTask={createItem} />
      <Text>1 - {items.length}</Text>
      <ListItems tasks={items} />
    </View>
  );
};

export default TaskScreen;