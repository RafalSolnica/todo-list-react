import "./style.css";

const Tasks = ({ tasks, hideCompleted }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item ${
          task.completed && hideCompleted ? "tasks__item--hidden" : ""
        }`}
      >
        <button
          className={`tasks__itemButton tasks__itemButton--toggleCompleted`}
        >
          {task.completed ? "✔" : ""}
        </button>
        <span
          className={`tasks__itemContent ${
            task.completed ? "tasks__itemContent--completed" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="tasks__itemButton tasks__itemButton--remove ">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
