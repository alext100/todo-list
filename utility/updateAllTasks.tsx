import { Task } from "type";

const updateAllTasks = (tasks: Task[], updatedTask: Task) => {
  const taskIndex = tasks.findIndex((obj) => obj.id === updatedTask.id);
  const updatedTaskObj = {
    ...tasks[taskIndex],
    taskName: updatedTask.taskName,
    taskDescription: updatedTask.taskDescription,
    state: updatedTask.state,
  };
  const updatedAllTasks = [
    ...tasks.slice(0, taskIndex),
    updatedTaskObj,
    ...tasks.slice(taskIndex + 1),
  ];

  return updatedAllTasks;
};

export default updateAllTasks;
