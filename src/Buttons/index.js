import { ButtonContainer, Button } from "./styled";

const Buttons = ({
  tasks,
  hideCompleted,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <ButtonContainer>
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
  </ButtonContainer>
);

export default Buttons;
