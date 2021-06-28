import React from "react";
import { useDispatch } from "react-redux";
import EditTodo from "../EditTodo/EditTodo";
import { completeTodo, deleteTodo } from "../JS/Actions/action";
import "./todocard.css";
import { Button} from 'react-bootstrap';

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-card">
      <span
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
        className="todo-text"
        onClick={() => dispatch(completeTodo(todo.id))}
      >
        {todo.text}
      </span>
      <EditTodo todo={todo} />
      <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}> X </Button>
     
    </li>
  );
};

export default TodoCard;