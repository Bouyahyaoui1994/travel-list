export default function Footer({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItem) * 100);

  return (
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
  );
}
