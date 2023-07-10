import { useContext } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Container } from "./styles/Container";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Container >
        <Todo />
      </Container>
    </div>
  );
}

export default App;
