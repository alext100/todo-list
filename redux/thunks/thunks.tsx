import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "redux/reducers";
import { Task } from "type";
import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
  updateTaskAction,
} from "../actions/actionCreators";

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_LOCAL as string;

export const getTasksThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const response = await axios(serverURL);
    if (response) {
      const loadedTasks = await response.data;
      dispatch(loadTasksAction(loadedTasks));
    } else {
      throw new Error("Could not fetch information from the API");
    }
  };

export const createTaskThunk =
  (task: Task): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response = await axios({
      url: serverURL,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({ ...task, state: "ToDo" }),
    });
    const taskToCreate = await response.data;
    dispatch(createTaskAction(taskToCreate));
  };

export const deleteTaskThunk =
  (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const { status } = await axios.delete(`${serverURL}/${id}`);
    if (status === 200) {
      dispatch(deleteTaskAction(id));
    }
  };

export const updateTaskThunk =
  (task: Task): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response = await fetch(`${serverURL}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updatedTask = await response.json();
    dispatch(updateTaskAction(updatedTask));
  };
