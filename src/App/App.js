import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Section from "./Section";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);

  const toggleHideCompleted = () => {
    setHideCompleted((hideCompleted) => !hideCompleted);
  };

  const {
    tasks,
    removeTask,
    toggleTaskCompleted,
    setAllCompleted,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>

      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
            setAllCompleted={setAllCompleted}
          />
        }
        content={
          <Tasks
            tasks={tasks}
            hideCompleted={hideCompleted}
            removeTask={removeTask}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
