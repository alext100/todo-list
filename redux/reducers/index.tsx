import { combineReducers } from "redux";
import currentTaskReducer from "./currentTaskReducer";
import tasksReducer from "./tasksReducer";
import allTasksReducer from "./allTasksReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  allTasks: allTasksReducer,
  currentTask: currentTaskReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
