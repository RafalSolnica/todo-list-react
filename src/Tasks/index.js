import { List, Item, Content, Button } from "./styled.js";

const Tasks = ({ tasks, hideCompleted, removeTask, toggleTaskCompleted }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} $hidden={task.completed && hideCompleted}>
        <Button $toggleCompleted onClick={() => toggleTaskCompleted(task.id)}>
          {task.completed ? "✔" : ""}
        </Button>
        <Content $completed={task.completed}>{task.content}</Content>
        <Button $remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
