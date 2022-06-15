import { Task } from "type";
import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks: Task[]) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const createTaskAction = (task: Task) => ({
  type: actionTypes.createTask,
  task,
});

export const deleteTaskAction = (id: string) => ({
  type: actionTypes.deleteTask,
  id,
});

export const updateTaskAction = (task: Task) => ({
  type: actionTypes.updateTask,
  task,
});

export const loadCurrentTaskAction = (task: Task) => ({
  type: actionTypes.loadCurrentTask,
  task,
});

export const resetCurrentTaskAction = () => ({
  type: actionTypes.resetCurrentTask,
});
