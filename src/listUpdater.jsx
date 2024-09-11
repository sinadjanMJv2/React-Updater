import React, { useState } from "react";
import $ from "jquery";
function listUpdater() {
  const [fruit, setFruits] = useState(["Banana", "Apple", "Orange"]);

  const handleAddFruit = (e) => {
    const newFruit = $("#inputFruit").val();
    $("#inputFruit").val("");

    setFruits((f) => [...f, newFruit]);
  };
  const handleRemoveFruit = (index) => {
    setFruits(fruit.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <h2>List of Fruits</h2>
      <ul>
        {fruit.map((fruits, index) => (
          <li key={index} onClick={() => handleRemoveFruit(index)}>
            {fruits}
          </li>
        ))}
      </ul>
      <input type="text" id="inputFruit" placeholder="Input fruit name" />
      <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  );
}

export default listUpdater;
