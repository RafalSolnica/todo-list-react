import Form from "../Form";
import Tasks from "../Tasks";
import Buttons from "./Buttons";
import Section from "../Section";
import Container from "../Container";
import { useState, useEffect } from "react";

function App() {
  const localStorageTasks = localStorage.getItem("tasks");

  const [hideCompleted, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState(
    localStorageTasks ? JSON.parse(localStorageTasks) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        completed: false,
      },
    ]);
  };

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>

      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      ></Section>

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
      ></Section>
    </Container>
  );
}

export default App;
