/*import type {PropsWithChildren} from 'react';*/

import Header from "../components/TaskScreen/Header";
import ListItems from "../components/TaskScreen/ListItems";
import { useEffect, useState } from "react";
import Task from "../../application/Task";
import AsyncStorage from "@react-native-community/async-storage";
import taskController from "../components/TaskScreen/Functions/taskController";
import { Text, View } from "react-native";

import SortButton from "../components/TaskScreen/SortButton";

const TaskScreen = () => {
  const { items, createItem, updateItem, removeItem, clearItems,sortItemsByStatus,sortItemsByDate } = taskController();

  useEffect(() => {
    clearItems();
    
  }, []);

  

  return (
    <View>
      <Header createTask={createItem} />
      <SortButton sortItemsByStatus={()=>sortItemsByStatus()} sortItemsByDate={()=>sortItemsByDate()}   />
      

      <ListItems tasks={items}  removeItem={removeItem}  updateItem = {updateItem} />
    </View>
  );
};

export default TaskScreen;