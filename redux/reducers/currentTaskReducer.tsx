import { IAction } from "type";
import actionTypes from "../actions/actionTypes";

const currentTaskReducer = (action: IAction, currentTask = { task: {} }) => {
  let newCurrentTask;

  switch (action?.type) {
    case actionTypes.loadCurrentTask:
      newCurrentTask = { task: action.task };
      break;

    case actionTypes.resetCurrentTask:
      newCurrentTask = { task: {} };
      break;

    default:
      newCurrentTask = currentTask;
      break;
  }

  return newCurrentTask;
};

export default currentTaskReducer;
