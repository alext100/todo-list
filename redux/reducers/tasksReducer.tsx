import { IAction, Task } from "type";
import actionTypes from "../actions/actionTypes";

const tasksReducer = (action: IAction, tasks = []) => {
  let newTasks: Task[];

  switch (action?.type) {
    case actionTypes.deleteTask:
      newTasks = tasks.filter((task: Task) => task.id !== action.id);
      break;

    case actionTypes.createTask:
      newTasks = [...tasks, action.task];
      break;

    case actionTypes.updateTask:
      newTasks = tasks.map((task: Task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task
      );
      break;

    default:
      newTasks = tasks;
  }

  return newTasks;
};

export default tasksReducer;
