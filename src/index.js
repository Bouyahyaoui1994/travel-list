import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>🎄 FAR AWAY 🧳</h1>
      <form className=".add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select>
          {}
          <option value="1">1</option>
        </select>
        <input type="text" placeholder="Item..." />
        <button>ADD</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
