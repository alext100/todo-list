import { IAction, Task } from "type";
import actionTypes from "../actions/actionTypes";

const allTasksReducer = (action: IAction, allTasks: Task[]) => {
  let newTasks: Task[];

  switch (action?.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.allTasks];
      break;

    default:
      newTasks = allTasks;
  }

  return newTasks;
};

export default allTasksReducer;
