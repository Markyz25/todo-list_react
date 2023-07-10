import { useState } from "react";
import { Input } from "../styles/Input";
import { FormTasks } from "../styles/FormTasks";
import { Select } from "../styles/Select";
import { ButtonAdd } from "../styles/ButtonAdd";

const Form = ({ addTask }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const addForm = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    addTask(text, category);
    setText("");
    setCategory("");
  };

  return (
    <FormTasks onSubmit={addForm}>
      <div>
        <Input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div>
        <Select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option>Selecione a categoria</option>
          <option value="Pessoa">Pessoal</option>
          <option value="Profissional">Profissinal</option>
          <option value="Trabalho">Trabalho</option>
        </Select>
      </div>
      <div>
        <ButtonAdd type="submit">ADD</ButtonAdd>
      </div>
    </FormTasks>
  );
};

export default Form;
