import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reacta", completed: false },
  { id: 2, content: "Zjeść obiad", completed: true },
];
let hideCompletedTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />

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
