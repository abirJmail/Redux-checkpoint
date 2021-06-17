import "./App.css";
import { useState } from "react";
import AddTodo from "./Component/AddTodo/AddTodo";
import FilterTodo from "./Component/FilterTodo/FilterTodo";
import TodoList from "./Component/TodoList/TodoList";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  console.log(done, unDone);

  return (
    <div className="App">
      <div className="add">
        <AddTodo  />
      </div>
      
      
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      

      <TodoList done={done} unDone={unDone} />
    </div>
  );
}

export default App;