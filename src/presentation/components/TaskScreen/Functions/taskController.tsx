//this is frondend + backend
import { useState } from "react";
import Task from "../../../../application/Task";
import taskService from "../../../../application/taskService";

const taskController = () => {
  const [items, setItems] = useState<Task[]>([]);

  let _taskService= new taskService();
  let TaskService= _taskService == null? new taskService() : _taskService;

  const createItem = (newItem: Task) => {
    TaskService.create(newItem);

    setItems([...items, newItem]);
  };

  const updateItem = (updatedItems: Task) => {

    TaskService.update(updatedItems);

    const resUpdatedItems = items.map((item) =>
      item.id === updatedItems.id ? { ...item, ...updatedItems } : item
    );
    setItems(resUpdatedItems);
  };

   async function removeItem (id: string) {
    TaskService.remove(id);
    let res = await TaskService.getAll()

    setItems(res);
  };

  const sortItemsByDate = () => {
    const sortedItems = [...items].sort((a, b) => {
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();

      if (dateA < dateB) {
        return -1; // Sort a to a lower index than b
      } else if (dateA > dateB) {
        return 1; // Sort b to a lower index than a
      } else {
        return 0; // Leave a and b unchanged with respect to each other
      }
    });

    const isSortedAsc = JSON.stringify(items) === JSON.stringify(sortedItems);
    if (isSortedAsc) {
      sortedItems.reverse();
    }

    setItems(sortedItems);
  };

  const sortItemsByStatus = () => {
    const sortedItems = [...items].sort((a, b) => a.status - b.status);
    setItems(sortedItems);
  };
  const clearItems = () => {
    setItems([]);
  };

  return {
    items,
    createItem,
    updateItem,
    removeItem,
    sortItemsByDate,
    sortItemsByStatus,
    clearItems,
  };
};

export default taskController;
