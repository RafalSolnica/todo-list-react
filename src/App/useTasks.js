import useLocalStorageState from "./useLocalStorageState";

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const setAllCompleted = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, completed: true })));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        completed: false,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskCompleted,
    setAllCompleted,
    addNewTask,
  };
};
