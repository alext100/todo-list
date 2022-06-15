import { combineReducers } from "redux";
import currentToDoReducer from "./currentToDoReducer";
import toDosReducer from "./toDosReducer";

const rootReducer = combineReducers({
  toDos: toDosReducer,
  currentToDo: currentToDoReducer,
});

export default rootReducer;
