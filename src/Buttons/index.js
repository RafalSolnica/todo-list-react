import "./style.css";

const Buttons = ({ tasks, hideCompletedTasks }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="buttons__button">
          {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
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
