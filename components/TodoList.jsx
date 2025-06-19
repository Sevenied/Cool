
import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <input
              value={item}
              onChange={(e) => editItem(idx, e.target.value)}
            />
            <button onClick={() => deleteItem(idx)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
