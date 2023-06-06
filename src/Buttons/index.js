import "./style.css";

const Buttons = ({ tasks, hideCompleted, toggleHideCompleted }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="buttons__button" onClick={toggleHideCompleted}>
          {hideCompleted ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
