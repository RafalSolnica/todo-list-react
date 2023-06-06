import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "Przejść na Reacta", completed: true },
  { id: 2, content: "Zjeść kolację", completed: false },
];

function App() {
  const [hideCompleted, setHideCompleted] = useState(false);

  const toggleHideCompleted = () => {
    console.log("test");
    setHideCompleted((hideCompleted) => !hideCompleted);
  };

  return (
    <Container>
      <Header />

      <Section title="Dodaj nowe zadanie" content={<Form />} />

      <Section
        title="Lista zadań"
        content={<Tasks tasks={tasks} hideCompleted={hideCompleted} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
