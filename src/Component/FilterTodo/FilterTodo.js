import React from "react";
import "./filtertodo.css"

const FilterTodo = ({ setDone, setUndone }) => {
  return (
    <div className="filter">
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        onChange={(e) => setDone(e.target.checked)}
      />
      {}
      <label for="vehicle1"> Done</label>
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        onChange={(e) => setUndone(e.target.checked)}
      />
      <label for="vehicle1"> unDone</label>
      <br></br>
    </div>
  );
};

export default FilterTodo;