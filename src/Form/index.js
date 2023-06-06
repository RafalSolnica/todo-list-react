import "./style.css";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const ref = useRef(null);

  const resetTaskInput = () => {
    setTaskContent("");
    ref.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (taskContent.trim() !== "") addNewTask(taskContent.trim());

    resetTaskInput();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        placeholder="Co jest do zrobienia?"
        value={taskContent}
        ref={ref}
        onChange={({ target }) => setTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
