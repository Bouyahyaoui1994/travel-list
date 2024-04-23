import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState("Input");

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItem) * 100);

  let sortedItem;

  if (sortBy === "Input") sortedItem = items;

  if (sortBy === "Description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "Packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleAddItem(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    setItems((items) => [...items, newItem]);

    setDescription("");
    setQuantity(1);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div>
      <h1>🎄 FAR AWAY 🧳</h1>
      <form onSubmit={handleAddItem}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <div>
        <ul>
          {sortedItem.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => handleToggleItem(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}
              >
                {item.quantity} {item.description}
              </span>
              <button onClick={() => handleDeleteItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Input">Sort by input order</option>
            <option value="Description">Sort by description</option>
            <option value="Packed">Sort by packed status</option>
          </select>
          <button onClick={() => handleClearItem()}>Clear list</button>
        </div>
      </div>
      <footer>
        {!items.length ? (
          <span>Start adding some items to your packing list 🛰</span>
        ) : Percentage === 100 ? (
          <span>You got everything! Ready to go 🛰</span>
        ) : (
          <span>
            You have {numItem} items on your list, and you alredy packed
            {numPacked} ({Percentage})
          </span>
        )}
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
