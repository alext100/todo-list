/* eslint-disable no-shadow */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Task } from "type";
import {
  loadCurrentTaskAction,
  resetCurrentTaskAction,
} from "../redux/actions/actionCreators";
import {
  createTaskThunk,
  deleteTaskThunk,
  getTasksThunk,
  updateTaskThunk,
} from "../redux/thunks/thunks";

const useTasks = () => {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const { tasks, currentTask } = useSelector(({ tasks, currentTask }: any) => ({
    tasks,
    currentTask,
  }));

  const loadTasks = useCallback(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  const createTask = (task: Task) => {
    dispatch(createTaskThunk(task));
  };

  const deleteTask = (id: string) => {
    dispatch(deleteTaskThunk(id));
  };

  const updateTask = (task: Task) => {
    dispatch(updateTaskThunk(task));
  };

  const loadCurrentTask = (task: Task) => {
    dispatch(loadCurrentTaskAction(task));
  };

  const resetCurrentTask = () => {
    dispatch(resetCurrentTaskAction());
  };

  return {
    tasks,
    currentTask,
    loadTasks,
    createTask,
    deleteTask,
    updateTask,
    loadCurrentTask,
    resetCurrentTask,
  };
};

export default useTasks;
