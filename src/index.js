import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleItem(e) {
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
  return (
    <div>
      <h1>🎄 FAR AWAY 🧳</h1>
      <form onSubmit={handleItem}>
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
      {/* {items &&
        items.map((item, index) => <p key={index}>{item.description}</p>)} */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
