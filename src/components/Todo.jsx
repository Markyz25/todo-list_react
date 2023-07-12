import { useContext, useState } from "react";
import { Title, TodoStyle } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";

const Todo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <TodoStyle>
      <div
      className="todo-style"
      >
        <div>
          <Title>Lista de tarefas</Title>
        </div>
        <div className="toggle">
          <Switch
            checked={theme}
            onChange={toggleTheme}
            className="checkbox"
          />
        </div>
      </div>
      <TodoItem />
    </TodoStyle>
  );
};

export default Todo;
