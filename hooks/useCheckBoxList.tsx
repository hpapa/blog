import { useState } from "react";

const useCheckBoxList = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);

  const onChange = (event) => {
    const { name, checked } = event.target;
    const newItems = [...items];
    const changedItem = newItems.find(el => el.name === name);
    changedItem.checked = checked;
    setItems(newItems);
  }

  return { items, setItems, onChange };
}

export default useCheckBoxList; 