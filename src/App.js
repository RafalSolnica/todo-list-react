import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", completed: true },
  { id: 2, content: "Zjeść kolację", completed: false },
];
let hideCompletedTasks = false;

function App() {
  return (
    <Container>
      <Header />

      <Section title="Dodaj nowe zadanie" content={<Form />} />

      <Section
        title="Lista zadań"
        content={
          <Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />
        }
        extraHeaderContent={<Buttons tasks={tasks} />}
      />
    </Container>
  );
}

export default App;
