import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleHideCompleted = () => {
    setHideCompleted((hideCompleted) => !hideCompleted);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const setAllCompleted = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, completed: true })));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, content }]);
  };

  return (
    <Container>
      <Header />

      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        content={
          <Tasks
            tasks={tasks}
            hideCompleted={hideCompleted}
            removeTask={removeTask}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
            setAllCompleted={setAllCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
