import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reacta", completed: true },
    { id: 2, content: "Zjeść kolację", completed: false },
  ]);

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

  const markAllCompleted = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        return { ...task, completed: true };
      })
    );
  };

  return (
    <Container>
      <Header />

      <Section title="Dodaj nowe zadanie" content={<Form />} />

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
            markAllCompleted={markAllCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
