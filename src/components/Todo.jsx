import { useContext } from "react";
import { Title, TodoStyle } from "../styles/TodoStyle";
import TodoItem from "./TodoItem";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "react-switch"

const Todo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <TodoStyle>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Title>Lista de tarefas</Title>
        <label>
          <Switch onChange={toggleTheme} checked={{}}/>
        </label>
      </div>
      <TodoItem />
    </TodoStyle>
  );
};

export default Todo;
