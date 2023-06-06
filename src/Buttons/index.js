import "./style.css";

const Buttons = ({
  tasks,
  hideCompleted,
  toggleHideCompleted,
  markAllCompleted,
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
          onClick={() => markAllCompleted()}
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
