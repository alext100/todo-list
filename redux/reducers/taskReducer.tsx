import { IAction, Task } from "type";
import actionTypes from "../actions/actionTypes";

const taskReducer = (action: IAction, tasks = []) => {
  let newTask;

  switch (action?.type) {
    case actionTypes.loadTasks:
      newTask = [...(action.tasks as Task[])];
      break;

    case actionTypes.deleteTask:
      newTask = tasks.filter((task: Task) => task.id !== action.id);
      break;

    case actionTypes.createTask:
      newTask = [...tasks, action.task];
      break;

    case actionTypes.updateTask:
      newTask = tasks.map((task: Task) =>
        task.id === action.task.id ? { ...task, ...action.task } : task
      );
      break;

    default:
      newTask = [tasks];
  }

  return newTask;
};

export default taskReducer;
