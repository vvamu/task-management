//this is frondend + backend
import { useState } from "react";
import Task from "../../../../application/Task";

const taskManager = () => {
  const [items, setItems] = useState<Task[]>([]);

  const createItem = (newItem: Task) => {
    
    setItems([...items, newItem]);
  };

  const updateItems = (updatedItems: Task) => {
    const resUpdatedItems = items.map((item) =>
      item.id === updatedItems.id ? { ...item, ...updatedItems } : item
    );
    setItems(resUpdatedItems);
  };

  const sortItemsByDate = () => {
    const sortedItems = [...items].sort((a, b) => {
      const dateA = new Date(a.executionDateTime).getTime();
      const dateB = new Date(b.executionDateTime).getTime();

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
    updateItems,
    sortItemsByDate,
    sortItemsByStatus,
    clearItems,
  };
};

export default taskManager;
