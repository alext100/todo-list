import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = (initialValues: any) =>
  createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
export default configureStore;