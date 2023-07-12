import { useContext } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { Container } from "./styles/Container";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme === true ? "dark-theme" : ""}`}>
      <Container >
        <Todo />
      </Container>
    </div>
  );
}

export default App;
