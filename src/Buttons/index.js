import "./style.css";

const Buttons = ({
  tasks,
  hideCompleted,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button
          className="buttons__button"
          onClick={() => toggleHideCompleted()}
        >
          {hideCompleted ? "Pokaż" : "Ukryj"} ukończone
        </button>

        <button
          className="buttons__button"
          onClick={() => setAllCompleted()}
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
