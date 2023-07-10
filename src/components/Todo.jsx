import React from "react";
import { Title, TodoStyle } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <TodoStyle>
      <Title>Lista de tarefas</Title>
      <TodoItem/>
    </TodoStyle>
  );
};

export default Todo;
