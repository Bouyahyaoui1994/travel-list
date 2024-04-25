import { useState } from "react";
import Item from "./Item.js";

export default function List({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("Input");
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

  return (
    <div>
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Input">Sort by input order</option>
          <option value="Description">Sort by description</option>
          <option value="Packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearItem()}>Clear list</button>
      </div>
    </div>
  );
}
