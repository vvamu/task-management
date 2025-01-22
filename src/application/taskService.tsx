import AsyncStorage from "@react-native-community/async-storage";
import Task from "./Task";



class taskService {

  public async checkIfKeyExists(id: string) {
    return (await AsyncStorage.getAllKeys()).some(key => key === id);
  }

  public async create(task: Task) {
    try {
      const jsonValue = JSON.stringify(task);
      await AsyncStorage.setItem(task.id, jsonValue);
    } catch (error) {
      console.log('Add() error from taskService :');
      console.log(error);
    }
  }

  public async getOne(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('getOne() error from taskService :');
      console.log(error);
    }
  }

  public async getAll(): Promise<Array<Task>> {
    let objects: Array<Task> = [];
    try {
      let keys = await AsyncStorage.getAllKeys();
      let objJSON = await AsyncStorage.multiGet(keys);

      if (objJSON != null && objJSON.length > 0) {
        objJSON.forEach((element: any) => {
          let task: Task = JSON.parse(element[1]);
          objects.push(task);
        });
      }
    } catch (error) {
      console.log('gelAll() error from taskService :');
      console.log(error);
    }
    return objects;
  }

  public async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('remove() error from taskService :');
      console.log(error);
    }
  }

  public async removeAll() {
    try {
      let keys = await AsyncStorage.getAllKeys();
      keys.forEach(async (key: string) => {
        await AsyncStorage.removeItem(key);
      });
    } catch (error) {
      console.log('removeAll() error from taskService :');
      console.log(error);
    }
  }

  public async update(task: Task) {
    try {
      const jsonValue = JSON.stringify(task);
      await AsyncStorage.mergeItem(task.id, jsonValue);
    } catch (error) {
      console.log('Update() error from taskService :');
      console.log(error);
    }
  }

  
}

export default taskService;