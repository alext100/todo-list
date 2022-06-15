import { combineReducers } from "redux";
import currentTaskReducer from "./currentTaskReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  currentTask: currentTaskReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
