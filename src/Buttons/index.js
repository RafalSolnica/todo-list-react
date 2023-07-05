import { ButtonsContainer, Button } from "./styled";

const Buttons = ({
  tasks,
  hideCompleted,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <Button onClick={() => toggleHideCompleted()}>
          {hideCompleted ? "Pokaż" : "Ukryj"} ukończone
        </Button>

        <Button
          onClick={() => setAllCompleted()}
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonsContainer>
);

export default Buttons;
